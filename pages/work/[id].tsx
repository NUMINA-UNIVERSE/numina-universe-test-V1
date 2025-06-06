// pages/work/[id].tsx
import Layout from "../../components/Layout";

export default function WorkDetail() {
  // 這裡可串接網址 ID 動態帶入假資料
  return (
    <Layout>
      <div style={{ maxWidth: 700, margin: "50px auto", padding: 36, background: "#1E293B", borderRadius: 20, color: "#fff" }}>
        <h1 style={{ color: "#d4af37", fontSize: "2rem", marginBottom: 18 }}>宇宙的知識金庫</h1>
        <p style={{ fontSize: "1.2rem", color: "#e5e7eb", marginBottom: 18 }}>
          在 NUMINA UNIVERSE，你可以集結你的圖文創作、電子書與插畫，打造個人專屬的知識星系。
        </p>
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" alt="作品圖" style={{ width: "100%", borderRadius: 18, marginBottom: 18 }} />
        <div style={{ color: "#d4af37", marginBottom: 8 }}>作者：男神</div>
        <div style={{ color: "#fff", fontSize: 18 }}>#AI #知識共享 #電子書</div>
        <hr style={{ margin: "28px 0", borderColor: "#d4af37" }} />
        <p>這是作品詳情區，你可在這裡展示圖文、內嵌插畫或電子書連結，還能提供作品購買、訂閱、留言互動等功能。</p>
      </div>
    </Layout>
  );
}

