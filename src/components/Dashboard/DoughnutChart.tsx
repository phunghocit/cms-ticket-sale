import React, { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { ticketsRemainingSelector } from "../../redux/selectors";
import { useAppDispatch } from '../../hook/redux';
import { fetchTickets } from '../TicketManagement/TicketSlide';
import { Col, Row } from 'antd';
import { Title } from '../../layouts/styles';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const ticketList = useSelector(ticketsRemainingSelector);
const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(fetchTickets("tickets"));

}, [])
console.log(ticketList);

// let ticketList1:any = [] // event
// let ticketList2:any = [] //family
let count1 =1;
let count2 =1;
let count3 =1;
let count4 =1;
ticketList.forEach((ticket:any) => {

  if (ticket.nameevent!="" && ticket.statusused=='used') {
    count1++
  }else if(ticket.nameevent!="" && ticket.statusused!='used' ){
    count2++

  }else if(ticket.nameevent=="" && ticket.statusused!='used' ){
    count3++

  }
  else if(ticket.nameevent=="" && ticket.statusused=='used' ){
    count4++

  }
});
console.log(count1);
console.log(count2);
const data = {
  labels: [ 'Vé đã sử dụng', 'Vé chưa sử dụng'],
  datasets: [
    {
      label: 'Gói sự kiện',
      data: [count1,count2 ],
      backgroundColor: [
      '#4F75FF','#FF8A48'
      ],
      borderColor: [
          '#4F75FF','#FF8A48'
      ],
      borderWidth: 1,
    },
  ],
};
const data2 = {
  labels: [ 'Vé đã sử dụng', 'Vé chưa sử dụng'],
  datasets: [
    {
      label: 'Gói gia đình',
      data: [count3,count4 ],
      backgroundColor: [
      '#4F75FF','#FF8A48'
      ],
      borderColor: [
          '#4F75FF','#FF8A48'
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <Row gutter={[48, 16]}>
      <Col  span={12}>
      <Title>Gói gia đình</Title>
        <Doughnut data={data2} />

      </Col >
      <Col  span={12}>
      <Title>Gói sự kiện</Title>

        <Doughnut data={data} />

      </Col>
    </Row>

  )
}

export default DoughnutChart
