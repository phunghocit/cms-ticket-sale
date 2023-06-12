import { Col, Row, Input, Typography, Radio, Select, Tag, Form, Checkbox } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';

// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';
// import filtersSlice from './filtersSlice';
import { SubmitButton } from '../../Styles/styles';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Search } = Input;
interface Props{
  options?:any
  filter?:any
  CreateFilter:any
}

const Filters = ({options,CreateFilter}:Props) => {
  const dispatch = useAppDispatch();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const navigate = useNavigate();
  const [form] = Form.useForm();

  


    
  const handleSearchTextChange = (e:any) => {
    setSearchName(e.target.value);
  };

  const handleStatusChange = (e:any) => {
    setFilterStatus(e.target.value);
  };


  const handleSubmit =()=>{
    CreateFilter(searchName,filterStatus)
    
  }
  return (
    <div>
  <Form form={form} layout="vertical">
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Lọc vé
      </Typography.Paragraph>
      {options==1 ?(
        <Search
        placeholder='Nhập tên sự kiện'
        value={searchName}
        onChange={handleSearchTextChange}
      />
        ) : (
          ""
        )}
      <Form.Item
        label="Tình trạng đối soát"
        name="ticket_status"
        style={{ width: "85%" }}
      >
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">Tất cả</Radio>
          <Radio value="Checked">Đã đối soát</Radio>
          <Radio value="Uncheck">Chưa đối soát</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Loại vé" name="typeticket" style={{ width: "85%" }}>
          <p>Vé cổng</p>
      </Form.Item>
      <Form.Item
        label="Từ ngày"
        name="services_used_start"
        style={{ width: "85%" }}
      >
        <Input type="date" />
      </Form.Item>
      <Form.Item
        label="Đến ngày"
        name="services_used_end"
        style={{ width: "85%" }}
      >
        <Input type="date" />
      </Form.Item>
      <SubmitButton onClick={handleSubmit}>Lọc</SubmitButton>
    </Form>
    </div>
  );
}

export default Filters