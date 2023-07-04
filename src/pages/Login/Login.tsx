import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox, Form, Input } from "antd";
import LoginForm from "../../components/LoginForm/LoginForm";

type Props = {};

export default function Login({}: Props) {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="login">
      <div className="row">
        <LoginForm />
        <div className="right-side">
          <div className="login-item-2 ">
            <div className="ellipse">
              <img src="/Image/theme1.svg" alt="..." />
              <div className="nav-text">
                <h1>Connect with any photographer.</h1>
                <span>Everything you need is an internet connection.</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
