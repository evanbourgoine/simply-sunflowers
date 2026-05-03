import { Event } from "@/data/events";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="group bg-linen border border-wheat hover:border-amber transition-colors duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-wheat">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tag */}
        <div className="absolute top-3 left-3 bg-olive text-linen font-body text-xs tracking-widest uppercase px-3 py-1">
          {event.tag}
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-5 p-5 flex-1">
        {/* Date Block */}
        <div className="flex flex-col items-center justify-start bg-wheat px-3 py-2 min-w-[56px] text-center shrink-0">
          <span className="font-body text-xs tracking-widest uppercase text-amber">
            {event.month}
          </span>
          <span className="font-display text-3xl text-olive leading-none">
            {event.day}
          </span>
          <span className="font-body text-xs text-olive/50 mt-0.5">
            {event.year}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-display text-xl text-olive leading-snug group-hover:text-amber transition-colors duration-300">
            {event.title}
          </h3>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-olive/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"
                />
              </svg>
              <span className="font-body text-xs">{event.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-olive/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0L6.343 16.657a8 8 0 1 1 11.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                />
              </svg>
              <span className="font-body text-xs">
                {event.location} · {event.city}
              </span>
            </div>
          </div>

          <p className="font-body text-xs text-olive/60 leading-relaxed line-clamp-2 mt-1">
            {event.description}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-wheat px-5 py-3">
        <span className="font-body text-xs tracking-widest uppercase text-olive group-hover:text-amber transition-colors duration-300">
          Learn More →
        </span>
      </div>
    </div>
  );
}
