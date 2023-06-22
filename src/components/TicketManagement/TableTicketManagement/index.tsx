import React, { useState, useEffect } from "react";
import { BadgeDefault, BadgeError, BadgeSuccess, ButtonAction, ButtonCreate, TableCustom } from "../../Styles/styles";
import SearchBox from "../../SearchBox";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ticketListSelector,
  ticketsRemainingSelector,
} from "../../../redux/selectors";
import { fetchTickets } from "../TicketSlide";
import { useAppDispatch } from "../../../hook/redux";
import edit from "../../../shared/icon/Vector.png";
import { CONVERT } from "../../convertDate";
import { Tooltip } from "antd";

interface Props {
  options?: any;
  loading?: any;
  ticketList1?: any;
  ticketList2?: any;
  onEdit?: any;
}
const TableTicketManagement = ({
  onEdit,
  options,
  loading,
  ticketList1,
  ticketList2,
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let count = 1;
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: 70,
      render: (_: any, item: any) => {
        return <div>{count++}</div>;
      },
    },
    {
      title: "Booking code",
      dataIndex: "code",
      key: "code",
      
    },
    {
      title: "Số vé",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sự kiện",
      dataIndex: "nameevent",
      key: "nameevent",
      width: 250,
      ellipsis: {
        showTitle: false,
      },
      render: (item:any) => (
        <Tooltip placement="topLeft" title={item}>
          {item}
        </Tooltip>
      ),
    },
    {
      title: "Tình trạng sử dụng",
      dataIndex: "",
      key: "",
      width: 150,

      render: (_: any, item: any) => {
        
        const today = Date();

        console.log(CONVERT(today));
        if (item.dateused != "") {
          return <BadgeDefault status="default" text="Đã sử dụng"/>;
        } else if (
          item.dateused === "" &&
          CONVERT(item.deadline) < CONVERT(today)
        ) {
          console.log(Date.now());

          return <BadgeError status="error" text="Hết hạn"/>;
        } else {
          return <BadgeSuccess status="success" text="Chưa sử dụng"/>;
        }
      },
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateused",
      key: "dateused",
      render: (_: any, item: any) => {
        if (item.dateused != "") {
          return <div>{CONVERT(item.dateused)}</div>;
        } else {
          return <div></div>;
        }
      },
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "datesell",
      key: "datesell",
      render: (_: any, item: any) => {
        if (item.datesell != "") {
          return <div>{CONVERT(item.datesell)}</div>;
        } else {
          return <div></div>;
        }
      },
    },
    {
      title: "Cổng check-in",
      dataIndex: "gate",
      key: "gate",
      width: 150,
      
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      with:80,
      render: (_: any, item: any) => {
        // if (item.statusused==='unused') {
        const today = Date();
        if (item.dateused === "" && CONVERT(item.deadline) > CONVERT(today)) {
          return (
            <a
              href="#"
              onClick={() => {
                onEdit(item.id);
              }}
            >
              <img src={edit} />
            </a>
          );
        } else {
          return <div></div>;
        }
      },
    },
  ];
  const columns2 = [
    {
      title: "STT",
      dataIndex: "",
      key: "",
      width: 70,
      render: (_: any, item: any) => {
        return <div>{count++}</div>;
      },
    },
    {
      title: "Booking code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Số vé",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tình trạng sử dụng",
      dataIndex: "",
      key: "",
      render: (_: any, item: any) => {
        const today = Date();

        if (item.dateused != "") {
          return <BadgeDefault status="default" text="Đã sử dụng"/>;
        } else if (
          item.dateused === "" &&
          CONVERT(item.deadline) < CONVERT(today)
        ) {
          console.log(Date.now());

          return <BadgeError status="error" text="Hết hạn"/>;
        } else {
          return <BadgeSuccess status="success" text="Chưa sử dụng"/>;
        }
      },
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateused",
      key: "dateused",
      render: (_: any, item: any) => {
        if (item.dateused != "") {
          return <div>{CONVERT(item.dateused)}</div>;
        } else {
          return <div></div>;
        }
      },
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "datesell",
      key: "datesell",
      render: (_: any, item: any) => {
        if (item.datesell != "") {
          return <div>{CONVERT(item.datesell)}</div>;
        } else {
          return <div></div>;
        }
      },
    },
    {
      title: "Cổng check-in",
      dataIndex: "gate",
      key: "gate",
      render: (_: any, item: any) => {
        if (item.gate === 1) {
          return "Cổng 1";
        }
        if (item.gate === 2) {
          return "Cổng 2";
        }
        if (item.gate === 3) {
          return "Cổng 3";
        }
        if (item.gate === 4) {
          return "Cổng 4";
        }
        if (item.gate === 5) {
          return "Cổng 5";
        }
      },
    },
    {
      title: "",
      dataIndex: "status",
      key: "status",
      render: (_: any, item: any) => {
        const today = Date();
        if (item.dateused === "" && CONVERT(item.deadline) > CONVERT(today)) {
          return (
            <a
              href="#"
              onClick={() => {
                onEdit(item.id);
              }}
            >
              <img src={edit} />
            </a>
          );
        } else {
          return <div></div>;
        }
      },
    },
  ];

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
};

export default TableTicketManagement;
