import { Form,Modal, Input, InputNumber, DatePickerProps, DatePicker, Checkbox, Select } from 'antd'
import React from 'react'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
interface Props {
  open?:any
  onSubmit?:any
  onCancel?:any
  loading?:boolean
}
const ModalFormServicePack = ({open,onSubmit,onCancel,loading}:Props) => {
    const [form] = Form.useForm();
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };

    const onCreate = async () => {
        const data = await form.validateFields();
        // onSubmit(formData.id,data);
    }
 
  return (
    <Modal confirmLoading={loading} open={open} onCancel={onCancel}  onOk={onCreate}>
    <Form form={form} layout="vertical">
      <Form.Item
        label="Tên gói vé"
        name="name"
        rules={[{ required: true, message: "Tên sản phẩm là bắt buộc!" }]}
      >
        <Input placeholder="Nhập tên gói vé" />
      </Form.Item>
      <Form.Item
        label="Ngày áp dụng"
        name="time"
        rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
      </Form.Item>
      <Form.Item
        label="Ngày hết hạn"
        name="deadline"
        rules={[{ required: true, message: "Mã sản phẩm là bắt buộc!" }]}
      >
        <DatePicker renderExtraFooter={() => "extra footer"} showTime />
      </Form.Item>

      <Form.Item
        label="Giá vé áp dụng"
        name="price"
        rules={[
          { required: true, message: "Giá sản phẩm là bắt buộc!" },
          { type: "number", message: "Số điện thoại phải là số" },
        ]}
      >
        <Checkbox onChange={onChange}>
          Vé lẻ (vnđ/vé) với giá
          <InputNumber placeholder="Giá vé" />
          /vé
        </Checkbox>
        <Checkbox onChange={onChange}>
          Combo vé với giá
          <InputNumber placeholder="Giá vé" />/
          <InputNumber placeholder="Giá vé" />
          vé
        </Checkbox>
      </Form.Item>

      <Form.Item
        label="Tình trạng"
        name="Status"
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
