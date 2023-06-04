import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal } from "antd";
import { TableCustom, ButtonAction, ButtonCreate } from '../../Styles/styles';
import SearchBox from '../../SearchBox';
import { useNavigate } from 'react-router-dom';
import ModalFormServicePack from '../Modal/ModalFormServicePack';
import { useState } from 'react';
const {confirm} = Modal;


const TableFormServicePack = () => {
    const navigate = useNavigate();

    const columns =[
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Ngày áp dụng',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Giá vé',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (_:any,item:any) =>{
                return(
                    <div>
                        <ButtonAction >Cập nhật</ButtonAction>
                    </div>
                )
            }
        },
    ]

    return(
        <div>
    <TableCustom 
        columns={columns} 
        // dataSource={number} 
        // loading={loading} 
        scroll={{y: 430}}
    //     onChange={(pagination:any) => {
    //         const searchParams = new URLSearchParams(location.search);
    //         searchParams.set("page",pagination.current);
    //         searchParams.set("limit",pagination.pageSize);

    //         navigate(`${location.pathname}?${searchParams.toString()}`);
    //         // console.log(location)
    // }}
    /> 
        </div>

    )
}

export default TableFormServicePack;