import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

// Client-only product grid (prevents Vercel hydration issues)
const ProductGrid = dynamic(
  () => import("../components/ProductGrid"),
  { ssr: false }
);

// SSR is still used for page shell + SEO
export async function getServerSideProps() {
  return {
    props: {
      totalCount: 3425, // Figma value
    },
  };
}

export default function Home({ totalCount }) {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Client-side fetch (reliable on Vercel)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

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
