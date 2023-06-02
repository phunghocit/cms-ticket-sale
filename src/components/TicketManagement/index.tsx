import React from 'react'
import { ButtonAction, ButtonCreate, TableCustom } from '../Styles/styles'
import SearchBox from '../SearchBox'
const TicketManagement = () => {

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
                <SearchBox  />
        <ButtonCreate >Lọc vé</ButtonCreate>
        <ButtonCreate >Xuất file(.csv)</ButtonCreate>
        
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

export default TicketManagement
