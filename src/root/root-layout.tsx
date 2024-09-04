import BottomBar from "@/components/shared/bottombar";
import Sidebar from "@/components/shared/sidebar";
import Topbar from "@/components/shared/topbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <Sidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
}

export default RootLayout;
