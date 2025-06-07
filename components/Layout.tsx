// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// 補上 children 型別定義
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div style={{ minHeight: "100vh", background: "#0D1A2D", color: "#fff" }}>
    <Header />
    <main style={{ minHeight: "70vh" }}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
