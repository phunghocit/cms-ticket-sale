import { UserOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Table, Modal, Badge } from "antd";
import { TableCustom, ButtonAction, ButtonCreate, BadgeSuccess, BadgeError } from "../../Styles/styles";
import SearchBox from "../../SearchBox";
import { useLocation, useNavigate } from "react-router-dom";
import ModalFormServicePack from "../Modal/ModalFormServicePack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { servicepackRemainingSelector } from "../../../redux/selectors";
import { fetchServicePack } from "../ServicePackSlide";
import { useAppDispatch } from "../../../hook/redux";
import edit from "../../../shared/icon/edit.png";
import { CONVERT } from "../../convertDate";
interface Props {
  servicepacklist?: any;
  onUpdate?: any;
  loading: any;
}

const TableFormServicePack = ({
  loading,
  servicepacklist,
  onUpdate,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
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
      title: "Mã gói vé",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên gói vé",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "time",
      key: "time",
      render: (_: any, item: any) => {
        return (
          <div>
            {CONVERT(item.startdate)} {item.starttime}
            {/* {item.startdate.date}/{item.startdate.month}/{item.startdate.year} {item.starttime.hour}:{item.starttime.minute}:{item.starttime.second} */}
          </div>
        );
      },
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "deadline",
      key: "deadline",
      render: (_: any, item: any) => {
        return (
          <div>
            {CONVERT(item.deadlinedate)} {item.deadlinetime}
            {/* {item.deadlinedate.getDate()}/{item.deadlinedate.month()}/{item.deadlinedate.year()} {item.deadlinetime.hour()}:{item.deadlinetime.minute()}:{item.deadlinetime.second()} */}
          </div>
        );
      },
    },
    {
      title: "Giá vé(VNĐ/Vé)",
      dataIndex: "price",
      key: "price",
      render: (_: any, item: any) => {
        if (item.price != "") {
          return <div>{Intl.NumberFormat().format(item.price)} VNĐ</div>;
        }
      },
    },
    {
      title: "Giá Combo(VNĐ/Combo)",
      dataIndex: "pricecombo",
      key: "pricecombo",
      render: (_: any, item: any) => {
        if (item.pricecombo != "") {
          return (
            <div>
              {Intl.NumberFormat().format(item.pricecombo)} VNĐ /{" "}
              {item.quantity} Vé
            </div>
          );
        }
      },
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "state",
      render: (_: any, item: any) => {
        if (item.status) {
          return <BadgeSuccess status="success" text="Đang áp dụng"/>;
        } else {
            return <BadgeError status="error" text="Tắt"/>;
        }
      },
    // render: () => <Badge status="success" text="Finished" />,
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_: any, item: any) => {
        return (
          <div>
            <a
              href="#"
              onClick={() => {
                onUpdate(item.id);
              }}
            >
              <img src={edit} />
              Cập nhật
            </a>
            {/* <ButtonAction onClick={()=>{onUpdate(item.id)}}>Cập nhật</ButtonAction> */}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <TableCustom
        rowKey={(record:any) => record.code}
        columns={columns}
        loading={loading}
        dataSource={servicepacklist}
        // loading={loading}
        scroll={{ y: 430 }}
        onChange={(pagination: any) => {
          const searchParams = new URLSearchParams(location.search);
          searchParams.set("page", pagination.current);
          searchParams.set("limit", pagination.pageSize);

          navigate(`${location.pathname}?${searchParams.toString()}`);
          //         // console.log(location)
        }}
      />
    </div>
  );
};

export default TableFormServicePack;
