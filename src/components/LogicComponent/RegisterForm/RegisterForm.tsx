import { Checkbox, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import FormItem from "../../FormItem/FormItem";
import SelectForm from "../../SelectForm";
import "./styles.scss";
import "../../UIComponent/sharedUI/Input/Input.scss";
import ButtonForm from "../../UIComponent/ButtonForm/ButtonForm";
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
  const [role, setRole] = useState<number>();
  //update Roles for user
  useEffect(() => {
    switch (role) {
      case 1:
        setRole(1);
        break;
      case 2:
        setRole(2);
        break;
      case 3:
        setRole(3);
        break;
      case 4:
        setRole(4);
        break;
      default:
        setRole(0);
        break;
    }
  }, [role]);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="leftSide">
      <div className="leftSide__content">
        <div className="title">
          <h1>Create your account</h1>
          <span>Unlock all Features!</span>
        </div>
        <div className="registerForm">
          <Form
            name="normal_register"
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
                prefix={<img src="Image/shieldSlash.svg" alt="Password"></img>}
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
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<img src="Image/shieldSlash.svg" alt="Password"></img>}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item name="Role" initialValue={role ? role : "Your role"}>
              <SelectForm value={role} onChange={setRole} />
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
              <ButtonForm name="registerForm__button">REGISTER</ButtonForm>
              <div className="registerForm__button--text">
                You have account? <NavLink to="/login">Login now</NavLink>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
