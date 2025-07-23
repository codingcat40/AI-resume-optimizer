import React, { useState } from "react";
import logo from "../assets/upload-icon.jpg";

const ResumeUploader = ({ onExtract }) => {
  const [resumeName, setResumeName] = useState(null);
  const [showIcon, setShowIcon] = useState(true);

  const onChangeHandler = async (e) => {
    const file = e.target.files[0];
    setResumeName(file.name);
    setShowIcon(false);
    const text = await file.text();
    onExtract(text);
  };
  return (
    <div className="mt-5 bg-blue-50 rounded-md hover:bg-blue-100">
      <label
        htmlFor="resume"
        className="flex rounded items-center px-8 gap-32 text-xl"
      >
        <span className="font-semibold">Upload CV:</span>
        {showIcon ? (
          <img
            className="w-12 h-12 p-1 m-2 rounded bg-white cursor-pointer hover:translate-y-1"
            src={logo}
            alt=""
          />
        ) : (
          <span className="py-3 text-sm text-gray-500 font-semibold">{resumeName}</span>
        )}
      </label>

      <input
        onChange={onChangeHandler}
        id="resume"
        hidden
        type="file"
        accept=".docx, .pdf, .txt"
      />
    </div>
  );
};

export default ResumeUploader;
