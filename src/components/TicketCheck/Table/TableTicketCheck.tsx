import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal, Form, DatePicker, Checkbox, Divider, Row, Col, Select } from "antd";
import { TableCustom, ButtonAction, ButtonCreate, SubmitButton } from '../../Styles/styles';
import SearchBox from '../../SearchBox';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useState } from 'react';
import Filters from '../Filters';
const CheckboxGroup = Checkbox.Group;
const plainOptions = [ 'Đã đối soát', 'Chưa đối soát'];
const TableTicketCheck = () => {

  

    const columns =[
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Số vế',
            dataIndex: '',
            key: ''
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày sử dụng',
            key: ''
        },
        {
            title: 'Tên loại vé',
            dataIndex: '',
            key: ''
        },
        {
            title: 'Giá vé',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Cổng check-in',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'status',
            key: 'status',
            render: (_:any,item:any) =>{
                return(
                    <div>
                        <ButtonAction >Cập nhật</ButtonAction>
                    </div>
                )
            }
        },
    ]

    return (
      <div>
        <SearchBox />
        <ButtonCreate>Xuất file(.csv)</ButtonCreate>
        <Row>
          <Col span={6} push={18}>
          <Filters/>
          </Col>
          <Col span={18} pull={6}>
            <TableCustom
              columns={columns}
              // dataSource={number}
              // loading={loading}
              scroll={{ y: 430 }}
              //     onChange={(pagination:any) => {
              //         const searchParams = new URLSearchParams(location.search);
              //         searchParams.set("page",pagination.current);
              //         searchParams.set("limit",pagination.pageSize);

              //         navigate(`${location.pathname}?${searchParams.toString()}`);
              //         // console.log(location)
              // }}
            />
          </Col>
        </Row>
      </div>
    );
}

export default TableTicketCheck;