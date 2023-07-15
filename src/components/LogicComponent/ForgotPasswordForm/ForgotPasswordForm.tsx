import React, { useState } from "react";
import { Button, Space, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from '@ant-design/icons';


export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      navigate("/home");
    }, 2000);
   
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="leftSide">
        <div className="backToHome">
     <Space direction="vertical">
      <Space wrap>
        <Button
          type="primary" 
          icon={<LeftCircleOutlined />}
          loading={loadings[2]}
          onClick={() => {
            enterLoading(2);
            
          }
        }
         
        />
      </Space>
    </Space>
     </div>
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
            <div className="check text-center">
            Check your <span className="login-now">Email</span> and <NavLink to="/login">Login now </NavLink>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  );
}
