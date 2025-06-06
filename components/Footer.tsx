// components/Footer.tsx
import React from "react";

const Footer = () => (
  <footer style={{
    textAlign: "center",
    padding: "24px 0",
    background: "#111827",
    color: "#d4af37"
  }}>
    © {new Date().getFullYear()} NUMINA UNIVERSE 創辦人：男神
  </footer>
);

export default Footer;

