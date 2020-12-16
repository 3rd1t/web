import React from "react";

/* eslint-disable-next-line */
export interface SectionProps {
  bg?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = (props: SectionProps) => {
  const { bg, className, id, children } = props;

  return (
    <section className={bg} id={id}>
      <div className={className}>
        <div className="container px-4 py-10 mx-auto md:py-12 lg:py-16 xl:py-20 xl:px-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
