// pages/review/index.tsx
import Layout from "../../components/Layout";

const reviews = [
  { user: "Jessie", text: "超棒的知識星球，內容豐富，介面美到哭！" },
  { user: "Akira", text: "終於找到喜歡的創作社群，推薦所有創作者！" },
];

export default function Review() {
  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem", marginBottom: 18 }}>平台評價</h1>
        {reviews.map((r, i) => (
          <div key={i} style={{ background: "#111827", borderRadius: 10, padding: 18, margin: "18px 0" }}>
            <div style={{ color: "#d4af37", fontWeight: "bold" }}>{r.user}</div>
            <div style={{ color: "#fff" }}>{r.text}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

