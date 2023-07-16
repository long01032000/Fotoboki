import OtpForm from "../../components/LogicComponent/OtpForm/OtpForm";
import RightSide from "../../components/UIComponent/sharedUI/RightSide";
import "./styles.scss";
export default function OTP() {
  return (
    <section className="container">
      <OtpForm />
      <RightSide
        image="/Image/theme3.svg"
        title="It's just OTP verification"
        content="You are one step away from recovering your password."
      />
    </section>
  );
}
