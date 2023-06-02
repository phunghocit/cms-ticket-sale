import { Form,Modal, Input, InputNumber, DatePickerProps, DatePicker, Checkbox, Select } from 'antd'
import React, { useState } from 'react'
import { SubmitButton } from '../../Styles/styles';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
const CheckboxGroup = Checkbox.Group;

const plainOptions = [ 'Đã sử dụng', 'Chưa sử dụng','Hết hạn'];
const plainOptions2 = [ 'Cổng 1','Cổng 2','Cổng 3','Cổng 4','Cổng 5'];

const FilterTicketManagement = () => {
  const [form] = Form.useForm();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [checkedList2, setCheckedList2] = useState<CheckboxValueType[]>([]);
  const [indeterminate2, setIndeterminate2] = useState(true);
  const [checkAll2, setCheckAll2] = useState(false);

  
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
  const onChange2 = (list2: CheckboxValueType[]) => {
    setCheckedList2(list2);
    setIndeterminate2(!!list2.length && list2.length < plainOptions2.length);
    setCheckAll2(list2.length === plainOptions2.length);
  };

  const onCheckAllChange2 = (e: CheckboxChangeEvent) => {
    setCheckedList2(e.target.checked ? plainOptions2 : []);
    setIndeterminate2(false);
    setCheckAll2(e.target.checked);
  };
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Từ ngày"
        name="time"
        rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
      </Form.Item>
      <Form.Item
        label="Đến ngày"
        name="deadline"
        rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
      </Form.Item>
      <Form.Item
        label="Tình trạng sử dụng"
        name="services_used"
        style={{ width: "85%" }}
      >
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Tất cả
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="Cổng Check-in"
        name="services_used"
        style={{ width: "85%" }}
      >
        <Checkbox indeterminate={indeterminate2} onChange={onCheckAllChange2} checked={checkAll2}>
        Tất cả
      </Checkbox>
      <CheckboxGroup options={plainOptions2} value={checkedList2} onChange={onChange2} />
      </Form.Item>
      <SubmitButton >Lọc</SubmitButton>

    </Form>
  );
}

export default FilterTicketManagement
