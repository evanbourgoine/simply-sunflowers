import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import UpcomingEvents from "@/components/UpcomingEvents";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <UpcomingEvents />
      <InstagramFeed />
    </>
  );
}
