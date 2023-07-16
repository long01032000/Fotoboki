import { Button, Space, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import ButtonForm from "../../UIComponent/ButtonForm/ButtonForm";
import "./styles.scss";
import FormItem from "../../FormItem/FormItem";
import "../../UIComponent/sharedUI/Input/Input.scss"


export default function LoginForm() {
 
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="leftSide">
      <div className="leftSide__content">
        <div className="loginTitle">
          <h1>Login to your Account</h1>
          <span>Welcome back! Select method to log in:</span>
        </div>
        <div className="buttons">
            <Button className="button_media">
              <img src="Image/GoogleLogo.svg" alt="Google"></img>
              <span className="google-text">Google</span>
            </Button> 
            <Button className="button_media">
              <img src="Image/FacebookLogo.svg" alt="Facebook"></img>
              <span className="facebook-text">Facebook</span>
            </Button>
        </div>
        <div className="navTitle">
          <h2>
            <span>or continue with email</span>
          </h2>
        </div>
        <div className="loginForm">
          <Form
            name="normal_login"
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
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<img src="Image/Email.svg" alt="Email"></img>}
                placeholder="Email"
              />
            </Form.Item>
            <FormItem
              name="password"
              required={true}
              message="Please input your Password!"    
            >
            <Input.Password
                prefix={<img src="Image/shieldSlash.svg" alt="Password"></img>}
                type="password"
                placeholder="Password"
              />
            </FormItem>
            {/* <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
             
            </Form.Item> */}
            <Form.Item>
              <Form.Item className="loginForm__remember" name="remember" valuePropName="checked">
               <div className="rememberForgot">
               <Checkbox>Remember me</Checkbox>
                <NavLink to="/forgotpassword">
                Forgot password?
              </NavLink>
               </div>
              </Form.Item>

             
            </Form.Item>

            <Form.Item>
              <ButtonForm
                name="loginForm__button"
              >
                LOG IN
              </ButtonForm>
              <div className="loginForm__button--text">
                Don’t have account? {" "}
                <NavLink to="/register">Create an account</NavLink>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
