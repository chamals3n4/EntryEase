import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const loggedIn = false;

const ProtectedRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
