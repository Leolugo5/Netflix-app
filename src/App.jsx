import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/Home/HomePage'
import Login from './pages/Login/Login'
import Play from './pages/Play/Play'
import Register from './pages/Register/Register'



function App() {
  return (

    <Router>
      <Switch >
        <Route path="/" exact component={Register} />
        <Route path="/home-page" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/waching" exact component={Play} />
      </Switch>
    </Router>
  )
}

export default App
