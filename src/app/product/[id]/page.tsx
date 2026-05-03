interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="bg-linen min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-olive/50 mb-12">
          <a href="/" className="hover:text-amber transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/shop" className="hover:text-amber transition-colors">
            Shop
          </a>
          <span>/</span>
          <span className="text-olive line-clamp-1">{product.title}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="bg-wheat aspect-square flex items-center justify-center p-12 sticky top-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amber">
              {product.category}
            </p>

            <h1 className="font-display text-4xl md:text-5xl text-olive leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.round(product.rating.rate)
                        ? "text-citrus"
                        : "text-wheat"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="font-body text-xs text-olive/50">
                {product.rating.rate} · {product.rating.count} reviews
              </span>
            </div>

            {/* Price */}
            <p className="font-display text-4xl text-olive">
              ${product.price.toFixed(2)}
            </p>

            <div className="w-12 h-px bg-amber" />

            {/* Description */}
            <p className="font-body text-olive/70 leading-relaxed text-sm">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="flex flex-col gap-2">
              <p className="font-body text-xs tracking-widest uppercase text-olive">
                Size
              </p>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 border border-wheat font-body text-xs text-olive hover:border-olive hover:bg-wheat transition-colors duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full bg-olive text-linen font-body text-sm tracking-widest uppercase py-4 hover:bg-amber transition-colors duration-300 mt-2">
              Add to Cart
            </button>

            {/* Wishlist */}
            <button className="w-full border border-olive text-olive font-body text-sm tracking-widest uppercase py-4 hover:bg-wheat transition-colors duration-300">
              Save to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
