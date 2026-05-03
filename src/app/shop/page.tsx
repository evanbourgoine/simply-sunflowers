"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "All",
  "women's clothing": "Women",
  "men's clothing": "Men",
  jewelery: "Jewelry",
  electronics: "Electronics",
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        const products = Array.isArray(data) ? data : [];
        setProducts(products);
        setFiltered(products);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setFiltered([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory, products]);

  const categories = [
    "all",
    ...Object.keys(CATEGORY_LABELS).filter((k) => k !== "all"),
  ];

  return (
    <div className="bg-linen min-h-screen">
      {/* Page Header */}
      <div className="relative bg-wheat overflow-hidden py-16 px-6 md:px-16 text-center border-b border-wheat">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-citrus/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber/20 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-2">
            Everything in bloom
          </p>
          <h1 className="font-display text-6xl text-olive">The Shop</h1>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="sticky top-0 z-20 bg-linen border-b border-wheat px-6 md:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                shrink-0 font-body text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200
                ${
                  activeCategory === cat
                    ? "bg-olive text-linen border-olive"
                    : "bg-transparent text-olive border-wheat hover:border-olive hover:bg-wheat"
                }
              `}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Count */}
        <p className="font-body text-sm text-olive/50 tracking-widest uppercase mb-10">
          {loading ? "Loading..." : `${filtered.length} Products`}
        </p>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="bg-wheat aspect-[3/4] animate-pulse" />
                <div className="h-3 bg-wheat rounded animate-pulse w-1/3" />
                <div className="h-4 bg-wheat rounded animate-pulse w-3/4" />
                <div className="h-5 bg-wheat rounded animate-pulse w-1/4" />
              </div>
            ))}
          </div>
        )}

        {/* Products */}
        {!loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col gap-3"
              >
                {/* Image */}
                <div className="relative bg-wheat aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-linen text-olive font-body text-xs tracking-widest uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow">
                    View Product
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <p className="font-body text-xs tracking-widest uppercase text-amber">
                    {CATEGORY_LABELS[product.category] ?? product.category}
                  </p>
                  <p className="font-body text-sm text-olive leading-snug line-clamp-2">
                    {product.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-display text-olive text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="text-citrus text-xs">★</span>
                      <span className="font-body text-xs text-olive/50">
                        {product.rating.rate}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <span className="text-6xl text-citrus/40">✦</span>
            <p className="font-display text-3xl text-olive">
              Nothing here yet.
            </p>
            <p className="font-body text-sm text-olive/50">
              Try a different category.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-2 font-body text-xs tracking-widest uppercase text-olive border border-olive px-6 py-3 hover:bg-olive hover:text-linen transition-colors duration-300"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
