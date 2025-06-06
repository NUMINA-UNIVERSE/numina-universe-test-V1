// pages/creator/index.tsx
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const works = [
  { title: "知識星圖", author: "男神", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "宇宙創作誌", author: "男神", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
];

export default function Creator() {
  return (
    <Layout>
      <div style={{ textAlign: "center", margin: "30px 0 20px 0" }}>
        <img src="https://i.imgur.com/UwltxkF.png" alt="男神頭像" style={{ width: 120, height: 120, borderRadius: "50%", border: "3px solid #d4af37", marginBottom: 10 }} />
        <h1 style={{ color: "#d4af37", fontWeight: 700 }}>男神</h1>
        <p style={{ color: "#e5e7eb" }}>NUMINA UNIVERSE 創辦人</p>
        <p style={{ color: "#e5e7eb" }}>專注於知識共享、AI科技、藝術哲學</p>
      </div>
      <h2 style={{ color: "#d4af37", fontSize: "1.3rem", marginTop: 40 }}>我的作品</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {works.map((w, i) => (
          <Card key={i} {...w} />
        ))}
      </div>
    </Layout>
  );
}

