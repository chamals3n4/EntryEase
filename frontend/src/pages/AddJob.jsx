import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddJob({ addJobSubmit }) {
  const [title, setTitle] = useState("");
  // const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [job_description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [company_name, setCompanyName] = useState("");
  const [company_description, setCompanyDescription] = useState("");
  const [company_email, setCompanyEmail] = useState("");
  const [company_contact_number, setCompanyPhone] = useState("");

  const navigate = useNavigate();

  const SERVICE_URL = window.configs.apiUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${SERVICE_URL}/add-job`,
        {
          title,
          location,
          job_description,
          salary,
          company_name,
          company_description,
          company_email,
          company_contact_number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Redirect or handle success as needed
        navigate("/jobs");
      } else {
        // Handle error
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-ey-black sm:text-4.5xl">
          Add New Job Vacancy
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="flex items-center py-3 justify-center h-full">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="type"
                      name="type"
                      required
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div> */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Listing Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="job-name"
                        id="job-name"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      autoComplete="street-address"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="job-desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description About Job
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="job-desc"
                      name="job-desc"
                      rows={3}
                      required
                      value={job_description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Salary
                  </label>
                  <div className="mt-2">
                    <select
                      id="salary"
                      name="salary"
                      required
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Under $50K">Under $50K</option>
                      <option value="$50K - 60K">$50K - $60K</option>
                      <option value="$60K - 70K">$60K - $70K</option>
                      <option value="$70K - 80K">$70K - $80K</option>
                      <option value="$80K - 90K">$80K - $90K</option>
                      <option value="$90K - 100K">$90K - $100K</option>
                      <option value="$100K - 125K">$100K - $125K</option>
                      <option value="$125K - 150K">$125K - $150K</option>
                      <option value="$150K - 175K">$150K - $175K</option>
                      <option value="$175K - 200K">$175K - $200K</option>
                      <option value="Over $200K">Over $200K</option>
                    </select>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Company Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="comp-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="comp-name"
                      id="comp-name"
                      autoComplete="given-name"
                      required
                      value={company_name}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="comp-desc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description About Company
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="comp-desc"
                      name="comp-desc"
                      rows={3}
                      required
                      value={company_description}
                      onChange={(e) => setCompanyDescription(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={company_email}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={company_contact_number}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We'll always let you know about important changes, but you pick
                what else you want to hear about.
              </p>

              <div className="mt-10 space-y-5"></div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post Job
                </button>
              </div>

              {/* <Button className="text-sm font-semibold leading-6 mt-10 gap-2 bg-fav-red">
                <LogOut />
                Sign out
              </Button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
