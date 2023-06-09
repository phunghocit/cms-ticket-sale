import {
  Col,
  Row,
  Input,
  Typography,
  Radio,
  Select,
  Tag,
  Form,
  Checkbox,
  DatePicker,
  RadioChangeEvent,
} from "antd";
import { useState } from "react";
import { useAppDispatch } from "../../../hook/redux";

// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';
// import filtersSlice from './filtersSlice';
import {
  ButtonFilter,
  FilterForm,
  FormCustom,
  SubmitButton,
} from "../../Styles/styles";
import { useNavigate } from "react-router-dom";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const { Search } = Input;
interface Props {
  options?: any;
  filter?: any;
  CreateFilter: any;
}
const { RangePicker } = DatePicker;

const Filters = ({ options, CreateFilter }: Props) => {
  const dispatch = useAppDispatch();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [date, setDate] = useState([]);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  console.log(searchName);
  console.log(filterStatus);
  console.log(date);

  const handleSearchTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };

  const handleStatusChange = (e: RadioChangeEvent) => {
    setFilterStatus(e.target.value);
  };

  const handleSubmit = () => {
    CreateFilter(searchName, filterStatus, date);
  };
  return (
    <FilterForm>
      <FormCustom form={form} layout="vertical">
        <Typography.Paragraph
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 3,
            marginTop: 10,
          }}
        >
          Lọc vé
        </Typography.Paragraph>
        {options == 1 ? (
          <Search
            placeholder="Nhập tên sự kiện"
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
            <div style={{ display: "inline" }}>
              <Radio value="All">Tất cả</Radio>
              <Radio value="Checked">Đã đối soát</Radio>
              <Radio value="Uncheck">Chưa đối soát</Radio>
            </div>
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
          {/* <Input type="date" /> */}
          <RangePicker
            format={"DD/MM/YYYY"}
            onChange={(values: any) => {
              //  console.log(values);
              setDate(
                values != null
                  ? values.map((item: any) => {
                      return item.format("YYYY-MM-DD");
                    })
                  : ""
              );
            }}
          />
        </Form.Item>
        <ButtonFilter onClick={handleSubmit}>Lọc</ButtonFilter>
      </FormCustom>
    </FilterForm>
  );
};

export default Filters;
