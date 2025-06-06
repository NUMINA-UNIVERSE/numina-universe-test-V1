// components/Card.tsx
import React, { ReactNode } from "react";

type CardProps = {
  title: string;
  author: string;
  image: string;
  children?: ReactNode;
};

const Card = ({ title, author, image, children }: CardProps) => (
  <div
    style={{
      background: "#1E293B",
      border: "2px solid #d4af37",
      borderRadius: 16,
      padding: 24,
      margin: 16,
      width: 270,
      color: "#fff",
      display: "inline-block",
      verticalAlign: "top",
      boxShadow: "0 4px 16px rgba(212,175,55,0.08)",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        height: 150,
        objectFit: "cover",
        borderRadius: 12,
        marginBottom: 12,
        border: "1.5px solid #d4af37",
      }}
    />
    <div style={{ color: "#d4af37", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{title}</div>
    <div style={{ color: "#fff", fontSize: 14, marginBottom: 12 }}>作者：{author}</div>
    {children}
  </div>
);

export default Card;
