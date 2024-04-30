const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Job = require("../service/models/Jobs.js");
const sequelize = require("./config/database.js");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//@desc Delete contact
//@route GET /jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.findAll();

    res.send({ jobs });
  } catch (error) {
    console.error("error fetching jobs:", error);
    res.status(500).send("internal server error");
  }
});

//@desc Route to find jobs by id
//@route GET /jobs/:id
app.get("/jobs/:id", async (req, res) => {
  try {
    // extract job ID from request parameters
    const jobId = req.params.id;

    const job = await Job.findByPk(jobId);

    if (!job) {
      res.status(404).send("job not find");
      return;
    }

    res.json(job);
  } catch (error) {
    console.error("error fetching job by ID:", error);
    res.status(500).send("internal server error");
  }
});

//@desc Route to create a new job
//@route POST /add-job
app.post("/add-job", async (req, res) => {
  try {
    // extract job data from request body
    const {
      title,
      location,
      job_description,
      salary,
      company_name,
      company_description,
      company_email,
      company_contact_number,
    } = req.body;

    // create a new job entry in the db
    const newJob = await Job.create({
      title,
      location,
      job_description,
      salary,
      company_name,
      company_description,
      company_email,
      company_contact_number,
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error("error creating job:", error);
    res.status(500).send("internal server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server listen on port ${PORT}`));
