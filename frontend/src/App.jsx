import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CVReg from "./pages/CVReg";
import NotFound from "./pages/NotFound";
import LoginButtonPage from "./pages/LoginButtonPage";
import ProtectedRoute from "./ProtectedRoutes";
import { useState, useEffect } from "react";

import Cookies from "js-cookie";

function App() {
  const encodedUserInfo = Cookies.get("userinfo");
  const [userInfo, setUserInfo] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (!encodedUserInfo) return;
    // Read the cookie and set it to the state.
    const userInfo = JSON.parse(atob(encodedUserInfo));
    if (userInfo) {
      const info = JSON.stringify(userInfo);
      localStorage.setItem("userinfo", info);
      setUserInfo(info);
      setLoggedIn(true);
      Cookies.remove("userinfo", { path: "/" });
    }
  }, [encodedUserInfo]);

  const handleLogout = async () => {
    // Read the cookie
    const sessionHint = Cookies.get("session_hint");

    // Clear session data
    Cookies.remove("userinfo", { path: "/" });
    localStorage.clear();

    // Redirect the user
    window.location.href = `/auth/logout?session_hint=${sessionHint}`;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout handleLogout={handleLogout} />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cv-workshop" element={<CVReg />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        {/* <Route path="/add-job" element={<AddJob />} /> */}

        <Route
          path="/add-job"
          element={<ProtectedRoute isLoggedIn={loggedIn} />}
        >
          <Route index element={<AddJob />} />
        </Route>

        <Route path="/login" element={<LoginButtonPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
