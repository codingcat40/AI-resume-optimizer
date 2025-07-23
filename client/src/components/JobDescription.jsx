import React, { useState } from "react";

const JobDescription = ({ onExtract }) => {
  const [jobDescription, setJobDescription] = useState("");

  const onChangeHandler = async (e) => {
    setJobDescription(e.target.value);
    onExtract(jobDescription);
  };

  return (
    <div className="bg-orange-100 py-2 flex flex-col gap-2">
      <label htmlFor="job" className="font-semibold text-xl mx-auto">
        Job Description
      </label>
      <textarea
        onChange={onChangeHandler}
        value={jobDescription}
        rows={9}
        className="outline-black border-0 rounded-sm py-2 px-5 text-lg"
        id="job"
        placeholder="Enter Job Description..."
      >
        Job Description Input
      </textarea>
    </div>
  );
};

export default JobDescription;
