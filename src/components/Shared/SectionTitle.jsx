"use client";

import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
