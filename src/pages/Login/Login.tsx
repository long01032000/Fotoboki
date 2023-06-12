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
        {/* <div className="left-side">
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
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  <div className="register text-center mt-3">
                    Don’t have account? Create an account
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div> */}
        <LoginForm/>
        <div className="right-side">
          <div className="login-item-2 "></div>
        </div>
      </div>
    </section>
  );
}
