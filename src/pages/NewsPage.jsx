import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Initiatives from '../components/Initiatives';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import News from "../components/News";

export default function NewsPage() {
    return (
        <>
            <Navbar />
            <PageHeader title="Hoạt động của Nắng" path="/news" name="Tin tức" />
            <News />
            <Initiatives />
            <Footer />
            <BackToTop />
        </>
    );
}