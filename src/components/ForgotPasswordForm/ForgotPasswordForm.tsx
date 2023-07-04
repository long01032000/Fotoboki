import React from "react";
import { Button, Space, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";

type Props = {};

export default function ForgotPasswordForm({}: Props) {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="left-side">
    <div className="forgot-password-item-1">
      <div className="title">
        <h1>Forgot your password?</h1>
        <span>Enter your Email and get OTP to verification.</span>
      </div>
      <div className="forgot-password-form">
        <Form
          name="normal_forgot-password"
          className="forgot-password-form"
          initialValues={{ remember: false }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input
              prefix={<img src="Image/Email.svg" alt="Email"></img>}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="forgot-password-form-button"
            >
              GET PASSWORD
            </Button>
            <div className="check text-center mt-3">
            Check your <span className="login-now">Email</span> and <NavLink to="/login">Login now </NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  );
}
