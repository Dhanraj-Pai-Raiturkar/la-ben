import React from "react";

export type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-left text-slate-700">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-lg text-left text-slate-600 mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
