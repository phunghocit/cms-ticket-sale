import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"
import Dasboard from "./components/Dashboard"
import TicketManagement from './components/TicketManagement';
import Modal from './components/ServicePack/ModalFormServicePack';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dasboard />} />
        <Route path='/TicketManagement' element={<TicketManagement />} />
        <Route path='/ServicePack/Add' element={<Modal />} />
      </Routes>
    </Layout>
  );
}

export default App;
