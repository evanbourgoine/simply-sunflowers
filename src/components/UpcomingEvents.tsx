import Link from "next/link";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import FadeIn from "@/components/FadeIn";

export default function UpcomingEvents() {
  const upcoming = events.slice(0, 5);

  return (
    <section className="bg-wheat py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-2">
              Find us in the wild
            </p>
            <h2 className="font-display text-5xl text-olive">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="font-body text-sm tracking-widest uppercase text-olive underline underline-offset-4 hover:text-amber transition-colors self-start md:self-auto"
          >
            Show All →
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.1} direction="up">
              <EventCard event={event} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
