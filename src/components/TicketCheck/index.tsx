import React, { useEffect, useState } from "react";
import TableTicketCheck from "./Table/TableTicketCheck";
import SearchBox from "../SearchBox";
import { ButtonCreate } from "../Styles/styles";
import { Col, Input, Row } from "antd";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import {
  ticketsRemainingSelector,
  ticketsSelector,
} from "../../redux/selectors";
import { fetchTickets } from "../TicketManagement/TicketSlide";
import { useAppDispatch } from "../../hook/redux";
import filtersComponentSlide from "../filtersComponentSlide";
import filtersSlice from "./Filters/filtersSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
const { Search } = Input;

const TicketCheck = () => {
  const [options, setOptions] = useState(0); // 0:family 1:event
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  // const [SearchType, setSearchType] = useState(0);
  // const [searchName, setSearchName] = useState('');
  // const [filterStatus, setFilterStatus] = useState('All');
  const ticketList = useSelector(ticketsSelector);
  const dispatch = useAppDispatch();
  let ticketList1: any = []; // event
  let ticketList2: any = []; //family
  let count1 = 1;
  let count2 = 1;
  ticketList.forEach((tiket: any) => {
    if (tiket.nameevent != "") {
      ticketList1.push({ ...tiket, stt: count1++ });
    } else {
      ticketList2.push({ ...tiket, stt: count2++ });
    }
  });
  console.log(ticketList1);
  console.log(ticketList2);
  useEffect(() => {
    dispatch(fetchTickets("tickets"));
  }, []);
  const changOptions = () => {
    if (options == 1) {
      setLoading(true);
      setOptions(0);
      setLoading(false);
    }
  };
  const changOptions1 = () => {
    if (options == 0) {
      setLoading(true);
      setOptions(1);
      setLoading(false);
    }
  };
  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
    dispatch(filtersComponentSlide.actions.searchFilterChange(e.target.value));
  };
  const CreateFilter = (searchName: any, filterStatus: any, date: any) => {
    setFilter(true);
    dispatch(filtersSlice.actions.searchFilterChange(searchName));
    dispatch(filtersSlice.actions.statusFilterChange(filterStatus));
    dispatch(filtersSlice.actions.dateFilterChange(date));
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
        placeholder="Nhập số vé"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <ButtonCreate>Xuất file(.csv)</ButtonCreate>
      <Row>
        <Col span={6} push={18}>
          <Filters
            CreateFilter={CreateFilter}
            filter={filter}
            options={options}
          />
        </Col>
        <Col span={18} pull={6}>
          <TableTicketCheck
            loading={loading}
            options={options}
            ticketList1={ticketList1}
            ticketList2={ticketList2}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TicketCheck;
