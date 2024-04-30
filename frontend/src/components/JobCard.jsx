import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const SERVICE_URL = window.configs.apiUrl;

export default function JobCard({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? `${SERVICE_URL}/jobs?_limit=3`
        : `${SERVICE_URL}/jobs`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log("Fetched Data", data);
        if (isHome) {
          setJobs(data.jobs.slice(0, 3)); // Limit to the first 3 jobs
        } else {
          setJobs(data.jobs);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // console.log(jobs);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
          {jobs.map((job) => (
            <JobListing key={job.job_id} job={job} />
          ))}
        </div>
      )}
    </>
  );
}
