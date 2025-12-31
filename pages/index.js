import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch("https://fakestoreapi.com/products", {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const products = await res.json();

    return {
      props: { products },
    };
  } catch (error) {
    console.error("SSR FETCH ERROR:", error.message);

    // fallback mock data (SSR-safe)
    return {
      props: {
        products: [
          {
            id: 1,
            title: "Sample Product",
            price: 99,
            image: "https://via.placeholder.com/300",
          },
        ],
      },
    };
  }
}


export default function Home({ products = [] }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Discover curated and handcrafted products"
        />
      </Head>

      <Header />

      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <main className="container">
        <div className="toolbar">
          <span>{products.length} ITEMS</span>

          <button
            className="filter-toggle"
            onClick={() => setShowFilter((v) => !v)}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>

          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>

        <div className={`content ${showFilter ? "with-filter" : "no-filter"}`}>
          {showFilter && <Filters />}
          <ProductGrid products={products} />
        </div>
      </main>

      <Footer />
    </>
  );
}
