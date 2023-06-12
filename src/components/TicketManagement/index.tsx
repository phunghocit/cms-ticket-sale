import React, { useState,useEffect } from 'react'
import { ButtonAction, ButtonCreate, ButtonFile, TableCustom } from '../Styles/styles'
import SearchBox from '../SearchBox'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ticketsRemainingSelector } from '../../redux/selectors';
import { fetchTickets } from './TicketSlide';
import { useAppDispatch } from '../../hook/redux';
import TableTicketManagement from './TableTicketManagement';
import FilterTicketManagement from './Filter/FilterTicketManagement';
import { Input } from 'antd';
import filtersComponentSlide from '../filtersComponentSlide';
const { Search } = Input;

const TicketManagement = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
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
    dispatch(fetchTickets());

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
  const onCancel = () => {
    setOpen(false);

  }
  const onFilter = () => {
    setOpen(true)
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
      <TableTicketManagement loading={loading}  options={options} ticketList1={ticketList1} ticketList2={ticketList2}/>
      <FilterTicketManagement onCancel={onCancel} open={open} onSubmit={onSubmit}  />
    </div>
  )
}

export default TicketManagement
