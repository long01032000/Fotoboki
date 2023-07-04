import React from "react";
import { Button, Space, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";

type Props = {};

export default function LoginForm({}: Props) {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="left-side">
    <div className="login-item-1">
      <div className="title">
        <h1>Login to your Account</h1>
        <span>Welcome back! Select method to log in:</span>
      </div>
      <div className="button">
        <Space wrap>
          <Button>
            <img src="Image/GoogleLogo.svg" alt="Google"></img>
           <span className="google-text">Google</span>
          </Button>
          <Button>
          <img src="Image/FacebookLogo.svg" alt="Facebook"></img>
           <span className="facebook-text">Facebook</span>
          </Button>
        </Space>
      </div>
      <div className="nav-text">
      <h2>
        <span>or continue with email</span>
      </h2>
      </div>
      <div className="login-form">
        <Form
          name="normal_login"
          className="login-form"
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
              { required: true, 
                message: "Please input your Username!" 
              }
            ]}
          >
            <Input
              prefix={<img src="Image/Email.svg" alt="Email"></img>}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
            ]}
            
          >
            <Input.Password
              prefix={<img src="Image/shieldSlash.svg" alt="Password">               
              </img> }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            
            <NavLink className="login-form-forgot" to="/forgotpassword">
              Forgot password?
            </NavLink>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOG IN
            </Button>
            <div className="register text-center mt-3">
              Don’t have account? <NavLink to="/register">Create an account</NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  );
}
