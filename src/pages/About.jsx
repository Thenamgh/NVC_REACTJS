import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="Về Nắng" path="/about" name="Về Nắng" />
            <Landing />
            <Funds />
            <Footer />
            <BackToTop />
        </>
    );
}