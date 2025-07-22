import React from "react";
import logo from "../assets/upload-icon.jpg";

const ResumeUploader = () => {
  return (
    <div className="mt-5 bg-blue-50 rounded-md hover:bg-blue-100">
      <label className="flex rounded items-center px-8 gap-32 text-xl">
        <span className="font-semibold">Upload CV:</span>
        <img
          className="w-12 h-12 p-1 m-2 rounded bg-white cursor-pointer hover:translate-y-1"
          src={logo}
          alt=""
        />
      </label>
    </div>
  );
};

export default ResumeUploader;
