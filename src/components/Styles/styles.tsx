import styled from "styled-components";
import { Table, Button } from "antd";
import Search from "antd/es/input/Search";
import Modal from "react-modal";

export const Headbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

  :hover {
    background-color: white;
    color: #ff993c !important;
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
  /* display: flex; */
  position: "absolute";
  background: #ffff;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
