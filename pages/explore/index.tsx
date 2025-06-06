// pages/explore/index.tsx
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Section from "../../components/Section";

const exploreData = [
  { title: "星際旅人", author: "Hana", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "知識宇宙", author: "Ryo", image: "https://images.unsplash.com/photo-1465101056558-4c8b0c18be59" },
  { title: "創作星光", author: "Sara", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
];

export default function Explore() {
  return (
    <Layout>
      <h1 style={{ color: "#d4af37", fontSize: "2rem", margin: "30px 0 18px" }}>探索更多</h1>
      <Section title="精選創作">
        {exploreData.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Section>
    </Layout>
  );
}

