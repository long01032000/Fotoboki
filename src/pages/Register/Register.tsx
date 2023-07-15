import RightSide from "../../components/UIComponent/sharedUI/RightSide";
import RegisterForm from "../../components/LogicComponent/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <section className="container">
      <RegisterForm />
      <RightSide
        image="/Image/theme2.svg"
        title="Join us!"
        content="Just go through the boring process of creating an account."
      />
    </section>
  );
}
