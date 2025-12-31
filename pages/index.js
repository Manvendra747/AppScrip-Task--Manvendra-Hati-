import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`API failed with status ${res.status}`);
    }

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("SSR FETCH ERROR:", error.message);

    // Never crash SSR
    return {
      props: {
        products: [],
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

      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      {/* MAIN */}
      <main className="container">
        {/* TOOLBAR */}
        <div className="toolbar">
          <span>{products.length} ITEMS</span>

          <button
            className="filter-toggle"
            onClick={() => setShowFilter((prev) => !prev)}
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

        {/* CONTENT */}
        <div className={`content ${showFilter ? "with-filter" : "no-filter"}`}>
          {showFilter && <Filters />}
          <ProductGrid products={products} />
        </div>
      </main>

      <Footer />
    </>
  );
}
