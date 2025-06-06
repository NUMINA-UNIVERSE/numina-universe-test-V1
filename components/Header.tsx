// components/Header.tsx
import React from "react";
import Link from "next/link";

const linkStyle = {
  margin: "0 10px",
  color: "#d4af37",
  fontWeight: 600,
  fontSize: "1.09rem",
  letterSpacing: 1,
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: "8px",
  transition: "background .2s",
};

const Header = () => (
  <header style={{
    padding: "24px 40px",
    background: "linear-gradient(90deg,#0d1a2d,#1c253a 85%,#d4af37 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #d4af37"
  }}>
    <div style={{
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#d4af37",
      letterSpacing: 2,
      display: "flex",
      alignItems: "center"
    }}>
      {/* LOGO 可換成 <img src="你的LOGO網址" alt="NUMINA" style={{height: 38, marginRight: 10}} /> */}
      <span style={{ marginRight: 10 }}>NUMINA</span>
    </div>
    <nav>
      <Link href="/"><span style={linkStyle}>首頁</span></Link>
      <Link href="/blogebook"><span style={linkStyle}>BlogeBook</span></Link>
      <Link href="/wonderland"><span style={linkStyle}>WonderLand</span></Link>
      <Link href="/explore"><span style={linkStyle}>探索</span></Link>
      <Link href="/creator"><span style={linkStyle}>創作者主頁</span></Link>
      <Link href="/creator/dashboard"><span style={linkStyle}>儀表板</span></Link>
      <Link href="/creator/settings"><span style={linkStyle}>設定</span></Link>
      <Link href="/subscription"><span style={linkStyle}>訂閱升級</span></Link>
      <Link href="/orders"><span style={linkStyle}>訂單</span></Link>
      <Link href="/faq"><span style={linkStyle}>FAQ</span></Link>
      <Link href="/login"><span style={linkStyle}>登入</span></Link>
      <Link href="/upload"><span style={linkStyle}>上傳</span></Link>
      <Link href="/terms"><span style={linkStyle}>條款政策</span></Link>
      <Link href="/checkout"><span style={linkStyle}>結帳</span></Link>
      <Link href="/review"><span style={linkStyle}>評價</span></Link>
    </nav>
  </header>
);

export default Header;

