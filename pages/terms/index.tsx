// pages/terms/index.tsx
import Layout from "../../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div style={{ maxWidth: 700, margin: "50px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "2rem" }}>服務條款與隱私政策</h1>
        <hr style={{ borderColor: "#d4af37", margin: "18px 0" }} />
        <p>NUMINA UNIVERSE 平台所有創作皆受著作權保護，嚴禁侵權及非法用途。</p>
        <p>使用者須遵守平台規範，尊重他人創作。詳細規定請參考官方公告。</p>
      </div>
    </Layout>
  );
}

