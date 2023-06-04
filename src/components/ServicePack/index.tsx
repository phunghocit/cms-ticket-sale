import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ModalFormServicePack from './Modal/ModalFormServicePack';
import TableFormServicePack from './Table/TableFormServicePack';
import { ButtonCreate, Headbar } from '../Styles/styles';
import SearchBox from '../SearchBox';

const ServicePack = () => {
    const [open, setOpen] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const onSubmit = () => {
      setFormLoading(true);

      setOpen(false);
  }
  const onCreate = () => {
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

        <ButtonCreate onClick={onCreate}>Create User</ButtonCreate>
        <SearchBox />
        <ModalFormServicePack open={open} onSubmit={onSubmit} onCancel={onCancel} loading={formLoading}/>

      </Headbar>
      <TableFormServicePack />
    </div>
  );
}

export default ServicePack
