import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Space, Checkbox, Form, Input } from "antd";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

type Props = {};

export default function ForgotPassword({}: Props) {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="forgot-password">
      <div className="row">
        <ForgotPasswordForm/>
        <div className="right-side">
          <div className="forgot-password-item-2 ">       
          <div className="ellipse">
              <img src="/Image/theme3.svg" alt="..." />
              <div className="nav-text">
              <h1>Forgot your password?</h1>
                  <span>You can get them back easily.</span>
              </div>
            </div>    
           
          </div>
        </div>
      </div>
    </section>
  );
}
