// pages/faq.tsx
import Layout from "../components/Layout";

export default function FAQ() {
  return (
    <Layout>
      <div style={{ maxWidth: 700, margin: "50px auto", background: "#1E293B", borderRadius: 18, padding: 32 }}>
        <h1 style={{ color: "#d4af37", fontSize: "2rem" }}>常見問答（FAQ）</h1>
        <hr style={{ borderColor: "#d4af37", margin: "18px 0" }} />
        <h3 style={{ color: "#d4af37" }}>Q：如何開始創作？</h3>
        <p>註冊後即可成為創作者，上傳你的第一個 BlogeBook 或插畫！</p>
        <h3 style={{ color: "#d4af37" }}>Q：容量不夠怎麼辦？</h3>
        <p>可在訂閱頁面升級容量，也能參加活動獲得更多空間！</p>
        <h3 style={{ color: "#d4af37" }}>Q：平台收益如何分配？</h3>
        <p>平台抽成 15-25%，2% 用於公益協助弱勢，剩餘皆屬創作者。</p>
      </div>
    </Layout>
  );
}

