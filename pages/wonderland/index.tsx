// pages/wonderland/index.tsx
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Card from "../../components/Card";

const wonderlandList = [
  { title: "星辰插畫集", author: "Sora", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca" },
  { title: "幻想世界之門", author: "Mio", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "AI神話重生", author: "Yuki", image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368" },
];

export default function WonderLand() {
  return (
    <Layout>
      <h1 style={{ color: "#d4af37", fontSize: "2.2rem", margin: "30px 0 18px 0" }}>WonderLand 星系</h1>
      <Section title="插畫 & 漫畫">
        {wonderlandList.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Section>
    </Layout>
  );
}

