import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'; // Trang chủ
import About from './pages/About'; // Trang giới thiệu
import Events from './pages/Events'; // Trang sự kiện
import Donate from './pages/Donate';
import QRCodePage from './pages/QRcode';
import PaymentSuccess from './pages/PaymentSuccess';
import TipTapEditor from './pages/TipTapEditor';
import NewsPage from './pages/NewsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="about" element={<About />} />
        <Route path="/events" element={<Events />} /> {/* Thay thế bằng component chi tiết bài viết */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/qrcode" element={<QRCodePage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/edit" element={<TipTapEditor />} />
      </Routes>
    </Router>
  );
}

export default App;