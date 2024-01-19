import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Gengar } from './components/Animation';
import { Footer } from './components/Footer';
// import { YoutubeAudioPlayer } from './components/YoutubeAudioPlayer';

export default function App() {
  // const videoUrl = 'https://www.youtube.com/watch?v=JQwbxPyFRNE';

  return (
    <div className='App'>
      <NavBar />
      {/* <YoutubeAudioPlayer videoUrl={videoUrl} /> */}
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Gengar />
      <Footer />
    </div>
  )
}