import React from 'react';
import './index.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About' 
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
