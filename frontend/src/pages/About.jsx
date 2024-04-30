import React from "react";
import Avatar from "../assets/images/moodaya.jpg";
import { Link } from "react-router-dom";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    url: Avatar,
  },
];

export default function About() {
  return (
    <>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto grid  max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="items-start pl-20 gap-x-2">
            <img
              className="h-[300px] w-[300px] rounded-[15px]"
              src={people[0].url}
              alt=""
            />
            {/* <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                {people[0].name}
              </h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">
                {people[0].role}
              </p>
            </div> */}
          </div>
          <div className="max-w-5xl pl-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hey I'm Chamal 🖐
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I developed this web application for the WSO2 code challenge, and
              I'm very happy because entering this challenge helped me learn a
              lot of technical skills
            </p>

            <div>
              <h3 className="text-base font-semibold leading-7 pt-8 tracking-tight text-gray-900">
                Here's my socials and connect with me
              </h3>
              <div className=" gap-4 pt-3">
                <Link to={"https://github.com/chamals3n4"} target="_blank">
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    <Github />
                  </p>
                </Link>

                <Link to={"https://instagram.com/chamalsena"} target="_blank">
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    <Instagram />
                  </p>
                </Link>

                <Link to={"https://linkedin.com/in/chamalsena"} target="_blank">
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    <Linkedin />
                  </p>
                </Link>

                <Link to={"https://x.com/chamalsena"} target="_blank">
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    <Twitter />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
