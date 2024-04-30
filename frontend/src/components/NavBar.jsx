import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/EntryEase.png";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { LogOut } from "lucide-react";

import { Link } from "react-router-dom";

export default function NavBar({ handleLogout }) {
  const navigation = [
    { name: "Browse Jobs", href: "/jobs" },
    // { name: "EntryEase Blog", href: "/blog" },
    { name: "About EntryEase", href: "/about-us" },
  ];
  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1">
            <span className="sr-only">Your Company</span>
            <img className="h-6 w-auto" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to={"/add-job"}>
            <Button className="text-sm font-semibold leading-6 gap-2 bg-choreo-blue mr-4">
              <Plus />
              Post a job
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            className="text-sm font-semibold leading-6 gap-2 bg-fav-red"
          >
            <LogOut />
            Sign out from Job Posting
          </Button>
        </div>
      </nav>
    </>
  );
}
