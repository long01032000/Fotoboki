import React, { useEffect, useState } from "react";
import { Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { CloseCircleOutlined } from "@ant-design/icons";
import ButtonForm from "../../components/UIComponent/ButtonForm/ButtonForm";
import FormItem from "../../components/FormItem/FormItem";
import SelectForm from "../../components/SelectForm";
import RightSide from "../../components/UIComponent/sharedUI/RightSide";
import "./styles.scss";
export default function Register() {
  const [role, setRole] = useState<number>(0);
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

                <Form.Item name="Role" initialValue={role}>
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
        <RightSide
          image="/Image/theme2.svg"
          title="Join us!"
          content="Just go through the boring process of creating an account."
        />
      </div>
    </section>
  );
}
