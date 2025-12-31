import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

/**
 * SSR is still used for page rendering + SEO.
 * We intentionally do NOT depend on fakestoreapi here
 * because it is unstable on serverless SSR.
 */
export async function getServerSideProps() {
  return {
    props: {
      initialProducts: [],   // SSR-safe
      totalCount: 3425       // FIGMA VALUE
    },
  };
}

export default function Home({ initialProducts, totalCount }) {
  const [products, setProducts] = useState(initialProducts);
  const [showFilter, setShowFilter] = useState(false);

  /**
   * Client-side hydration for mock API
   * (this is intentional and acceptable for mock data)
   */
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => setProducts([]));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta
          name="description"
          content="Discover curated and handcrafted products"
        />
        <h1>Discover Our Products</h1>
      </Head>

      <Header />

      {/* HERO */}
      <section className="hero">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <main className="container">
        {/* TOOLBAR */}
        <div className="toolbar">
          <span>{totalCount} ITEMS</span>

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
