import { UserOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import {
  Button,
  Table,
  Modal,
  Form,
  DatePicker,
  Checkbox,
  Divider,
  Row,
  Col,
  Select,
} from "antd";
import {
  TableCustom,
  ButtonAction,
  ButtonCreate,
  SubmitButton,
} from "../../Styles/styles";
import SearchBox from "../../SearchBox";
import { useLocation, useNavigate } from "react-router-dom";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useState } from "react";
import Filters from "../Filters";
import { CONVERT } from "../../convertDate";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Đã đối soát", "Chưa đối soát"];
interface Props {
  options?: any;
  loading?: any;
  ticketList1?: any;
  ticketList2?: any;
}
const TableTicketCheck = ({
  options,
  loading,
  ticketList1,
  ticketList2,
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(ticketList1);
  console.log(ticketList2);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
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
    },
    {
      title: "Ngày sử dụng",
      dataIndex: "dateused",
      key: "dateused",
      render: (_: any, item: any) => {
        if (item.dateused != "") {
          return <div>{CONVERT(item.dateused)}</div>;
        }
        return <div></div>;
      },
    },
    {
      title: "Loại vé",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Cổng check-in",
      dataIndex: "gate",
      key: "gate",
    },
    {
      title: "Đối soát",
      dataIndex: "statuscheck ",
      key: "statuscheck ",
      render: (_: any, item: any) => {
        if (item.statuscheck) {
          return <div>Đã đối soát</div>;
        } else {
          return <div>Chưa đối soát</div>;
        }
      },
    },
  ];
  const columns2 = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Số vé",
      dataIndex: "id",
      key: "id",
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
      title: "Loại vé",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Cổng check-in",
      dataIndex: "gate",
      key: "gate",
    },
    {
      title: "Đối soát",
      dataIndex: "statuscheck",
      key: "statuscheck",
      render: (_: any, item: any) => {
        if (item.statuscheck) {
          return <div>Đã đối soát</div>;
        } else {
          return <div>Chưa đối soát</div>;
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

export default TableTicketCheck;
