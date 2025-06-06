// pages/orders/index.tsx
import Layout from "../../components/Layout";

const orders = [
  { id: "001", item: "VIP訂閱", date: "2025-06-06", amount: 199 },
  { id: "002", item: "創作容量升級", date: "2025-06-05", amount: 100 },
];

export default function Orders() {
  return (
    <Layout>
      <div style={{ maxWidth: 600, margin: "60px auto", background: "#1E293B", borderRadius: 18, padding: 36 }}>
        <h1 style={{ color: "#d4af37", fontSize: "1.8rem", marginBottom: 18 }}>訂單記錄</h1>
        <table style={{ width: "100%", color: "#fff", background: "#111827", borderRadius: 8 }}>
          <thead>
            <tr>
              <th style={{ color: "#d4af37", padding: 8 }}>訂單編號</th>
              <th style={{ color: "#d4af37", padding: 8 }}>項目</th>
              <th style={{ color: "#d4af37", padding: 8 }}>日期</th>
              <th style={{ color: "#d4af37", padding: 8 }}>金額</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td style={{ padding: 8 }}>{order.id}</td>
                <td style={{ padding: 8 }}>{order.item}</td>
                <td style={{ padding: 8 }}>{order.date}</td>
                <td style={{ padding: 8 }}>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

