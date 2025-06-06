// pages/checkout/index.tsx
import Layout from "../../components/Layout";

export default function Checkout() {
  return (
    <Layout>
      <div style={{ maxWidth: 500, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem", marginBottom: 18 }}>購買結帳</h1>
        <div style={{ marginBottom: 22, color: "#fff" }}>
          <div>商品名稱：VIP訂閱</div>
          <div>金額：NT$199</div>
        </div>
        <button style={{
          width: "100%", padding: "14px", background: "#d4af37", color: "#1E293B",
          border: "none", borderRadius: 12, fontWeight: 700, fontSize: "1.12rem", cursor: "pointer"
        }}>確認付款</button>
      </div>
    </Layout>
  );
}

