// components/Section.tsx
import React from "react";

const Section = ({ title, children }) => (
  <section style={{ margin: "40px 0" }}>
    <h2 style={{
      color: "#d4af37",
      fontSize: "1.6rem",
      fontWeight: "bold",
      letterSpacing: 2,
      marginBottom: 24
    }}>{title}</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {children}
    </div>
  </section>
);

export default Section;

