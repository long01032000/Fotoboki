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
        <div className="rightSide">
          <div className="rightSide__content ">
            <div className="ellipse">
              <img
                className="ellipse__image"
                src="/Image/theme1.svg"
                alt="..."
              />
              <div className="ellipse__description">
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
