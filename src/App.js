// import { Link, animateScroll as scroll } from "react-scroll";
import './App.scss';
import Home from './components/Home/Home'
import Nav from './components/Mentee/Nav/Nav'
import Login from './components/Mentee/Login/Login'
import React, { useState } from 'react'
import { WindowScroll, PageSnap } from 'react-easy-snap'

function App() {

  const [currentPageState, setCurrentPageState] = useState();

  return (
    <div className="App">
      <WindowScroll height='100vh' width='100vw' scrollDirection='y' timeScrollDisabled='200' mainPage='0'
                  currentPageState={currentPageState} setCurrentPageState={setCurrentPageState}
                  minWidth='960'>
        <PageSnap>
          <Home />
        </PageSnap>
        <Nav />
        <PageSnap>
          <Login />
        </PageSnap>
      </WindowScroll>
    </div>
  );
}

export default App;
