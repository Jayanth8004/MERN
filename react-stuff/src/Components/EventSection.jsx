// import EventCard from "./EventCard";
// import { initialEvents } from "../data/events";

// function EventSection() {
//   return (
//     <section className="events-section" id="about">
//       <p className="section-label">Featured experiences</p>
//       <h2>What students can look forward to</h2>

//       <div className="event-grid">
//         {initialEvents.map((event) => (
//           <EventCard key={event.id} {...event} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default EventSection;

import EventCard from "./EventCard";
import { initialEvents } from "../data/events";

function EventSection({ events = [] }) {
  return (
    <section id="events" className="events-section">
      <div className="section-heading">
        <div>
          <p className="section-label">Upcoming Activities</p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>{events.length} events available</p>
      </div>

      {events.length === 0 ? (
        <p>No events are available right now.</p>
      ) : (
        <div className="event-grid">
          {events.map(function (event) {
            return (
              <EventCard
                key={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default EventSection;