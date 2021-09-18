
import './App.css';
import About from './Components/About';
import Content from './Components/Content/index.js';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Projects' component={Content} />
      <Route exact path='/Contact' component={Contact} />
     </Switch>
     </BrowserRouter>
    </main>
  );
}

export default App;
