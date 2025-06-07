// components/Section.tsx
import React, { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section style={{ margin: "40px 0" }}>
    <h2 style={{
      color: "#d4af37",
      fontSize: "1.35rem",
      borderLeft: "6px solid #d4af37",
      paddingLeft: 14,
      marginBottom: 18,
    }}>
      {title}
    </h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {children}
    </div>
  </section>
);

export default Section;
