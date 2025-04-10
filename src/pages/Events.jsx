import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Initiatives from '../components/Initiatives';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";

export default function Events() {
    return (
        <>
            <Navbar />
            <PageHeader title="Hoạt động của Nắng" path="/event" name="Hoạt động của Nắng" />
            <Initiatives />
            <Footer />
            <BackToTop />
        </>
    );
}