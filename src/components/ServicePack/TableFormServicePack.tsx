import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal } from "antd";
import { TableCustom, ButtonAction } from './styles';
const {confirm} = Modal;


const TableFormServicePack = () => {


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
        <TableCustom />
    )
}

export default TableFormServicePack;