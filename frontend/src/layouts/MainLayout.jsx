import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar";

export default function MainLayout({ handleLogout }) {
  return (
    <>
      <NavBar handleLogout={handleLogout} />
      <Outlet />
    </>
  );
}
