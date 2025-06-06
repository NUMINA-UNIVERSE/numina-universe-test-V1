// pages/login.tsx
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <div style={{ maxWidth: 380, margin: "100px auto", background: "#1E293B", borderRadius: 14, padding: 36 }}>
        <h1 style={{ color: "#d4af37", textAlign: "center", marginBottom: 32 }}>會員登入</h1>
        <form>
          <div style={{ marginBottom: 18 }}>
            <input type="email" placeholder="Email" style={{
              width: "100%", padding: "12px 18px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <input type="password" placeholder="密碼" style={{
              width: "100%", padding: "12px 18px", borderRadius: 8, border: "1px solid #d4af37",
              fontSize: "1.1rem", background: "#111827", color: "#fff"
            }} />
          </div>
          <button type="submit" style={{
            width: "100%", padding: "12px", background: "#d4af37", color: "#1E293B",
            border: "none", borderRadius: 10, fontWeight: 700, fontSize: "1.15rem", cursor: "pointer"
          }}>登入</button>
        </form>
      </div>
    </Layout>
  );
}

