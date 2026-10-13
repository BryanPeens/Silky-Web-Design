import Contact from "./components/Contact";
import AllInOne from "./components/Services";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Work from './components/Work';

function App() {
  return (
    <div className="site-shell">
      <Navbar/>
      <Hero/>
      <About/> 
      <AllInOne/>
      <Pricing/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
