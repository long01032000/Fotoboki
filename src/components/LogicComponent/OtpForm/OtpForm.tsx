import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import ButtonForm from "../../UIComponent/ButtonForm/ButtonForm";


let currentOTPIndex: number = 0;

export default function OtpForm() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className="leftSide">
      <div className="leftSide__content">
        <div className="otpTitle">
          <h1>Enter OTP</h1>
          <span className="otpTitle__nav">
            Sent OTP on{" "}
            <span className="otpTitle__nav--text">alo123@gmail.com</span>
          </span>
        </div>
        <div className="otpForm">
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  ref={index === activeOTPIndex ? inputRef : null}
                  type="number"
                  className="otpForm__input"
                  onChange={handleOnChange}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                  value={otp[index]}
                />
                {index === otp.length - 1 ? null : (
                  <span></span>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="otpButton">
          <ButtonForm name="otpButton__submit">SUBMIT</ButtonForm>
          <div className="otpButton__resend ">Resent OTP</div>
        </div>
      </div>
    </div>
  );
}
