import React from "react";
import { Link } from "react-router-dom";

export default function LoginButtonPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center  px-6 py-15 sm:py-32 lg:px-8">
        <div className="text-center">
          <h3 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sorry, please log in before adding a job
          </h3>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Before adding a job, you need to sign up with our platform.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <Link
              to="/auth/login"
              className="rounded-md bg-choreo-blue px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-choreo-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login to Access Job Listing Portal
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
