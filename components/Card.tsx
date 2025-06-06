// components/Card.tsx
import React from "react";

const Card = ({ title, author, image, children }) => (
  <div style={{
    background: "#1E293B",
    border: "2px solid #d4af37",
    borderRadius: "1.2rem",
    boxShadow: "0 6px 24px #0005",
    margin: 16,
    padding: 24,
    width: 260,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
    {image && <img src={image} alt={title} style={{ width: 180, height: 120, objectFit: "cover", borderRadius: "1rem", marginBottom: 12 }} />}
    <h3 style={{ color: "#d4af37", fontSize: "1.2rem", margin: "0 0 8px 0" }}>{title}</h3>
    <div style={{ color: "#E5E7EB", fontSize: "1rem", marginBottom: 8 }}>{author}</div>
    {children}
  </div>
);

export default Card;

