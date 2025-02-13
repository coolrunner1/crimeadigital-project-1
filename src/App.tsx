import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {Footer} from "./components/Footer.tsx";
import {Main} from "./components/Main.tsx";
import {AboutMe} from "./components/AboutMe.tsx";
import {MiddleSection} from "./components/MiddleSection.tsx";
import {GetInTouch} from "./components/GetInTouch.tsx";

function App() {
    return (
        <>
            <NavBar />
            <Main />
            <AboutMe />
            <MiddleSection />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default App
