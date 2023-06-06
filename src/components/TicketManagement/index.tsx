import React, { useState,useEffect } from 'react'
import { ButtonAction, ButtonCreate, TableCustom } from '../Styles/styles'
import SearchBox from '../SearchBox'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ticketListSelector, ticketsRemainingSelector } from '../../redux/selectors';
import { fetchTickets } from './TicketSlide';
import { useAppDispatch } from '../../hook/redux';

const TicketManagement = () => {
  // const [ticket, setTicket] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const ticketList = useSelector(ticketsRemainingSelector);
  console.log(ticketList);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(fetchTickets());
  }, [])

  return (
    <div>
      <a href="">Gói gia đình</a>
      <a href="">Gói sự kiện</a>
                <SearchBox  />
        <ButtonCreate >Lọc vé</ButtonCreate>
        <ButtonCreate >Xuất file(.csv)</ButtonCreate>
        

    </div>
  )
}

export default TicketManagement
