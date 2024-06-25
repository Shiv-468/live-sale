import './App.css';
import React,{useEffect} from "react";
import About from './components/About';
import Audited from './components/Audited';
import Contract from './components/Contract';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Questions from './components/Questions';
import Socials from './components/Socials';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init(
      {
        once:true,
      }
    );
  }, [])
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <About/>
      <Contract/>
      <Tokenomics/>
      <Audited/>
      <Roadmap/>
      <Questions/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;
