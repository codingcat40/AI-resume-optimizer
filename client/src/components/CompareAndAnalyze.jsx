import React from "react";

const CompareAndAnalyze = ({ resumeText, jobDescription }) => {

    const CompareAnalyze = () =>  {
            alert(`${jobDescription}`)
    }


  return (
    <div className="rounded-md flex gap-5 mt-2 py-5">
      <button onClick={CompareAnalyze} className=" hover:bg-blue-600 rounded-lg bg-blue-500 text-white py-2 px-5 capitalize font-semibold">
        Compare and Analyze
      </button>
      <button className="hover:bg-blue-600 rounded-lg bg-blue-500 text-white py-2 px-5 capitalize font-semibold">
        Regenerate AI resume
      </button>
    </div>
  );
};

export default CompareAndAnalyze;
