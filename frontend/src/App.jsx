import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsRes, storesRes] = await Promise.all([
          supabase.from("items").select("*").order("category"),
          supabase.from("stores").select("*").order("name"),
        ]);

        if (itemsRes.error) throw itemsRes.error;
        if (storesRes.error) throw storesRes.error;

        setItems(itemsRes.data);
        setStores(storesRes.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="status">Loading...</div>;
  if (error) return <div className="status error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Smart Grocery Savings</h1>
        <p>Find the best prices across stores</p>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>Stores ({stores.length})</h2>
          <ul className="tag-list">
            {stores.map((store) => (
              <li key={store.id} className="tag">
                {store.name}
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
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
        </section>
      </main>
    </div>
  );
}

export default App;
