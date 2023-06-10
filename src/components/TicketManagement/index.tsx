import React, { useState,useEffect } from 'react'
import { ButtonAction, ButtonCreate, ButtonFile, TableCustom } from '../Styles/styles'
import SearchBox from '../SearchBox'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ticketListSelector, ticketsRemainingSelector } from '../../redux/selectors';
import { fetchTickets } from './TicketSlide';
import { useAppDispatch } from '../../hook/redux';
import TableTicketManagement from './TableTicketManagement';
import FilterTicketManagement from './Filter/FilterTicketManagement';

const TicketManagement = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(0);
  const [loading, setLoading] = useState(false);
  const ticketList = useSelector(ticketsRemainingSelector);
  console.log(ticketList);
  const dispatch = useAppDispatch();


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
  const onFilter = () => {
    setOpen(true)
  }
  return (
    <div>
      <a href="#" onClick={changOptions}>Gói gia đình</a>
      <a href="#" onClick={changOptions1}>Gói sự kiện</a>
      {/* <ButtonCreate  ></ButtonCreate>
      <ButtonCreate  ></ButtonCreate> */}
      <SearchBox  />
      <ButtonCreate onClick={onFilter}>Lọc vé</ButtonCreate>
      <ButtonFile >Xuất file(.csv)</ButtonFile>
      <TableTicketManagement loading={loading}  options={options}/>
      <FilterTicketManagement open={open} onSubmit={onSubmit}  />
    </div>
  )
}

export default TicketManagement
