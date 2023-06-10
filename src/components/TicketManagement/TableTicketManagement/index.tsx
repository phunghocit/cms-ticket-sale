import React, { useState,useEffect } from 'react'
import { ButtonAction, ButtonCreate, TableCustom } from '../../Styles/styles'
import SearchBox from '../../SearchBox'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ticketListSelector, ticketsRemainingSelector } from '../../../redux/selectors';
import { fetchTickets } from '../TicketSlide';
import { useAppDispatch } from '../../../hook/redux';
interface Props{
  options?:any
  loading?:any
}
const TableTicketManagement = ({options,loading}:Props) => {
  // const [ticket, setTicket] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const ticketList = useSelector(ticketsRemainingSelector);
  console.log(ticketList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [])
  const columns =[
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt'
    },
    {
      title: 'Booking code',
      dataIndex: 'code',
      key: 'code'
    },
    {
        title: 'Số vé',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Tên sự kiện',
        dataIndex: 'event',
        key: 'event'
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: 'status',
      key: 'status'
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'timeused',
        key: 'timeused'
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'timesell',
        key: 'timesell'
    },
    {
        title: 'Cổng check-in',
        dataIndex: 'gate',
        key: 'gate',
    },
]
const columns2 =[
  {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt'
  },
  {
    title: 'Booking code',
    dataIndex: 'code',
    key: 'code'
  },
  {
      title: 'Số vé',
      dataIndex: 'id',
      key: 'id'
  },
  {
    title: 'Tình trạng sử dụng',
    dataIndex: 'status',
    key: 'status'
  },
  {
      title: 'Ngày sử dụng',
      dataIndex: 'timeused',
      key: 'timeused'
  },
  {
      title: 'Ngày xuất vé',
      dataIndex: 'timesell',
      key: 'timesell'
  },
  {
      title: 'Cổng check-in',
      dataIndex: 'gate',
      key: 'gate',
  },
]

  return (
    <div>


      
    <TableCustom 
      
        columns={options==1? columns:columns2} 
        dataSource={ticketList} 
        loading={loading} 
        scroll={{y: 430}}
        onChange={(pagination:any) => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("page",pagination.current);
            searchParams.set("limit",pagination.pageSize);

            navigate(`${location.pathname}?${searchParams.toString()}`);
            // console.log(location)
    }}
    /> 
    </div>
  )
}

export default TableTicketManagement
