import React from "react";

export type HeroLayoutProps = {
  children: React.ReactNode;
  background: string;
  height?: string;
};

const HeroLayout: React.FC<HeroLayoutProps> = ({
  children,
  background,
  height = "min-h-screen",
}) => {
  return (
    <section
      className={`${background} bg-no-repeat bg-cover bg-bottom w-full border-0 p-0 m-0 ${height} mb-16`}
    >
      {children}
    </section>
  );
};

export default HeroLayout;
