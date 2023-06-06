import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ModalFormServicePack from './Modal/ModalFormServicePack';
import TableFormServicePack from './Table/TableFormServicePack';
import { ButtonCreate, Headbar } from '../Styles/styles';
import SearchBox from '../SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { addNewServicePack, fetchServicePack } from './ServicePackSlide';
import { useAppDispatch } from '../../hook/redux';
import { servicepackRemainingSelector } from '../../redux/selectors';

const ServicePack = () => {
  const [open, setOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const dispatch = useAppDispatch();
  const servicepacklist = useSelector(servicepackRemainingSelector);
  console.log(servicepacklist);

  useEffect(() => {
    dispatch(fetchServicePack());
  }, [servicepacklist]);

  const onSubmit = (data:any) => {
    console.log(`${data.starttime.hour()}:${data.starttime.minute()}:${data.starttime.second()} `);
    // setFormLoading(true);
      dispatch(
        addNewServicePack(data)
      );
    setOpen(false);
  }

  const onCreate = () => {
    setOpen(true)
  }
  const onUpdate = () => {
    setOpen(true)
  }
  const onCancel = () => {
    setOpen(false);
    // setFormData(DEFAULT_USER);
  }
  return (
    <div>
      <Headbar>
      <ButtonCreate >Xuất file(.csv)</ButtonCreate>

        <ButtonCreate onClick={onCreate}>Thêm gói vé</ButtonCreate>
        <SearchBox />
        <ModalFormServicePack open={open} onSubmit={onSubmit} onCancel={onCancel} loading={formLoading}/>

      </Headbar>
      <TableFormServicePack servicepacklist={servicepacklist} onUpdate={onUpdate}/>
    </div>
  );
}

export default ServicePack
