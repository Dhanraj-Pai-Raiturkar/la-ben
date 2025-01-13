import React from "react";

export type SectionLayoutProps = { children: React.ReactNode };

const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return <section className="lg:mx-28 md:mx-6 mx-2">{children}</section>;
};

export default SectionLayout;
