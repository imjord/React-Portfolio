
import './App.css';
import About from './Components/About';
import Content from './Components/Content/index.js';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Nav} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Content' component={Content} />
     </Switch>
     </BrowserRouter>
    </main>
  );
}

export default App;
