
import './App.css';
import About from './Components/About';
import Content from './Components/Content/index.js';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Nav> </Nav>
      <main> <About></About> <Content></Content></main>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
