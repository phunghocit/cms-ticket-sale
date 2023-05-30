import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"
import Dasboard from "./components/Dashboard"
import TicketManagement from './components/TicketManagement';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dasboard />} />
        <Route path='/TicketManagement' element={<TicketManagement />} />
      </Routes>
    </Layout>
  );
}

export default App;
