import LoginForm from "../../components/LoginForm/LoginForm";
import RightSide from "../../components/UIComponent/sharedUI/RightSide";

export default function Login() {
  return (
    <section className="login">
      <LoginForm />
      <RightSide
        image="/Image/theme1.svg"
        title="Connect with any photographer."
        content="Everything you need is an internet connection."
      />
    </section>
  );
}
