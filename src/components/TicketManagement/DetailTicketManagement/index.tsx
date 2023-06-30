import React, { useState,useEffect } from "react";

import { Title } from "../../../layouts/styles";
import { Descriptions, Form, Input, Modal } from "antd";
import form from "antd/es/form";
interface Props {
  open?: boolean;
  onSubmit?: any;
  loading?: any;
  onCancel?: any;
  formData?: any;
}
const DetailTicketManagement = ({
  formData,
  open,
  onSubmit,
  loading,
  onCancel,
}: Props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState();
  useEffect(()=>{
    if (!open) {
      form.resetFields();
    }
    form.setFieldsValue(formData);
  },[open])
  const onCreate = async () => {
    console.log(data);

    onSubmit(formData.ticketId, data);
    
  };

  const onChange = (e: any) => {
    setData(e.target.value);
    console.log(data);
  };
  return (
    <Modal
      confirmLoading={loading}
      open={open}
      onCancel={onCancel}
      onOk={onCreate}
      okText={"Lưu"}
      cancelText={"Huỷ"}
      title={"Đổi ngày sử dụng vé"}
    >
      <Descriptions column={{ md: 1 }}>
        <Descriptions.Item label="Số vé">{formData.id || ""}</Descriptions.Item>
        <Descriptions.Item label="Loại vé">
          {`${formData.type}-${
            formData.nameevent == "" ? "Vé gia đình" : "Vé cổng"
          }` || ""}
        </Descriptions.Item>
        {formData.nameevent == "" ? (
          ""
        ) : (
          <Descriptions.Item label="Tên sự kiện:">
            {formData.nameevent || ""}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="Hạn sử dụng">
          <Form form={form} layout="vertical">
            <Form.Item
            name='deadline'>
          <Input
            type="date"
            name="deadline"
            onChange={onChange}
            // value={data}
          />
            </Form.Item>

          </Form>

        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default DetailTicketManagement;
