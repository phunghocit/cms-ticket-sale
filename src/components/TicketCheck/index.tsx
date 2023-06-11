import React, { useEffect, useState } from 'react'
import TableTicketCheck from './Table/TableTicketCheck'
import SearchBox from '../SearchBox'
import { ButtonCreate } from '../Styles/styles'
import { Col, Input, Row } from 'antd'
import Filters from './Filters'
import {  useSelector } from 'react-redux';
import { ticketsRemainingSelector } from '../../redux/selectors';
import { fetchTickets } from '../TicketManagement/TicketSlide';
import { useAppDispatch } from '../../hook/redux';
import filtersSlice from './Filters/filtersSlice'
const { Search } = Input;

const TicketCheck = () => {
    const [options, setOptions] = useState(0); // 0:family 1:event 
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

    const ticketList = useSelector(ticketsRemainingSelector);
    const dispatch = useAppDispatch();
    let ticketList1:any = [] // event
    let ticketList2:any = [] //family
    ticketList.forEach((tiket:any) => {
      let count1 =0
      let count2 =0
      if (tiket.nameevent!="") {
        ticketList1.push({...tiket,stt:++count1})
      }else{
        ticketList2.push({...tiket,stt:++count2})
  
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
      const handleSearchTextChange = (e:any) => {
        setSearchText(e.target.value);
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
      };
  return (
    <div>
      <a href="#" onClick={changOptions}>
        Gói gia đình
      </a>
      <a href="#" onClick={changOptions1}>
        Gói sự kiện
      </a>
      <Search
        placeholder='Nhập số vé'
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <ButtonCreate>Xuất file(.csv)</ButtonCreate>
      <Row>
        <Col span={6} push={18}>
          <Filters options={options} />
        </Col>
        <Col span={18} pull={6}>
          <TableTicketCheck loading={loading}  options={options} ticketList1={ticketList1} ticketList2={ticketList2} />
        </Col>
      </Row>
    </div>
  );
}

export default TicketCheck
