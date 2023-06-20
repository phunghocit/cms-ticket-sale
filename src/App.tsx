import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./layouts";
import Dasboard from "./components/Dashboard";
import TicketManagement from "./components/TicketManagement";
import ModalServicePack from "./components/ServicePack/Modal/ModalFormServicePack";
import ServicePack from "./components/ServicePack";
import TicketCheck from "./components/TicketCheck";
import FilterTicketManagement from "./components/TicketManagement/Filter/FilterTicketManagement";
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
        <Route path="/TicketCheck" element={<TicketCheck />} />
        <Route path="/ServicePack/Table" element={<ServicePack />} />
        <Route />
      </Routes>
    </Layout>
  );
}

export default App;
