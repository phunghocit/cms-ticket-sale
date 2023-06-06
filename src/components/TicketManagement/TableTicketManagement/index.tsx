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

const TicketManagement = () => {
  // const [ticket, setTicket] = useState([]);
  const [options, setOptions] = useState(0);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const ticketList = useSelector(ticketsRemainingSelector);
  console.log(ticketList);
  const dispatch = useAppDispatch();
  
  // const fetchData = async () => {
  //   // setLoading(true);
  //   const docRef = collection(db, "TicketManagement"); //tra ve collection
  //   const docSnap = await getDocs(docRef);
  //   let newticket: any = [];
  //   docSnap.forEach( async (doc) => {
  //     // //lấy từng doc trong firebase

  //     // const docRef2 = collection(db, "users",`${localStorage.getItem('token')}`); //tra ve collection 
  //     // const docSnap2 = await getDocs(docRef2)
            
  //     newticket.push({...doc.data()}); //lấy hết data vào trong mảng tạm newUsers
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     console.log(newticket);
  //     setTicket(newticket);
      
  //   });
  // };

  // useEffect(() => {
  //   fetchData();

  // }, []);
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
  return (
    <div>
      <ButtonCreate onClick={changOptions} >Gói gia đình</ButtonCreate>
      <ButtonCreate  onClick={changOptions1}>Gói sự kiện</ButtonCreate>
                <SearchBox  />
        <ButtonCreate >Lọc vé</ButtonCreate>
        <ButtonCreate >Xuất file(.csv)</ButtonCreate>
      
    <TableCustom 
      
        columns={options==1? columns:columns2} 
        dataSource={ticketList} 
        // loading={loading} 
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

export default TicketManagement
