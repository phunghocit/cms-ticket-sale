import styled from "styled-components";
import { Table, Button, Badge, Form, Checkbox, Modal } from "antd";
import Search from "antd/es/input/Search";
import { NavLink } from "react-router-dom";

export const Headbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:10px;
`;

export const SearchBox = styled(Search)`
  width: 40%;
  border: 1px solid transparent;
  font-size: 1rem;

  input {
    background-color: rgba(17, 25, 40, 0.73);
    color: pink;
    border: 1px solid transparent;
    font-weight: bold;
  }

  button {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: rgba(17, 25, 40, 1);
    border: 1px solid transparent;

    svg {
      color: pink;
    }
  }
`;

export const TableCustom = styled(Table)`

  margin-top: 1rem;
  .ant-table {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    /* background-color: rgba(17, 25, 40, 0.73); */
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }

  .ant-table-thead .ant-table-cell {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: #f1f4f8;
    /* color: white; */
  }
  .ant-table-tbody {
    height: 70%;
    overflow-y: auto;
  }

  .ant-table-tbody .ant-table-row {
    border: 1px solid white;
  }

  .ant-table-tbody .ant-table-cell {
    border-bottom: 0.75px solid white;
    /* color: pink; */
    font-weight: bold;
    padding: 0.3rem;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: rgba(17, 25, 40, 0.73);
    color: white;
  }

  .ant-pagination {
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    /* background-color: rgba(17, 25, 40, 0.73); */
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    margin: 0px !important;
    padding: 0.5rem;
    /* bottom: 0; */
    justify-content: center;
    border-radius: 0 0 1rem 1rem;
  }
`;
export const FormCustom = styled(Form)`
  margin-right: 10px;
  .ant-form-item-label{
    font-weight: bold;

  }

`;
export const ButtonAction = styled(Button)`
  margin-right: 10px;
  font-weight: bold;

  :hover {
    background-color: white;
  }
`;

export const ButtonCreate = styled(Button)`
  background-color: #ff993c;
  border: 2px solid #ff993c !important;
  font-weight: bold;
  color: white;

  :hover {
    background-color: white;
    color: #ff993c !important;
  }
`;
export const ButtonFile = styled(Button)`
  background-color: white;
  border: 2px solid #ff993c !important;
  font-weight: bold;
  color: #ff993c;
  margin: 2px;
  :hover {
    background-color: #ff993c ;
    color: white !important;
  }
`;
export const ButtonFilter = styled(Button)`
  background-color: white;
  border: 2px solid #ff993c !important;
  font-weight: bold;
  color: #ff993c;

  :hover {
    background-color: #ff993c ;
    color: white !important;
  }
`;
export const SubmitButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  height: auto;
  width: auto;
  padding: 0.25rem 1.25rem;

  background: #4096ff;
  color: white;
  border: 2px solid #4096ff;

  :hover {
    color: #4096ff;
    background: white;
  }
`;
export const ModalCustom = styled(Modal)`
  display: flex;
`;
export const SearchCustom = styled(Search)`
  /* display: flex; */
  /* width: 30%; */

`;
export const BadgeSuccess = styled(Badge)`
  /* display: flex; */
  background: #DEF7E0;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #03AC00;
  border-radius: 4px;
`;
export const BadgeError = styled(Badge)`
  /* display: flex; */
  background: #F8EBE8;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #FD5959;
  border-radius: 4px;
`;
export const BadgeDefault = styled(Badge)`
  /* display: flex; */
  background: #EAF1F8;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #919DBA;
  border-radius: 4px;
`;
export const ACustom = styled.a`
  text-decoration: none;
  color: #1E0D03;
  padding-right: 1rem;
  :active{
    color: #FF993C;
    text-decoration: underline;

  }

`;

export const FilterForm = styled.div`
margin: 1rem;
margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CheckboxCustom = styled(Checkbox)`
  display: flex;
`;
export const DivCheckBox = styled.div`
  display: flex;
  
`;
export const DivDateTime = styled.div`
  display: flex;
  
`;