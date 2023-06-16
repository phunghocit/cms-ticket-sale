import React, { useState,useEffect } from 'react'
import { ButtonAction, ButtonCreate, ButtonFile, TableCustom } from '../Styles/styles'
import SearchBox from '../SearchBox'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ticketsRemainingSelector } from '../../redux/selectors';
import { editTickets, fetchTickets } from './TicketSlide';
import { useAppDispatch } from '../../hook/redux';
import TableTicketManagement from './TableTicketManagement';
import FilterTicketManagement from './Filter/FilterTicketManagement';
import { Input } from 'antd';
import filtersComponentSlide from '../filtersComponentSlide';
import DetailTicketManagement from './DetailTicketManagement';
const { Search } = Input;

const TicketManagement = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [options, setOptions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [formDataEdit, setFormDataEdit] = useState<any>({});

  const ticketList = useSelector(ticketsRemainingSelector);
  console.log(ticketList);

  const dispatch = useAppDispatch();

  let ticketList1:any = [] // event
  let ticketList2:any = [] //family
  let count1 =1
  let count2 =1
  ticketList.forEach((tiket:any) => {

    if (tiket.nameevent!="") {
      ticketList1.push({...tiket,stt:count1++})
    }else{
      ticketList2.push({...tiket,stt:count2++})

    }
  });
  console.log(ticketList1);
  console.log(ticketList2);

  useEffect(() => {
    dispatch(fetchTickets("tickets"));

  }, [])

  const changOptions =()=>{
    if (options==1) {
      setLoading(true);
      setOptions(0);
      setLoading(false);
  
    }
  }
  const changOptions1 =()=>{
    if (options==0) {
      setLoading(true);
      setOptions(1);
      setLoading(false);
    }
  }

  const onSubmit = () => {
    setOpen(false);

  }
  const onSubmitEdit = (id:any,data:any) => {
    const NewDeadline = {deadline:data,TicketId:id}
console.log(NewDeadline);

    setOpenEdit(false);
    dispatch(
      editTickets(NewDeadline)

    );
  }
  const onCancel = () => {
    setOpen(false);

  }
  const onCancelEdit = () => {
    setOpenEdit(false);
  }
  const onFilter = () => {
    setOpen(true)
  }
  const onEdit = (id:any) => {
    const data = ticketList.find((ticket:any) => ticket.id === id)
    console.log(data);
    setFormDataEdit(data);
    setOpenEdit(true)
  }
  
  const handleSearchTextChange = (e:any) => {
    setSearchText(e.target.value);
    dispatch(filtersComponentSlide.actions.searchFilterChange(e.target.value));
  };
  return (
    <div>
      <a href="#" onClick={changOptions}>Gói gia đình</a>
      <a href="#" onClick={changOptions1}>Gói sự kiện</a>
      {/* <ButtonCreate  ></ButtonCreate>
      <ButtonCreate  ></ButtonCreate> */}
        <Search
        placeholder='Nhập số vé'
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <ButtonCreate onClick={onFilter}>Lọc vé</ButtonCreate>
      <ButtonFile >Xuất file(.csv)</ButtonFile>
      <TableTicketManagement onEdit={onEdit} loading={loading}  options={options} ticketList1={ticketList1} ticketList2={ticketList2}/>
      <FilterTicketManagement onCancel={onCancel} open={open} onSubmit={onSubmit}  />
      <DetailTicketManagement formData={formDataEdit} onCancel={onCancelEdit} open={openEdit} onSubmit={onSubmitEdit}/>
    </div>
  )
}

export default TicketManagement
