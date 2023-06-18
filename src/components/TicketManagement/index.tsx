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
import filtersTicketSlice from './Filter/filtersTicketSlice';
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


  useEffect(() => {
    dispatch(fetchTickets("tickets"));

  }, [])
  let ticketList1:any = [] // event
  let ticketList2:any = [] //family
  ticketList.forEach((tiket:any) => {

    if (tiket.nameevent!="") {
      ticketList1.push({...tiket})
    }else{
      ticketList2.push({...tiket})

    }
  });
  console.log(ticketList1);
  console.log(ticketList2);
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

  const onSubmit = (data:any) => {
    setOpen(false);
    console.log(data);
    
    dispatch(filtersTicketSlice.actions.dateFilterChange(data.date));
    dispatch(filtersTicketSlice.actions.statusFilterChange(data.checkedList));
    dispatch(filtersTicketSlice.actions.gateFilterChange(data.checkedList2));

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
