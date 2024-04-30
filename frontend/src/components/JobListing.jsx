import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot } from "lucide-react";
import EyLogo from "../assets/images/ernst-young-ey-logo.png";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function JobListing({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.job_description;
  if (!showFullDescription) {
    description = description.substring(0, 99) + "...";
  }
  return (
    <Card>
      <CardHeader className="flex items-start">
        {/* <div className=" w-[45px] h-[45px] rounded-sm mr-4">
          <img src={EyLogo} />
        </div> */}
        <div>
          <CardTitle className="text-ey-black font-bold">
            {job.company_name}
          </CardTitle>
          <CardDescription className="text-gray-600 pt-4">
            {job.location}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="font-medium text-lg">{job.title}</h2>
        <p className="text-sm text-gray-500 pt-2">{description}</p>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        {/* <div className="flex items-center pt-3"> */}
        {/* <span className="mr-1">{job.type}</span> */}
        {/* <span className="mr-1">Job Type - undifined</span>
          <Dot className="inline mr-1" />
          <span>{job.salary}</span>
        </div> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href={`/jobs/${job.job_id}`}>
          <Button className="bg-choreo-blue h-8">Learn More</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
