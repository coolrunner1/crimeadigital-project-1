import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {Footer} from "./components/Footer.tsx";
import {Main} from "./components/Main.tsx";
import {AboutMe} from "./components/AboutMe.tsx";

function App() {

  return (
    <>
      <NavBar />
      <Main />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App
