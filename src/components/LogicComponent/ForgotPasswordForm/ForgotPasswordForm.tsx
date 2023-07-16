import { Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import "../../UIComponent/sharedUI/Input/Input.scss";
import ButtonForm from "../../UIComponent/ButtonForm/ButtonForm";

export default function ForgotPasswordForm() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="leftSide">
      <div className="leftSide__content">
        <div className="forgotTitle">
          <h1>Forgot your password?</h1>
          <span>Enter your Email and get OTP to verification.</span>
        </div>
        <div className="forgotForm">
          <Form
            name="normal_forgot"
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
              <ButtonForm name="forgotForm__button">GET PASSWORD</ButtonForm>
              <div className="forgotForm__check">
                Check your{" "}
                <span className="forgotForm__check--text">Email</span> and{" "}
                <NavLink to="/login">Login now </NavLink>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
