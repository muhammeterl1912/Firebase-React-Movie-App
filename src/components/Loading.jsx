import React, { memo } from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-52">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-600"
        role="status"
        aria-hidden="true"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default memo(Loading);
