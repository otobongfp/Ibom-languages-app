import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePageLayout = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomePageLayout;
