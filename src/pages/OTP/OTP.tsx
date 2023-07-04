import { Input } from "antd";
import React, { useState } from "react";
import OtpForm from "../../components/OtpForm/OtpForm";

type Props = {};

export default function OTP({}: Props) {
  
  return (
    <section className="otp">
      <div className="row">
        <OtpForm/>
      <div className="right-side">
          <div className="otp-item-2 ">   
          <div className="ellipse">
              <img src="/Image/theme3.svg" alt="..." />
              <div className="nav-text">
              <h1>It's just OTP verification</h1>
                  <span>You are one step away from recovering your password.</span>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
}
