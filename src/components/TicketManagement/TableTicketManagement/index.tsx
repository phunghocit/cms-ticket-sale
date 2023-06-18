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
import { CONVERT } from '../../convertDate';

interface Props{
  options?:any
  loading?:any
  ticketList1?:any
  ticketList2?:any
  onEdit?:any
}
interface Date {
  mm: number,
  dd: number,
  yy: number,
  yyyy: number,

}
const TableTicketManagement = ({onEdit,options,loading,ticketList1,ticketList2}:Props) => {
  const location = useLocation();
  const navigate = useNavigate();
//   const formatDate=(date:any, format:any):Date=>{
//     const map = {
//         mm: date.getMonth() + 1,
//         dd: date.getDate(),
//         yy: date.getFullYear().toString().slice(-2),
//         yyyy: date.getFullYear()
//     }

//     return format.replace(/mm|dd|yy|yyy/gi, (matched:any) => map[matched])
// }
// console.log(DATE_CONVERT("23/11/2023"));

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
        const today = Date();
        // const today = new Date(timeElapsed)
          // console.log(today.toLocaleDateString('en-US', {
          //   year: 'numeric',
          //   month: '2-digit',
          //   day: '2-digit',
          // }));
          console.log(CONVERT(today));
          
        if (item.dateused !='' ) {
      return(
        <div>Đã sử dụng</div>
      )
        }else if (item.dateused ==='' && CONVERT(item.deadline) < CONVERT(today)) {
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
        key: 'dateused',
        render: (_:any,item:any) =>{
          if (item.dateused != '') {
              return(
                  <div>{CONVERT(item.dateused)}</div>
              )
              
          }else{
              return(
                  <div></div>
              )
          }

          
      }

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
        // if (item.statusused==='unused') {
          const today = Date();
          if (item.dateused ==='' && CONVERT(item.deadline) > CONVERT(today)) {
          
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
    dataIndex: '',
    key: '',
    render: (_:any,item:any) =>{
      const today = Date();

        if (item.dateused !='' ) {
          return(
            <div>Đã sử dụng</div>
          )
            }else if (item.dateused ==='' && CONVERT(item.deadline) < CONVERT(today)) {
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
      key: 'dateused',
      render: (_:any,item:any) =>{
        if (item.dateused != '') {
            return(
                <div>{CONVERT(item.dateused)}</div>
            )
            
        }else{
            return(
                <div></div>
            )
        }

        
    }
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
      const today = Date();
      if (item.dateused ==='' && CONVERT(item.deadline) > CONVERT(today)) {
          
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
