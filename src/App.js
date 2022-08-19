// import { Link, animateScroll as scroll } from "react-scroll";
import Home from './components/Home/Home'
import Mentee from './components/Mentee/Nav'
import Login from './components/Mentee/Login/Login'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Home />
      <Mentee />
      <Login />
    </div>
  );
}

export default App;
