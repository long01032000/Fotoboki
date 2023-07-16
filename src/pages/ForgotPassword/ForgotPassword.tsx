import ForgotPasswordForm from "../../components/LogicComponent/ForgotPasswordForm/ForgotPasswordForm";
import RightSide from "../../components/UIComponent/sharedUI/RightSide";

export default function ForgotPassword() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="container">
        <ForgotPasswordForm />
        <RightSide
          image="/Image/theme3.svg"
          title="Forgot your password?"
          content="You can get them back easily."
        />
    </section>
  );
}
