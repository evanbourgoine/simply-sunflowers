"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
}

const CATEGORY_LABELS: Record<string, string> = {
  "women's clothing": "Women",
  "men's clothing": "Men",
  jewelery: "Jewelry",
  electronics: "Electronics",
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-linen py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber font-body mb-2">
              Handpicked for you
            </p>
            <h2 className="font-display text-5xl text-olive">New Arrivals</h2>
          </div>
          <Link
            href="/shop"
            className="font-body text-sm tracking-widest uppercase text-olive underline underline-offset-4 hover:text-amber transition-colors"
          >
            View All →
          </Link>
        </FadeIn>

        {/* Skeleton loading */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="bg-wheat aspect-[3/4] animate-pulse" />
                <div className="h-3 bg-wheat rounded animate-pulse w-1/3" />
                <div className="h-4 bg-wheat rounded animate-pulse w-3/4" />
                <div className="h-5 bg-wheat rounded animate-pulse w-1/4" />
              </div>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {!loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} direction="up">
                <Link
                  href={`/product/${product.id}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="relative bg-wheat aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-colors duration-300" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-linen text-olive font-body text-xs tracking-widest uppercase px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow">
                      Quick Shop
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-xs tracking-widest uppercase text-amber">
                      {CATEGORY_LABELS[product.category] ?? product.category}
                    </p>
                    <p className="font-body text-sm text-olive leading-snug line-clamp-2">
                      {product.title}
                    </p>
                    <p className="font-display text-olive text-lg">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
