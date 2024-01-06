import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-12 bg-[#e7eef3] h-screen overflow-clip">
      <div className="col-span-2 bg-[#0f172a] md:h-screen pr-[20px]">
        <Sidebar />
      </div>
      <div className="col-span-10 m-4 md:m-0 pt-[20px] md:pb-4 bg-slate-200 mr-2 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
