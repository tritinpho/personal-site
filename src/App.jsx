import styles from './App.module.css';
import "./vars.css";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import { Hero } from './components/Hero/Hero.jsx';

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  )
}


export default App
