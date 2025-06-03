import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState<{ id: number; name: string; price: number }[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div>
      <h2>Our Juices</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} – ${p.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
