import './App.scss';
import AppBar from './AppBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <AppBar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/explore" component={ExplorePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
