
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div id='projects'></div>
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
