import React from "react";
import "../layouts/normalize.css";
import "../layouts/App.css";
import "../layouts/media.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Information from "./Information";
import Footer from "./Footer";

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
