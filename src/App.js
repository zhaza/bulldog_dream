// import { Link, animateScroll as scroll } from "react-scroll";
import './App.scss';
import Home from './components/Home/Home'
import Nav from './components/Mentee/Nav/Nav'
import Login from './components/Mentee/Login/Login'
import Info from './components/Mentee/Info/Info';
import React, { useRef } from 'react'
import useScrollSnap from 'react-use-scroll-snap';

function App() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <div className="App">
        <section ref={scrollRef}>
          <Home />
          <Nav />
          <Login />
          <Info />
        </section>
    </div>
  );
}

export default App;
