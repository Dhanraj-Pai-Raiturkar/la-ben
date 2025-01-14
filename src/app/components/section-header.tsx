import React from "react";

export type SectionHeaderProps = {
  title: string;
  titleColor?: string;
  descriptionColor?: string;
  description?: string;
  customStyles?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  titleColor = "text-slate-700",
  descriptionColor = "text-slate-600",
  customStyles,
}) => {
  return (
    <div className={`mb-2 flex flex-col ${customStyles}`}>
      <h1 className={`text-2xl md:text-3xl font-bold text-left ${titleColor}`}>
        {title}
      </h1>
      {description && (
        <p className={`text-base md:text-lg text-left ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
