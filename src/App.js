import './App.css';
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import RemoteWork from "./Components/RemoteWork/RemoteWork";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
