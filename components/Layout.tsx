// components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div style={{ minHeight: "100vh", background: "#0D1A2D", color: "#fff" }}>
    <Header />
    <main style={{ minHeight: "70vh" }}>{children}</main>
    <Footer />
  </div>
);

export default Layout;

