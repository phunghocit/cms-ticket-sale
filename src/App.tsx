import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom'
import Layout from "./layouts"
import Dasboard from "./components/Dashboard"
import TicketManagement from './components/TicketManagement/TableTicketManagement';
import ModalServicePack from './components/ServicePack/Modal/ModalFormServicePack';
import TableServicePack from './components/ServicePack';
import TableTicketCheck from './components/TicketCheck/Table/TableTicketCheck';
import FilterTicketManagement from './components/TicketManagement/Filter/FilterTicketManagement';
function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route path="/TicketManagement" element={<TicketManagement />} />
          <Route
            path="/TicketManagement/Filter"
            element={<FilterTicketManagement />}
          />
          <Route />
          <Route path="/TicketCheck" element={<TableTicketCheck />} />
          <Route path="/ServicePack/Table" element={<TableServicePack />} />

          <Route />
        </Routes>
      </Layout>
  );
}

export default App;
