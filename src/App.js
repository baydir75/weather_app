import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import Favorites from './components/Favorites'
import Home from './components/Home'

const App = () => {

  return (
      <BrowserRouter>
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Favorites">Favorites</Link></p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Favorites" component={Favorites} />
        </Switch>
        <footer>
          <p>Créé par <a href="https://github.com/baydir75">Baydir</a>/<span>2021</span></p>
        </footer>
      </BrowserRouter>
  )
}

export default App