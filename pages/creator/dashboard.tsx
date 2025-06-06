// pages/creator/dashboard.tsx
import Layout from "../../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div style={{ maxWidth: 700, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 32 }}>
        <h1 style={{ color: "#d4af37", fontSize: "2rem" }}>創作者儀表板</h1>
        <hr style={{ borderColor: "#d4af37", margin: "18px 0" }} />
        <div style={{ margin: "32px 0" }}>
          <div style={{ color: "#d4af37", fontWeight: "bold", fontSize: "1.2rem" }}>本月收益：<span style={{ color: "#fff" }}>NT$2,800</span></div>
          <div style={{ marginTop: 16, color: "#fff" }}>總訂閱人數：120</div>
          <div style={{ marginTop: 16, color: "#fff" }}>本月上傳作品：8</div>
          <div style={{ marginTop: 16, color: "#fff" }}>留言互動：52 則</div>
        </div>
      </div>
    </Layout>
  );
}

