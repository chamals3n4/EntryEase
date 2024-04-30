import { AwardIcon, Dot, Heading2, Turtle } from "lucide-react";
import EyLogo from "../assets/images/ernst-young-ey-logo.png";
import { Forward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useLoaderData, useNavigate, Link } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <div className=" py-18 sm:py-[65px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-start">
          {/* <div className=" w-[75px] h-[75px] rounded-sm mr-4">
            <img src={EyLogo} />
          </div> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-ey-black sm:text-4xl">
            {job.title}
          </p>
          <div className="flex gap-4">
            <h2 className="text-lg pt-4 font-semibold leading-7 text-indigo-600">
              {job.company_name}
            </h2>
            <h2 className="text-md pt-4 font-bold text-choreo-blue leading-7">
              {job.company_contact_number}
            </h2>
            <h2 className="text-md pt-4 font-bold text-choreo-blue leading-7">
              {job.company_email}
            </h2>
          </div>

          {/* <h2 className="pt-3">
            Job Type <Dot className="inline" /> {job.salary} / USD
          </h2> */}

          <div className="py-6">
            <h1 className="font-bold text-ey-black text-lg">
              About the Company
            </h1>
            <p>{job.company_description}</p>

            <h1 className="font-bold text-ey-black text-lg pt-4">
              Responsibilities
            </h1>
            <p>{job.job_description}</p>
          </div>
          <div className="mt-10">
            <Link
              to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
              target="_blank"
            >
              <Button
                type="submit"
                className="text-sm w-full font-semibold leading-6 gap-4 bg-choreo-blue"
              >
                Apply Now
                <Forward />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
