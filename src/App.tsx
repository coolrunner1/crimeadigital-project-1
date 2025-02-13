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
            <div className="min-w-screen">
                <div className="max-w-[2000px] mx-auto">
                    <Main />
                    <AboutMe />
                    <MiddleSection />
                    <GetInTouch />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
