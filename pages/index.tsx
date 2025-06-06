// pages/index.tsx
import Layout from "../components/Layout";
import Section from "../components/Section";
import Card from "../components/Card";

const blogebookData = [
  {
    title: "AI時代的創作魔法",
    author: "男神",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "數位心靈地圖",
    author: "Luna",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  },
];

const wonderlandData = [
  {
    title: "月光守護者",
    author: "Yuki",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  },
  {
    title: "異界精靈",
    author: "Sora",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a37c6",
  },
];

export default function Home() {
  return (
    <Layout>
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <h1 style={{
          color: "#d4af37",
          fontSize: "3rem",
          marginBottom: 12,
          letterSpacing: 2,
        }}>NUMINA UNIVERSE</h1>
        <p style={{ color: "#e5e7eb", fontSize: "1.2rem", marginBottom: 24 }}>
          AI 時代的智慧原鄉，啟動你的創作星系
        </p>
        <div style={{ margin: "24px 0" }}>
          <a href="/blogebook" style={{ margin: 8, color: "#fff", background: "#d4af37", padding: "12px 28px", borderRadius: 18, fontWeight: 600, textDecoration: "none" }}>進入 BlogeBook 星系</a>
          <a href="/wonderland" style={{ margin: 8, color: "#0d1a2d", background: "#fff", padding: "12px 28px", borderRadius: 18, fontWeight: 600, textDecoration: "none", border: "2px solid #d4af37" }}>進入 WonderLand 星系</a>
        </div>
      </div>
      <Section title="🔥 BlogeBook 熱門作品">
        {blogebookData.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Section>
      <Section title="🌟 WonderLand 熱門作品">
        {wonderlandData.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Section>
    </Layout>
  );
}

