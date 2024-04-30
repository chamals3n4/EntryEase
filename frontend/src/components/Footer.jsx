import React from "react";
import Logo from "../assets/images/EntryEase.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img className="h-6 w-auto" src={Logo} />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Facilitating Seamless Exploration of Internship Opportunities
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Browse Jobs{" "}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500 lg:text-right">
            Develop by{" "}
            <Link to={"https://www.github.com/chamals3n4"}>
              Chamal Senarathna{" "}
            </Link>
            for{" "}
            <Link to={"https://choreo.dev/cybertruck"}>
              WSO2 Code Challenge
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
