import './App.css';

import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Service from './components/services/Services'
import Navbar from './components/navbar/Navbar'
import Testimonial from './components/testimonial/Testimonial';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Service/>
      <Testimonial/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
