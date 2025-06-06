// pages/blogebook/index.tsx
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Card from "../../components/Card";

const blogebookList = [
  { title: "未來知識宇宙", author: "男神", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" },
  { title: "行動創作新境界", author: "Aki", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { title: "共創公平未來", author: "Luna", image: "https://images.unsplash.com/photo-1465101056558-4c8b0c18be59" },
];

export default function BlogeBook() {
  return (
    <Layout>
      <h1 style={{ color: "#d4af37", fontSize: "2.2rem", margin: "30px 0 18px 0" }}>BlogeBook 星系</h1>
      <Section title="全部作品">
        {blogebookList.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </Section>
    </Layout>
  );
}

