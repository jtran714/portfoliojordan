import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      {/* <Pokemon />
      <Footer /> */}
    </div>
  )
}