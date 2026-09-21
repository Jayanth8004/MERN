import { useState } from "react";
import EventCard from "./EventCard";

function EventSection({
  events,
  onDeleteEvent,
}) {
  const [searchText, setSearchText] =
    useState("");

  const filteredEvents = events.filter(function (
    event
  ) {
    return event.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return (
    <section
      id="events"
      className="events-section"
    >
      <div className="section-heading">
        <div>
          <p className="section-label">
            Upcoming Activities
          </p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>
          {filteredEvents.length} events shown
        </p>
      </div>

      <div className="search-filter-bar">
        <input
          type="text"
          value={searchText}
          onChange={function (event) {
            setSearchText(event.target.value);
          }}
          placeholder="Search by event title"
        />
      </div>

      {filteredEvents.length === 0 ? (
        <p className="empty-message">
          No matching events found.
        </p>
      ) : (
        <div className="event-grid">
          {filteredEvents.map(function (event) {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                onDelete={onDeleteEvent}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default EventSection;