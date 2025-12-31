export default async function handler(req, res) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return res.status(500).json([]);
    }

    const products = await response.json();
    return res.status(200).json(products);
  } catch (error) {
    console.error("API ROUTE ERROR:", error.message);
    return res.status(500).json([]);
  }
}
