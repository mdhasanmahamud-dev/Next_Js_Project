import React from "react";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8">
      <h1 className="text-5xl font-bold text-white mb-2">{title}</h1>
      <p className="text-gray-300 text-lg">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
