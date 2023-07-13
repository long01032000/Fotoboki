import { Outlet } from "react-router-dom";
import Footer from "../../components/UIComponent/sharedUI/Footer/Footer";
import Header from "../../components/UIComponent/sharedUI/Header/Header";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
