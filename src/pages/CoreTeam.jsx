import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Funds from '../components/Funds';
import PageHeader from "../components/PageHeader";
// import CoreTeam from '../components/CoreTeam';



export default function CoreTeam() {
    return (
        <>
            <Navbar />
            <PageHeader title="Đội ngũ điều hành" path="/CoreTeam" name="Về Nắng" />
            <Landing />
            <Funds />
            <CoreTeam />
            <Footer />
            <BackToTop />
        </>
    );
}