import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
