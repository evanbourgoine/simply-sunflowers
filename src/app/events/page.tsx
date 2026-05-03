import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* Header */}
      <div className="relative bg-wheat overflow-hidden py-20 px-6 md:px-16 text-center border-b border-wheat">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-citrus/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber/20 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-3">
            Come say hello
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-olive leading-tight">
            All Events
          </h1>
          <p className="font-body text-olive/60 mt-4 max-w-md mx-auto leading-relaxed">
            We pop up across Maine all year long. Come shop in person, meet the
            team, and find your next favourite piece.
          </p>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-20">
        {/* Count */}
        <p className="font-body text-xs tracking-widest uppercase text-olive/40 mb-10">
          {events.length} Events This Year
        </p>

        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <div key={event.id} className="flex gap-6 items-stretch">
              {/* Timeline spine */}
              <div className="hidden md:flex flex-col items-center gap-0 shrink-0">
                <div className="w-3 h-3 rounded-full bg-amber mt-6 shrink-0" />
                {index < events.length - 1 && (
                  <div className="w-px flex-1 bg-wheat mt-1" />
                )}
              </div>

              {/* Card — full width */}
              <div className="flex-1">
                <EventCard event={event} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
