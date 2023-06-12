import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//setup react router dom
// import 'antd/dist/antd.css';
import './assets/scss/style.scss';
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Routes, Route, Navigate, Outlet, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import ResponsiveItem from "./HOC/ResponsiveItem/ResponsiveItem";
import { store } from "./redux/configStore";
import Login from "./pages/Login/Login";
import RegisterForm from "./components/RegisterForm/RegisterForm";

// import {} from 'react-router-dom'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate/>}>
          <Route index element={<ResponsiveItem Component={Home} />} ></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<RegisterForm/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
