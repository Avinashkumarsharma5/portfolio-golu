import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx"; // ✅ Capitalized import

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> {/* ✅ Capitalized component */}
    </div>
  );
}

export default App;
