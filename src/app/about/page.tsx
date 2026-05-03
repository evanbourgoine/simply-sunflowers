export default function AboutPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* Hero */}
      <div className="relative bg-wheat overflow-hidden py-28 px-6 md:px-16 text-center">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-citrus/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber/20 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-4">
            Our Story
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-olive leading-tight">
            Rooted in
            <br />
            <span className="text-amber italic">sunshine.</span>
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-wheat overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            alt="Brand story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-amber">
            Est. 2025
          </p>
          <h2 className="font-display text-4xl text-olive leading-snug">
            Born from long summers and open fields.
          </h2>
          <p className="font-body text-olive/70 leading-relaxed">
            Simply Sunflowers started with a simple belief — that clothing
            should feel as good as a warm afternoon. We design pieces that move
            with you, made from materials that are kind to the earth and kinder
            to your skin.
          </p>
          <p className="font-body text-olive/70 leading-relaxed">
            Every collection is inspired by the natural world: the golden hour
            light, the texture of wheat fields, the quiet confidence of a
            sunflower turning toward the sun.
          </p>
          <div className="w-12 h-px bg-amber" />
          <p className="font-display text-2xl text-olive italic">
            "Dress for the life you want to live."
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-wheat py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-2">
              What we stand for
            </p>
            <h2 className="font-display text-5xl text-olive">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✦",
                title: "Sustainably Made",
                body: "We work with ethical manufacturers and use natural, low-impact fabrics wherever possible.",
              },
              {
                icon: "◎",
                title: "Timeless Design",
                body: "No fast fashion. We create pieces meant to last season after season, year after year.",
              },
              {
                icon: "◈",
                title: "Community First",
                body: "Our community of sun-lovers shapes everything we do — from fit feedback to new colorways.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-linen p-8 flex flex-col gap-4"
              >
                <span className="text-citrus text-3xl">{value.icon}</span>
                <h3 className="font-display text-2xl text-olive">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-olive/70 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6 md:px-16 text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <h2 className="font-display text-5xl text-olive">Ready to bloom?</h2>
          <p className="font-body text-olive/60 leading-relaxed">
            Explore the latest collection and find your summer staples.
          </p>
          <a
            href="/shop"
            className="self-center bg-olive text-linen font-body text-sm tracking-widest uppercase px-10 py-4 hover:bg-amber transition-colors duration-300"
          >
            Shop the Collection
          </a>
        </div>
      </div>
    </div>
  );
}
