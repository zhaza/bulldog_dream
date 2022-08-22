import './App.scss';
import Home from './components/Home/Home'
import Nav from './components/Mentee/Nav/Nav'
import Login from './components/Mentee/Login/Login'
import Info from './components/Mentee/Info/Info';
import Docs from './components/Mentee/Docs/Docs';

function App() {

  return (
    <div className="App">
        <Home />
        <Nav />
        <Login />
        <Info />
        <Docs />
    </div>
  );
}

export default App;
