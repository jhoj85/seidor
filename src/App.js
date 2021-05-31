import './App.css';
import About from './component/About';
import Campus from './component/Campus';
import Admissions from './component/Admissions';
import Programs from './component/Programs';
import Student from './component/Student';
import Alumnis from './component/Alumnis';
import News from './component/News';
import Menu from './component/Menu';
import { BrowserRouter as Router,
  Switch, Route } from "react-router-dom";

  export default function App() {
    return (
      <Router>
        <div>
          <Menu/>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About select="About"/>
            </Route>
            <Router path="/programs">
              <Programs select="Programs"/>
              </Router>
            <Route path="/campus">
              <Campus select="Campus"/>
            </Route>
            <Router path="/student">
              <Student/>
            </Router>
            <Router path="/admissions">
              <Admissions/>
            </Router>
            <Router path="/news">
              <News select="News & events"/>
            </Router>
            <Route path="/alumni"> 
            <Alumnis/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
