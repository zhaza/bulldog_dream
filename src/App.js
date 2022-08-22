import './App.scss';
import Home from './components/Home/Home'
import Nav from './components/Mentee/Nav/Nav'
import Login from './components/Mentee/Login/Login'
import Info from './components/Mentee/Info/Info';
import Docs from './components/Mentee/Docs/Docs';
import Community from './components/Mentee/Community/Community';
import Responsibilities from './components/Mentee/Responsibilities/Responsibilities';
import Interlude from './components/Mentee/Interlude/Interlude';
import Essay1 from './components/Mentee/Essay1/Essay1';
import Essay2 from './components/Mentee/Essay2/Essay2';
import Essay3 from './components/Mentee/Essay3/Essay3';

function App() {

  return (
    <div className="App">
        <Home />
        <Nav />
        <Login />
        <Info />
        <Docs />
        <Community />
        <Responsibilities />
        <Interlude />
        <Essay1 />
        <Essay2 />
        <Essay3 />
    </div>
  );
}

export default App;
