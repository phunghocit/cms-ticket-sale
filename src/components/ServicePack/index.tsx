import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ModalFormServicePack from './Modal/ModalFormServicePack';
import TableFormServicePack from './Table/TableFormServicePack';
import { ButtonCreate, ButtonFile, Headbar } from '../Styles/styles';
import SearchBox from '../SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { addNewServicePack, fetchServicePack, updateServicePack } from './ServicePackSlide';
import { useAppDispatch } from '../../hook/redux';
import { servicepackRemainingSelector } from '../../redux/selectors';
import { ramdomcode } from '../randomcode';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

const DEFAULT_MODAL={code: "",name:"",startdate:"",starttime:"",deadlinedate:"",deadlinetime:"",price:"",pricecombo:"",quantity:"",status:""}
const ServicePack = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<any>(DEFAULT_MODAL);

  const [formLoading, setFormLoading] = useState(false);
  const dispatch = useAppDispatch();
  const servicepacklist = useSelector(servicepackRemainingSelector);
  console.log(servicepacklist);

  useEffect(() => {
    dispatch(fetchServicePack());
  }, []);

  const onSubmit = (id:any,data:any) => {
    setFormLoading(true);
    if (id) {
      console.log(id);
      const NewServicePack = {...data,ServiceId:id}
      dispatch(
        updateServicePack(NewServicePack)
      );
    }else{
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
      // console.log(data);

      // console.log(`${data.starttime.hour()}:${data.starttime.minute()}:${data.starttime.second()} `);
      dispatch(addNewServicePack(NewServicePack));
    }
 
    setOpen(false);
    setFormData(DEFAULT_MODAL);

  }

  const onCreate = () => {
    setOpen(true)
  }
  const onUpdate = async (id:any) => {
    // const res = await getDoc(doc(db, "servicepacks",`${id}`))
    const data = servicepacklist.find((servicepack:any) => servicepack.id === id)
    console.log(data);

    setFormData(data);
    
    setOpen(true)
  }
  const onCancel = () => { 
    setOpen(false);
    setFormData(DEFAULT_MODAL);
    
  }
  return (
    <div>
      <Headbar>
      <SearchBox />

        <ButtonFile >Xuất file(.csv)</ButtonFile>

        <ButtonCreate onClick={onCreate}>Thêm gói vé</ButtonCreate>
        <ModalFormServicePack formData={formData} open={open} onSubmit={onSubmit} onCancel={onCancel} loading={formLoading}/>

      </Headbar>
      <TableFormServicePack servicepacklist={servicepacklist} onUpdate={onUpdate}/>
    </div>
  );
}

export default ServicePack
