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
import edit from '../../../shared/icon/Vector.png'

interface Props{
  options?:any
  loading?:any
  ticketList1?:any
  ticketList2?:any
  onEdit?:any
}
const TableTicketManagement = ({onEdit,options,loading,ticketList1,ticketList2}:Props) => {
  const location = useLocation();
  const navigate = useNavigate();
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
        dataIndex: 'nameevent',
        key: 'nameevent'
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: '',
      key: ' ',
      // render: (_:any,item:any) =>{
      //     if (item.statusused==='expired') {
      //   return(
      //     <div>Hết hạn</div>
      //   )
            
      //     }else if (item.statusused==='used') {
      //       return(
      //         <div>Đã sử dụng</div>
      //       )
      //     }else{
      //       return(
      //         <div>Chưa sử dụng</div>
      //       )
      //     }
      // }
      render: (_:any,item:any) =>{
        const timeElapsed = Date();
        const today = new Date(timeElapsed)
          console.log(today);
        if (item.dateused !='' && item.deadline > today.toLocaleDateString()) {
      return(
        <div>Đã sử dụng</div>

      )
          
        }else if (item.dateused ==='' && item.deadline < today.toLocaleDateString()) {
          console.log(Date.now());
          
          return(
            <div>Hết hạn</div>
          )
        }else{
          return(
            <div>Chưa sử dụng</div>
          )
        }
    }
    },
    {
        title: 'Ngày sử dụng',
        dataIndex: 'dateused',
        key: 'dateused'
    },
    {
        title: 'Ngày xuất vé',
        dataIndex: 'datesell',
        key: 'timesdatesellell'
    },
    {
        title: 'Cổng check-in',
        dataIndex: 'gate',
        key: 'gate',
    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      render: (_:any,item:any) =>{
        if (item.statusused==='unused') {
          return(
            <a href="#" onClick={()=>{onEdit(item.id)}}><img src={edit}/></a>

          )
        }
        else{
          return(
            <div>
            </div>
          )
        }

      }
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
    dataIndex: 'statusused',
    key: 'statusused',
    render: (_:any,item:any) =>{
      if (item.statusused==='expired') {
    return(
      <div>Hết hạn</div>
    )
        
      }else if (item.statusused==='used') {
        return(
          <div>Đã sử dụng</div>
        )
      }else{
        return(
          <div>Chưa sử dụng</div>
        )
      }
}
  },
  {
      title: 'Ngày sử dụng',
      dataIndex: 'dateused',
      key: 'dateused'
  },
  {
      title: 'Ngày xuất vé',
      dataIndex: 'datesell',
      key: 'datesell'
  },
  {
      title: 'Cổng check-in',
      dataIndex: 'gate',
      key: 'gate',
  },
  {
    title: '',
    dataIndex: 'status',
    key: 'status',
    render: (_:any,item:any) =>{
      if (item.statusused==='unused') {
        return(
          <a href="#" onClick={()=>{onEdit(item.id)}}><img src={edit}/></a>

        )
      }
      else{
        return(
          <div>
          </div>
        )
      }

    }
},
]

  return (
    <TableCustom
      
      columns={options == 1 ? columns : columns2}
      dataSource={options == 1 ? ticketList1 : ticketList2}
      loading={loading}
      scroll={{ y: 430 }}
      onChange={(pagination: any) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("page", pagination.current);
        searchParams.set("limit", pagination.pageSize);

        navigate(`${location.pathname}?${searchParams.toString()}`);
        // console.log(location)
      }}
    />
  );
}

export default TableTicketManagement
