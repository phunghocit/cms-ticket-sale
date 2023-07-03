import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ModalFormServicePack from "./Modal/ModalFormServicePack";
import TableFormServicePack from "./Table/TableFormServicePack";
import { ButtonCreate, ButtonFile, Headbar } from "../Styles/styles";
import SearchBox from "../SearchBox";
import { useDispatch, useSelector } from "react-redux";
import ServicePackSlide, {
  addNewServicePack,
  fetchServicePack,
  updateServicePack,
} from "./ServicePackSlide";
import { useAppDispatch } from "../../hook/redux";
import { servicepackRemainingSelector } from "../../redux/selectors";
import { ramdomcode } from "../randomcode";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { CONVERT } from "../convertDate";
import { Input } from "antd";
import { servicepack } from "../interface";

const DEFAULT_MODAL = {
  code: "",
  name: "",
  startdate: "",
  starttime: "",
  deadlinedate: "",
  deadlinetime: "",
  price: 0,
  pricecombo: 0,
  quantity: 0,
  status: true,
};
const { Search } = Input;

const ServicePack = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<servicepack>(DEFAULT_MODAL);
  const [searchText, setSearchText] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const dispatch = useAppDispatch();
  const servicepacklist = useSelector(servicepackRemainingSelector);
  // let formatter = new Intl.DateTimeFormat("af");

  console.log(servicepacklist);

  useEffect(() => {
    setFormLoading(true);

    dispatch(fetchServicePack());
    setFormLoading(false);
  }, [formLoading]);

  const onSubmit = (id: any, data: any) => {
    setFormLoading(true);
    if (id) {
      console.log(id);
      const NewServicePack = { ...data, ServiceId: id };
      dispatch(updateServicePack(NewServicePack));
    } else {
      const NewServicePack = {
        code: ramdomcode(12),
        name: data.name,
        startdate: data.startdate,
        starttime: data.starttime,
        deadlinedate: data.deadlinedate,
        deadlinetime: data.deadlinetime,
        // startdate:`${NewServicePack.startdate.date()}/${NewServicePack.startdate.month()}/${NewServicePack.startdate.year()}`,
        // starttime:`${NewServicePack.starttime.hour()}:${NewServicePack.starttime.minute()}:${NewServicePack.starttime.second()}`,
        // deadlinedate:`${NewServicePack.deadlinedate.date()}/${NewServicePack.deadlinedate.month()}/${NewServicePack.deadlinedate.year()}`,
        // deadlinetime:`${NewServicePack.deadlinetime.hour()}:${NewServicePack.deadlinetime.minute()}:${NewServicePack.deadlinetime.second()}`,
        price: data.price,
        pricecombo: data.pricecombo,
        quantity: data.quantity,
        status: data.status,
      };
      console.log(data);

      // console.log(`${data.starttime.hour()}:${data.starttime.minute()}:${data.starttime.second()} `);
      dispatch(addNewServicePack(NewServicePack));
    }
    setFormLoading(false);
    setOpen(false);
    setFormData(DEFAULT_MODAL);
  };
  // const Create = async () => { //Tạo sẵn db trên firebase để đỡ phải nhập thủ công
  //   const rest = await addDoc(collection(db, "tickets"), {
  //     // code: `ALT${ramdomcode(8)}`,
  //     // datesell: "11/06/2023",
  //     // dateused:"",
  //     // deadline:"25/06/2023",
  //     // gate:"",
  //     // id:ramdomcode(12),
  //     // nameevent:"Hội chợ triển lãm tiêu dùng 2023",
  //     // statuscheck: false,
  //     // type: "Vé cổng",

  //     // code: `ALT${ramdomcode(8)}`,
  //     // datesell: "11/06/2023",
  //     // dateused:"",
  //     // deadline:"25/07/2023",
  //     // gate:"",
  //     // id:ramdomcode(12),
  //     // nameevent:"",
  //     // // Hội chợ triển lãm 2023
  //     // statuscheck: false,
  //     // type: "Vé cổng",

  //     // code: `ALT${ramdomcode(8)}`,
  //     // datesell: "2023-06-28",
  //     // dateused:"",
  //     // deadline:"2023-07-22",
  //     // gate:"",
  //     // id:ramdomcode(12),
  //     // nameevent:"",
  //     // statuscheck: false,
  //     // type: "Vé cổng",

  //     code:`ALT${ramdomcode(8)}`,
  //     datesell:"2023-06-30",
  //     dateused:"2023-06-30",
  //     deadline:"2023-08-20",
  //     gate:"",
  //     id: ramdomcode(12),
  //     nameevent:"Hội chợ triển lãm hoa 2023",
  //     // statusused: "Chưa sử dụng",
  //     statuscheck:false,
  //     type:"Vé cổng",
  //   });
  // };
  const onCreate = () => {
    setOpen(true);
  };
  const onUpdate = async (id: any) => {
    // const res = await getDoc(doc(db, "servicepacks",`${id}`))
    const data = servicepacklist.find(
      (servicepack: servicepack) => servicepack.id === id
    );
    console.log(data);

    setFormData(data||DEFAULT_MODAL);

    setOpen(true);
  };
  const onCancel = () => {
    setOpen(false);
    setFormData(DEFAULT_MODAL);
  };
  const handleSearchTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    dispatch(ServicePackSlide.actions.searchFilterChange(e.currentTarget.value));
  };
  return (
    <div>
      <Headbar>
        <div>
        <Search
        placeholder="Nhập mã gói vé"
        value={searchText}
        onChange={handleSearchTextChange}
      />
        </div>
        <div>
        {/* <ButtonCreate onClick={Create}>Tạo</ButtonCreate> */}
        <ButtonFile>Xuất file(.csv)</ButtonFile>
        <ButtonCreate onClick={onCreate}>Thêm gói vé</ButtonCreate>
        </div>
      </Headbar>
      <ModalFormServicePack
          formData={formData}
          open={open}
          onSubmit={onSubmit}
          onCancel={onCancel}
          loading={formLoading}
        />
      <TableFormServicePack
        servicepacklist={servicepacklist}
        onUpdate={onUpdate}
        loading={formLoading}
      />
    </div>
  );
};

export default ServicePack;
