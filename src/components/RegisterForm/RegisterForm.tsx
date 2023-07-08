import React ,{ useState } from "react";
import { Button, Space, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from '@ant-design/icons';

type Props = {};

export default function RegisterForm({}: Props) {
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
    <div className="left-side">
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
      <div className="register-item-1">
        <div className="title">
          <h1>Create your account</h1>
          <span>Unlock all Features!</span>
        </div>
        <div className="register-form">
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
            <Form.Item
              name="user"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<img src="Image/User.svg" alt="User"></img>}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
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
                prefix={<img src="Image/shieldSlash.svg" alt="Password"></img>}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              
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
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<img src="Image/shieldSlash.svg" alt="Confirm"></img>}
                type="password"
                placeholder="Confirm Password"
              />
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
              <Button
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Register
              </Button>
              <div className="register-text text-center">
                You have account? <NavLink to="/login">Login now</NavLink>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
