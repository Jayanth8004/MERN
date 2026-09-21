import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  function handleDeleteEvent(eventId) {
    setEvents(function (currentEvents) {
      return currentEvents.filter(function (event) {
        return event.id !== eventId;
      });
    });
  }

  return (
    <div>
      <Navbar />

      <Routes>  
        <Route
          path="/"
          element={
            <HomePage
              events={events}
              onAddEvent={handleAddEvent}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />

        <Route
          path="/events"
          element={
            <EventsPage
              events={events}
              onDeleteEvent={handleDeleteEvent}
            />
          }
        />

        <Route
          path="/events/:eventId"
          element={
            <EventDetailsPage events={events} />
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;