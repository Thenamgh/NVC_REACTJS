import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Initiatives from '../components/Initiatives';
import BackToTop from '../components/BackToTop';
import PageHeader from '../components/PageHeader';
import News from '../components/News';

export default function NewsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bài viết đã được đăng!');
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Thanh Navbar cố định */}
            <Navbar onCreateArticle={() => setIsModalOpen(true)} />

            {/* Nội dung trang */}
            <PageHeader title="Tin tức" path="/news" name="Tin tức" />
            <News />

            {/* Modal Form */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            className="btn-close"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2>Đăng bài viết mới</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Tiêu đề bài viết</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="form-control"
                                    placeholder="Nhập tiêu đề bài viết"
                                    required
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn-custom">
                                    Đăng bài
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Các thành phần khác */}
            <Footer />
            <BackToTop />
        </>
    );
}