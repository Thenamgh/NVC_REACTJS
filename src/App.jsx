import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Trang chủ
import About from './pages/About'; // Trang giới thiệu
import Events from './pages/Events'; // Trang sự kiện
import Donate from './pages/Donate';
import Contact from './pages/Contact'; // Trang liên hệ
import QRCodePage from './pages/QRcode';
import PaymentSuccess from './pages/PaymentSuccess';
import NewsPage from './pages/NewsPage';
import SaoKe from './pages/SaoKe'; // sửa đường dẫn nếu bạn để ở thư mục khác

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="about" element={<About />} />
        <Route path="/events" element={<Events />} /> {/* Thay thế bằng component chi tiết bài viết */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qrcode" element={<QRCodePage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/sao-ke" element={<SaoKe />} />
        {/* <Route path="/edit" element={<RichEditor />} /> */}
      </Routes>
    </Router>
  );
}

export default App;