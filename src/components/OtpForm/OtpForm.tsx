import { Button,Space, Checkbox, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from '@ant-design/icons';



type Props = {};

let currentOTPIndex: number = 0;

export default function OtpForm({}: Props) {
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
 

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
 
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({target,}:React.ChangeEvent<HTMLInputElement>):void => {
    const {value} = target;
    const newOTP:string[] = [...otp]
    newOTP[currentOTPIndex] = value.substring(value.length -1);

    if(!value) setActiveOTPIndex(currentOTPIndex-1); 
    else setActiveOTPIndex(currentOTPIndex+1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>,
    index:number) => {
    currentOTPIndex = index
    if (key === 'Backspace')
    setActiveOTPIndex(currentOTPIndex - 1 );
  }
  
  useEffect(() => {
    inputRef.current?.focus()
  },[activeOTPIndex])

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
      <div className="otp-item-1">
        <div className="title">
          <h1>Enter OTP</h1>
          <span>
            Sent OTP on <span className="nav-text">alo123@gmail.com</span>
          </span>
        </div>
        <div className="otp-content">
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                ref={index === activeOTPIndex? inputRef : null}
                type="number" 
                className="otp-button" 
                onChange={handleOnChange} 
                onKeyDown={(e) => handleOnKeyDown(e,index)}
                value={otp[index]}
                />
                {index === otp.length - 1 ? null : (
                  <span className="w-4 py-0.5 bg-gray-400"></span>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="submit-button">
          <Button htmlType="submit" className="submit-button">
            SUBMIT
          </Button>
          <div className="check text-center">Resent OTP</div>
        </div>
      </div>
    </div>
  );
}
