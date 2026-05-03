import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive text-linen">
      {/* Newsletter Bar */}
      <div className="border-b border-linen/10 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl italic text-citrus">
              Stay in bloom.
            </p>
            <p className="font-body text-sm text-linen/60 mt-1">
              New arrivals, seasonal edits, and sun-soaked inspiration.
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-linen/10 border border-linen/20 text-linen placeholder:text-linen/40 font-body text-sm px-5 py-3 flex-1 md:w-72 outline-none focus:border-citrus transition-colors"
            />
            <button className="bg-citrus text-olive font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-amber transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="font-display text-2xl leading-none">
            Simply
            <br />
            <span className="text-citrus">Sunflowers</span>
          </p>
          <p className="font-body text-sm text-linen/60 leading-relaxed max-w-xs">
            Sun-soaked styles made for warm days, golden hours, and everything
            in between.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-2">
            {["Instagram", "Pinterest", "TikTok"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-body text-xs tracking-widest uppercase text-linen/40 hover:text-citrus transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-citrus">
            Shop
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "New Arrivals",
              "All Products",
              "Tops",
              "Bottoms",
              "Accessories",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/shop"
                  className="font-body text-sm text-linen/60 hover:text-linen transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-citrus">
            Info
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "About Us",
              "Sustainability",
              "Sizing Guide",
              "Careers",
              "Press",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/about"
                  className="font-body text-sm text-linen/60 hover:text-linen transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-citrus">
            Help
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Contact Us",
              "Shipping & Returns",
              "FAQ",
              "Track Order",
              "Gift Cards",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-body text-sm text-linen/60 hover:text-linen transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-linen/10 px-6 md:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-linen/30">
            © 2025 Simply Sunflowers. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="font-body text-xs text-linen/30 hover:text-linen/60 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
