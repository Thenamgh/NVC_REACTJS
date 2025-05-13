import Navbar from "../components/Navbar";
import space from '../assets/Videofst.mp4';
import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import News from "../components/News";
import CoreTeam1 from "../components/Coreteam1";



export default function Home() {
    return (
        <>
            <Navbar />
            <div className="video-container">
                <video src={space} type="video/mp4" autoPlay loop muted>
                    Sorry, your browser doesn't support videos.
                </video>
                <div className="typewriter">
                    <h2>Phía chân trời rực rỡ...</h2>
                </div>
            </div>
            <Landing />
            <Initiatives />
            <CoreTeam1 />
            <Funds />
            <News />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}