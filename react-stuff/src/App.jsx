import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents((currentEvents) => [...currentEvents, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage events={events} onAddEvent={handleAddEvent} />
          }
        />

        <Route path="/events" element={<EventsPage events={events} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;