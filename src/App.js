import React from 'react';
import './App.css';
import './assets/css/styles.css';

// Import components
import NavigationBar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Internship from './components/Internship';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Academics />
        <Internship />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
