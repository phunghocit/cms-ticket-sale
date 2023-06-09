import { Form,Modal, Input, InputNumber, DatePickerProps, DatePicker, Checkbox, Select, TimePicker } from 'antd'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { addNewServicePack } from '../ServicePackSlide'
import { Title } from '../../../layouts/styles';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
// dayjs.extend(customParseFormat);
interface Props {
  open?:any
  onSubmit?:any
  onCancel?:any
  loading?:boolean
  formData?:any
}
const ModalFormServicePack = ({formData,open,onSubmit,onCancel,loading}:Props) => {
    const [form] = Form.useForm();
    const dateFormat = 'DD/MM/YYYY';
    const timeFormat = 'HH:mm:ss';
    let { id } = useParams();

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };

    const onCreate = async () => {
        const NewServicePack = await form.validateFields();
        console.log(NewServicePack);
        onSubmit(NewServicePack);
    }
    useEffect(()=>{
      if(!open){
          form.resetFields();
      }
  },[open])

  useEffect(()=>{
      if(open && formData){
          form.setFieldsValue(formData);
          console.log(formData);
      }
  },[open,formData])
  return (
    <Modal
      confirmLoading={loading}
      open={open}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form form={form} layout="vertical">
        {id ? (
          <Form.Item
            label="Mã sự kiện"
            name="codeevent"
            rules={[{ required: true, message: "Tên sản phẩm là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên gói vé" />
          </Form.Item>
        ) : (
          ""
        )}
        {id ? (
          <Form.Item
            label="Tên sự kiện"
            name="nameevent"
            rules={[{ required: true, message: "Tên sản phẩm là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên gói vé" />
          </Form.Item>
        ) : (
          <Form.Item
            label="Tên gói vé"
            name="name"
            rules={[{ required: true, message: "Tên sản phẩm là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên gói vé" />
          </Form.Item>
        )}

        <Form.Item
          label="Ngày áp dụng"
          name="startdate"
          rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
        >
          <Input type="date" />
          {/* <DatePicker placeholder="dd/mm/yyyy" format={dateFormat} /> */}
        </Form.Item>
        <Form.Item
          name="starttime"
          rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
        >
          <Input type="time" />
          
          {/* <TimePicker placeholder="hh:mm:ss" format={timeFormat} /> */}
          {/* <DatePicker renderExtraFooter={() => "extra footer"} showTime /> */}
        </Form.Item>
        <Form.Item
          label="Ngày hết hạn"
          name="deadlinedate"
          rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
        >
          <DatePicker placeholder="dd/mm/yyyy" format={dateFormat} />
        </Form.Item>
        <Form.Item
          name="deadlinetime"
          rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
        >
          <TimePicker placeholder="hh:mm:ss" format={timeFormat} />
        </Form.Item>

        <p>Giá vé áp dụng</p>
        <Checkbox onChange={onChange}>
          Vé lẻ (vnđ/vé) với giá
          <Form.Item name="price">
            <InputNumber placeholder="Giá vé" />
          </Form.Item>
          /vé
        </Checkbox>
        <Checkbox onChange={onChange}>
          Combo vé với giá
          <Form.Item name="pricecombo">
            <InputNumber placeholder="Giá vé" />
          </Form.Item>
          <Form.Item name="quantity">
            <InputNumber placeholder="Số vé" />
          </Form.Item>
          vé
        </Checkbox>
        <Form.Item
          label="Tình trạng"
          name="status"
          rules={[{ required: true, message: "Ảnh sản phẩm là bắt buộc" }]}
        >
          <Select
            options={[
              { value: true, label: "Đang áp dụng" },
              { value: false, label: "Tắt" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalFormServicePack
