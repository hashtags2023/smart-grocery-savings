import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function Dashboard({ user }) {
  const [items, setItems] = useState([]);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchData();
  }, [user]);

  async function fetchData() {
    try {
      const [itemsRes, storesRes] = await Promise.all([
        supabase.from("items").select("*").order("category"),
        supabase.from("stores").select("*").order("name"),
      ]);
      setItems(itemsRes.data || []);
      setStores(storesRes.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="status">Loading your dashboard...</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>
          Logged in as <strong>{user?.email}</strong>
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Stores ({stores.length})</h2>
          <ul className="tag-list">
            {stores.map((store) => (
              <li key={store.id} className="tag">
                {store.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Grocery Items ({items.length})</h2>
          <table className="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
