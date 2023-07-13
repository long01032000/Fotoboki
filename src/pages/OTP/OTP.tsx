import { Input } from "antd";
import React, { useState } from "react";
import OtpForm from "../../components/OtpForm/OtpForm";

type Props = {};

export default function OTP({}: Props) {
  return (
    <section className="otp">
      <div className="row">
        <OtpForm />
        <div className="rightSide">
          <div className="rightSide__content ">
            <div className="ellipse">
              <img
                className="ellipse__image"
                src="/Image/theme3.svg"
                alt="..."
              />
              <div className="ellipse__description">
                <h1>It's just OTP verification</h1>
                <span>
                  You are one step away from recovering your password.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
