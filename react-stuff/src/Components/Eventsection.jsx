const events = [
  {
    category: "Workshops",
    title: "Design Thinking Sprint",
    detail: "A hands-on session to turn bold ideas into practical solutions with coaching and feedback.",
    time: "12 Sep • 10:00 AM"
  },
  {
    category: "Meetups",
    title: "Student Startup Circle",
    detail: "Meet founders, creators, and mentors building ideas beyond the classroom and into the real world.",
    time: "18 Sep • 6:30 PM"
  },
  {
    category: "Campus Life",
    title: "Open Mic Evening",
    detail: "An evening of music, storytelling, and creative energy designed for students to connect and perform.",
    time: "24 Sep • 7:00 PM"
  }
];

function EventSection() {
  return (
    <section className="events-section" id="about">
      <p className="section-label">Featured experiences</p>
      <h2>What students can look forward to</h2>

      <div className="event-grid">
        {events.map((event) => (
          <article className="event-card" key={event.title}>
            <p className="event-category">{event.category}</p>
            <h3>{event.title}</h3>
            <p>{event.detail}</p>
            <p>
              <strong>{event.time}</strong>
            </p>
            <button type="button">Learn more</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EventSection;
