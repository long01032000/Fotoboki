import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import RightSide from "../../components/UIComponent/sharedUI/RightSide";

export default function ForgotPassword() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="forgot-password">
      <div className="row">
        <ForgotPasswordForm />
        <RightSide
          image="/Image/theme3.svg"
          title="Forgot your password?"
          content="You can get them back easily."
        />
      </div>
    </section>
  );
}
