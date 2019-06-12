import React from 'react';
import '../layouts/App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Search from './Search'
import Information from './Information'

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Information />
      <Footer />
    </>
  );
}

export default App;
