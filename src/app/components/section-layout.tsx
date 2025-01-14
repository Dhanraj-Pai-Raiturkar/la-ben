import React from "react";

export type SectionLayoutProps = {
  children: React.ReactNode;
  customStyles?: string;
};

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  customStyles,
}) => {
  return (
    <section className={`xl:mx-44 lg:mx-28 md:mx-6 mx-2 mb-16 ${customStyles}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
