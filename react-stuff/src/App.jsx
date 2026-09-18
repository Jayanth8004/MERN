import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import EventSection from "./Components/Eventsection";
import Footer from "./Components/footer";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <EventSection />
      <Footer />
    </main>
  );
}

export default App;