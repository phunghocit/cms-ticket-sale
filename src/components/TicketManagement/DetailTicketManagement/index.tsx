import React, { useState } from 'react'
import { Title } from '../../../layouts/styles'
import { DatePicker, Descriptions, Form, Input, Modal } from 'antd'
interface Props {
    open?:any
    onSubmit?:any
    loading?:any
    onCancel?:any
    formData?:any
  }
const DetailTicketManagement = ({formData,open,onSubmit,loading,onCancel}:Props) => {
  const [data,setData] = useState();

    const onCreate = async () => {
        console.log(data);
        
        onSubmit(formData.ticketId,data)
    }

    const onChange=(e:any)=>{
        setData(e.target.value)
        console.log(data);
        
    }
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
        <Descriptions
          column={{ md: 1 }}
        >
          <Descriptions.Item label="Số vé">
            {formData.id || ""}
          </Descriptions.Item>
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
            
            <Input type="date"  name='deadline' onChange={onChange} formTarget='DD MM YYYY'   defaultValue= {formData.deadline}/>
          </Descriptions.Item>

        </Descriptions>

    </Modal>
  );
}

export default DetailTicketManagement
