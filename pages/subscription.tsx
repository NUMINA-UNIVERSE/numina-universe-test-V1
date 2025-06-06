// pages/subscription.tsx
import Layout from "../components/Layout";

export default function Subscription() {
  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36, color: "#fff" }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem" }}>升級會員方案</h1>
        <hr style={{ borderColor: "#d4af37", margin: "18px 0" }} />
        <div style={{ margin: "32px 0" }}>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: "#d4af37" }}>免費會員</h3>
            <p>每月 2GB 容量、可瀏覽部分內容</p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: "#fff" }}>VIP會員 <span style={{ color: "#d4af37" }}>NT$199/月</span></h3>
            <p>20GB容量、解鎖全部付費作品、優先客服、專屬頭像徽章</p>
          </div>
          <div>
            <h3 style={{ color: "#fff" }}>超級VIP <span style={{ color: "#d4af37" }}>NT$499/月</span></h3>
            <p>100GB容量、全站置頂、尊榮金色頭像、平台特別推薦</p>
          </div>
        </div>
        <button style={{ padding: "12px 36px", background: "#d4af37", color: "#1E293B", border: "none", borderRadius: 14, fontWeight: 700, fontSize: "1.1rem", cursor: "pointer" }}>
          我要升級
        </button>
      </div>
    </Layout>
  );
}

