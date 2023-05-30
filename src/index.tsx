// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import TicketManagement from './components/TicketManagement';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:  <App/>
//   }, 
//   {
//     path: "/TicketManagement",
//     element:  <TicketManagement/>
//   },  
// ])
// const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
// root.render(
//   <RouterProvider router={router}/>
// );
// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)