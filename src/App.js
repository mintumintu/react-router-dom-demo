// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>
    <Route>
      <Navbar />
    </Route>
  <Switch>
    <Route path='/' exact>
      <Home />
    </Route>
    <Route path='/Home' exact>
      <Home />
    </Route>
    <Route path='/Login' exact>
      <Login />
    </Route>
    <Route path='/Register' exact>
      <Register />
    </Route>
    <Route path='/Aboutus' exact>
      <Aboutus />
    </Route>
  </Switch>
    <Route>
      <Footer />
    </Route>
</BrowserRouter>
  );
}

export default App;
