import { UserOutlined,ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Table, Modal, Form, DatePicker, Checkbox, Divider } from "antd";
import { TableCustom, ButtonAction, ButtonCreate, SubmitButton } from '../../Styles/styles';
import SearchBox from '../../SearchBox';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useState } from 'react';
const CheckboxGroup = Checkbox.Group;

const plainOptions = [ 'Đã đối soát', 'Chưa đối soát'];
const TableTicketCheck = () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
  
    const navigate = useNavigate();
    const [form] = Form.useForm();
      const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    
      const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };
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

    return(
        <div>
        <SearchBox/>
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

    <Form form={form} layout="vertical">
      <Form.Item
        label="Loại vé"
        name="services_used"
        style={{ width: "85%" }}
      >
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Tất cả
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      </Form.Item>
        <Form.Item
        label="Loại vé"
        name="services_used"
        style={{ width: "85%" }}
      >
        <p>Vé cổng</p>
      </Form.Item>
      <Form.Item
        label="Từ ngày"
        name="services_used"
        style={{ width: "85%" }}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
 
      </Form.Item>
      <Form.Item
        label="Đến ngày"
        name="services_used"
        style={{ width: "85%" }}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
 
      </Form.Item>
      <SubmitButton >Lọc</SubmitButton>

    </Form>
        </div>

    )
}

export default TableTicketCheck;