import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
