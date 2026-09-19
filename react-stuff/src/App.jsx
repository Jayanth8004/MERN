import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import EventForm from "./Components/EventForm";
import EventSection from "./Components/EventSection";
import Footer from "./Components/footer";
import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <main id="home">
        <Hero
          title="Discover What Is Happening on Campus"
          description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
        />

        <EventForm onAddEvent={handleAddEvent} />
        <EventSection events={events} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

