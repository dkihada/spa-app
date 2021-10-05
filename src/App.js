import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './App.css';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { Category } from './Pages/Category';
import { Recipe } from './Pages/Recipe';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Router basename='/spa-react-food'>
        <Header />
        <main className='content-main-page'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/category/:name' component={Category} />
            <Route path='/meal/:id' component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
