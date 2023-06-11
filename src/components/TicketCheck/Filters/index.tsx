import { Col, Row, Input, Typography, Radio, Select, Tag, Form, Checkbox } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../../../hook/redux';

// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';
import filtersSlice from './filtersSlice';
import { SubmitButton } from '../../Styles/styles';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const { Search } = Input;
interface Props{
  options?:any
}

const Filters = ({options}:Props) => {
  const dispatch = useAppDispatch();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [SearchType, setSearchType] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const navigate = useNavigate();
  const [form] = Form.useForm();

  

    const handleTypeChange = (type: { value: number; label: React.ReactNode }) => {
      console.log(type); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      setSearchType(type.value);
    };
    
  const handleSearchTextChange = (e:any) => {
    setSearchText(e.target.value);
  };

  const handleStatusChange = (e:any) => {
    setFilterStatus(e.target.value);
  };


  const CreateFilter =(e:any)=>{
    dispatch(filtersSlice.actions.searchFilterChange(searchText));
    dispatch(filtersSlice.actions.statusFilterChange(filterStatus));
    dispatch(filtersSlice.actions.statusFilterChange(SearchType));
    
  }
  return (
    <Form form={form} layout="vertical">
      <Typography.Paragraph
        style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
      >
        Lọc vé
      </Typography.Paragraph>
      {options==1 ?(
        <Search
        placeholder='Nhập tên sự kiện'
        value={searchText}
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
        <Select
          defaultValue={{ value: 0, label: "Vé cổng" }}
          onChange={handleTypeChange}
          style={{ width: 200 }}
          options={[
            {
              value: 0,
              label: "Vé cổng",
            },
            {
              value: 1,
              label: "Vé VIP",
            },
          ]}
        />
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
      <SubmitButton onClick={CreateFilter}>Lọc</SubmitButton>
    </Form>
    // <Row justify='center'>
    //   <Col span={24}>
    //     <Typography.Paragraph
    //       style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
    //     >
    //       Search
    //     </Typography.Paragraph>
    //     <Search
    //       placeholder='input search text'
    //       value={searchText}
    //       onChange={handleSearchTextChange}
    //     />
    //   </Col>
    //   <Col sm={24}>
    //     <Typography.Paragraph
    //       style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
    //     >
    //       Filter By Status
    //     </Typography.Paragraph>
    //     <Radio.Group value={filterStatus} onChange={handleStatusChange}>
    //       <Radio value='All'>All</Radio>
    //       <Radio value='Completed'>Completed</Radio>
    //       <Radio value='Todo'>To do</Radio>
    //     </Radio.Group>
    //   </Col>
    //   <Col sm={24}>
    //     <Typography.Paragraph
    //       style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
    //     >
    //       Filter By Priority
    //     </Typography.Paragraph>
    //     <Select
    //       mode='multiple'
    //       allowClear
    //       placeholder='Please select'
    //       style={{ width: '100%' }}
    //       value={filterPriorities}
    //       onChange={handlePriorityChange}
    //     >
    //       <Select.Option value='High' label='High'>
    //         <Tag color='red'>High</Tag>
    //       </Select.Option>
    //       <Select.Option value='Medium' label='Medium'>
    //         <Tag color='blue'>Medium</Tag>
    //       </Select.Option>
    //       <Select.Option value='Low' label='Low'>
    //         <Tag color='gray'>Low</Tag>
    //       </Select.Option>
    //     </Select>
    //   </Col>
    // </Row>
  );
}

export default Filters