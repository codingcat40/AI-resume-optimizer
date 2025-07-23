import ResumeUploader from "./components/ResumeUploader";
import JobDescription from "./components/JobDescription";
import CompareAndAnalyze from "./components/CompareAndAnalyze";
import { useState } from "react";

function App() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  console.log(jobDescription);
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-semibold py-20">
        AI Resume Optimizer
      </h2>
      <ResumeUploader onExtract={setResumeText} />
      <JobDescription onExtract={setJobDescription} />
      <CompareAndAnalyze
        resumeText={resumeText}
        jobDescription={jobDescription}
      />
    </div>
  );
}

export default App;
