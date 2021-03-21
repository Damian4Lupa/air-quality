import React from "react";
import "../layouts/App.css";
import "../layouts/media.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";
import Information from "./Information";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Search />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
