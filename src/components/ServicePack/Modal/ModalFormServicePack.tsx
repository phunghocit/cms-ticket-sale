import {
  Form,
  Modal,
  Input,
  InputNumber,
  DatePickerProps,
  DatePicker,
  Checkbox,
  Select,
  TimePicker,
} from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { addNewServicePack } from "../ServicePackSlide";
import { Title } from "../../../layouts/styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { CheckboxCustom, DivCheckBox, DivDateTime, FormCustom, ModalCustom } from "../../Styles/styles";
// dayjs.extend(customParseFormat);
interface Props {
  open?: any;
  onSubmit?: any;
  onCancel?: any;
  loading?: boolean;
  formData?: any;
}
const ModalFormServicePack = ({
  formData,
  open,
  onSubmit,
  onCancel,
  loading,
}: Props) => {
  const [form] = Form.useForm();
  const dateFormat = "DD/MM/YYYY";
  const timeFormat = "HH:mm:ss";
  // const [ id ,setId] = useState();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onCreate = async () => {
    const data = await form.validateFields();
    //console.log(formData.id,data);
    onSubmit(formData.id, data);
  };
  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
    form.setFieldsValue(formData);
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData);
      console.log(formData);
    }
  }, [open, formData]);
  return (
    <ModalCustom
      confirmLoading={loading}
      open={open}
      onCancel={onCancel}
      onOk={onCreate}
      okText={"Lưu"}
      cancelText={"Huỷ"}
    >
      <FormCustom form={form} layout="vertical">
        {formData.id ? (
          <Form.Item
            label="Mã sự kiện"
            name="codeevent"
            rules={[{ required: true, message: "Mã sự kiện là bắt buộc!" }]}
          >
            <Input placeholder="Nhập mã sự kiện" />
          </Form.Item>
        ) : (
          ""
        )}
        {formData.id ? (
          <Form.Item
            label="Tên sự kiện"
            name="nameevent"
            rules={[{ required: true, message: "Tên sự kiện là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên sự kiện" />
          </Form.Item>
        ) : (
          <Form.Item
            label="Tên gói vé"
            name="name"
            rules={[{ required: true, message: "Tên gói vé là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên gói vé" />
          </Form.Item>
        )}
        <DivDateTime>
          <Form.Item
          label="Ngày áp dụng"
          name="startdate"
          rules={[{ required: true, message: "Ngày áp dụng là bắt buộc!" }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          label=" "
          name="starttime"
          // rules={[{ required: true, message: "Giờ áp dụng là bắt buộc!" }]}
        >
          <Input placeholder="hh-mm-ss" type="time" />
        </Form.Item>


        <Form.Item
          label="Ngày hết hạn"
          name="deadlinedate"
          rules={[{ required: true, message: "Ngày hết hạn là bắt buộc!" }]}
        >
          {/* <input type="datetime-local" /> */}
          <Input type="date" />
          {/* <DatePicker placeholder="dd/mm/yyyy" format={dateFormat} /> */}
        </Form.Item>
        <Form.Item
          label=" "
          name="deadlinetime"
          // rules={[{ required: true, message: "Giờ hết hạn là bắt buộc!" }]}
        >
          <Input placeholder="hh-mm-ss" type="time" />
          {/* <TimePicker placeholder="hh:mm:ss" format={timeFormat} /> */}
        </Form.Item>
        </DivDateTime>

        <Form.Item
          label="Giá vé áp dụng"

        >
        <CheckboxCustom onChange={onChange}>
          <DivCheckBox>
            Vé lẻ (vnđ/vé) với giá
            <Form.Item name="price">
              <InputNumber placeholder="Giá vé" />
            </Form.Item>
            /vé
          </DivCheckBox>
        </CheckboxCustom>

        <CheckboxCustom onChange={onChange}>
          <DivCheckBox>
            Combo vé với giá
            <Form.Item name="pricecombo">
              <InputNumber placeholder="Giá vé" />
            </Form.Item>
            /
            <Form.Item name="quantity">
              <InputNumber placeholder="Số vé" width={30} />
            </Form.Item>
            vé
          </DivCheckBox>
        </CheckboxCustom>
        </Form.Item>

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
      </FormCustom>
    </ModalCustom>
  );
};

export default ModalFormServicePack;
