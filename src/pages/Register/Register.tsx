import React from "react";
import { Checkbox, Form, Input, Select } from "antd";
import { NavLink } from "react-router-dom";
import { CloseCircleOutlined } from "@ant-design/icons";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import FormItem from "../../components/FormItem/FormItem";

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="registerPage">
      <div className="row">
        <div className="leftSide">
          <div className="backToHome">
            <CloseCircleOutlined />
          </div>
          <div className="leftSide__content">
            <div className="title">
              <h1>Create your account</h1>
              <span>Unlock all Features!</span>
            </div>
            <div className="registerForm">
              <Form
                name="normal_register"
                className="registerForm__content"
                initialValues={{ remember: false }}
                onFinish={onFinish}
              >
                <FormItem
                  name="firstName"
                  required={true}
                  message="Please input your first name!"
                  dependencies={[""]}
                >
                  <Input
                    prefix={<img src="Image/User.svg" alt="FirstName"></img>}
                    placeholder="First Name"
                  />
                </FormItem>

                <FormItem
                  name="lastName"
                  required={true}
                  message="Please input your last name!"
                  dependencies={[""]}
                >
                  <Input
                    prefix={<img src="Image/User.svg" alt="LastName"></img>}
                    placeholder="Last Name"
                  />
                </FormItem>

                <FormItem
                  name="email"
                  required={true}
                  message="Please input your Email!"
                  dependencies={[""]}
                >
                  <Input
                    prefix={<img src="Image/Email.svg" alt="Email"></img>}
                    placeholder="Email"
                  />
                </FormItem>
                <FormItem
                  name="password"
                  required={true}
                  message="Please input your Password!"
                  dependencies={[""]}
                >
                  <Input.Password
                    prefix={
                      <img src="Image/shieldSlash.svg" alt="Password"></img>
                    }
                    type="password"
                    placeholder="Password"
                  />
                </FormItem>

                <Form.Item
                  name="confirmPassword"
                  required={true}
                  dependencies={[""]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={
                      <img src="Image/shieldSlash.svg" alt="Password"></img>
                    }
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Item>

                <Form.Item name="Role">
                  <Select placeholder="Role">
                    <Select.Option value="client">Client</Select.Option>
                    <Select.Option value="model">Model</Select.Option>
                    <Select.Option value="photographer">
                      Photographer
                    </Select.Option>
                    <Select.Option value="studio">Studio</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox> Accept</Checkbox>
                  </Form.Item>

                  <a className="terms-and-conditions" href="">
                    terms and conditions
                  </a>
                </Form.Item>

                <Form.Item>
                  <ButtonForm classname="register-form-button">
                    Register
                  </ButtonForm>
                  <div className="register-text text-center">
                    You have account? <NavLink to="/login">Login now</NavLink>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightSide__content ">
            <div className="ellipse">
              <img
                className="ellipse__image"
                src="/Image/theme2.svg"
                alt="..."
              />
              <div className="ellipse__description">
                <h1>Join us!</h1>
                <span>
                  Just go through the boring process of creating an account.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
