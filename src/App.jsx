import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonail from "./components/Testimonail";
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Home />
     <Services />
    <About />
    <Testimonail/>
      <Contact />
      <Footer />
  </div>
  )
}

export default App
