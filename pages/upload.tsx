// pages/upload.tsx
import Layout from "../components/Layout";

export default function Upload() {
  return (
    <Layout>
      <div style={{ maxWidth: 500, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem", marginBottom: 32 }}>創作上傳</h1>
        <form>
          <div style={{ marginBottom: 20 }}>
            <input type="text" placeholder="作品標題" style={{
              width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <textarea placeholder="作品描述" rows={4} style={{
              width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <input type="file" style={{ color: "#d4af37" }} />
          </div>
          <button type="submit" style={{
            width: "100%", padding: "12px", background: "#d4af37", color: "#1E293B",
            border: "none", borderRadius: 10, fontWeight: 700, fontSize: "1.15rem", cursor: "pointer"
          }}>上傳作品</button>
        </form>
      </div>
    </Layout>
  );
}

