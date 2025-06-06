// pages/creator/settings.tsx
import Layout from "../../components/Layout";

export default function CreatorSettings() {
  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem", marginBottom: 18 }}>創作者設定</h1>
        <form>
          <div style={{ marginBottom: 18 }}>
            <input type="text" placeholder="顯示名稱" style={{
              width: "100%", padding: "12px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <input type="email" placeholder="電子郵件" style={{
              width: "100%", padding: "12px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <div style={{ marginBottom: 18 }}>
            <textarea placeholder="自我介紹" rows={3} style={{
              width: "100%", padding: "12px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <button type="submit" style={{
            width: "100%", padding: "12px", background: "#d4af37", color: "#1E293B",
            border: "none", borderRadius: 10, fontWeight: 700, fontSize: "1.1rem", cursor: "pointer"
          }}>儲存設定</button>
        </form>
      </div>
    </Layout>
  );
}

