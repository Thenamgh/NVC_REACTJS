import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NewsPage from '../pages/NewsPage';
import ReactQuill from 'react-quill';

import '../css/navbar.css';

export default function Navbar({ onCreateArticle, onSubmitArticle }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [auth, setAuth] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở/đóng modal
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null,
    });
    const [previewImage, setPreviewImage] = useState(null);
    const path = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem("ADMIN_NGO");
        const isUser = localStorage.getItem("NGO");
        if (isAdmin) {
            setAuth("ADMIN");
        } else if (isUser) {
            setAuth("USER");
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
        setPreviewImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bài viết đã được đăng thành công!');
        setFormData({
            title: '',
            content: '',
            image: null,
        });
        setPreviewImage(null);
        setIsModalOpen(false); // Đóng modal sau khi đăng bài
        onSubmitArticle();     // <--- Phải gọi hàm
    };



    return (
        <>
            {/* Top Bar */}
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                <div className="text">
                                    <Link to="/admin">
                                        <i title="ADMIN" className="fa fa-solid fa-user-tie m-0" style={{ fontSize: "21px" }} />
                                    </Link>
                                </div>
                                <div className="text">
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+84-329328812">
                                        <p>+84-329328812</p>
                                    </a>
                                </div>
                                <div className="text">
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:clbnangvungcao2023@gmail.com">
                                        <p>clbnangvungcao2023@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href="https://www.tiktok.com/@nangvungcao1406">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                    <a href="https://www.facebook.com/nangvungcao">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/2hi.april/">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                {auth.length > 0 && (
                                    <button
                                        onClick={() => {
                                            auth === "USER"
                                                ? localStorage.removeItem("NGO")
                                                : localStorage.removeItem("ADMIN_NGO");
                                            setAuth("");
                                            navigate("/");
                                        }}
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        LOGOUT {auth}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <img
                    src={require("../assets/NVC++/NVC_LOGO.png")}
                    alt=""
                    style={{ height: "50px", marginRight: "12px" }}
                />

                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        NẮNG VÙNG CAO
                    </Link>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className={`nav-item nav-link ${path === '/' ? "active" : ""}`}>
                                Trang chủ
                            </Link>
                            <Link to="/about" className={`nav-item nav-link ${path === '/about' ? "active" : ""}`}>
                                Chúng tôi
                            </Link>
                            <Link to="/events" className={`nav-item nav-link ${path === '/events' ? "active" : ""}`}>
                                Hoạt động
                            </Link>
                            <Link to="/news" className={`nav-item nav-link ${path === '/news' ? "active" : ""}`}>
                                Tin Tức
                            </Link>
                            <Link to="/donate" className={`nav-item nav-link ${path === '/donate' ? "active" : ""}`}>
                                Donate
                            </Link>
                            <Link to="/contact" className={`nav-item nav-link ${path === '/contact' ? "active" : ""}`}>
                                Liên hệ
                            </Link>
                        </div>
                        {/* Nút Tạo bài viết */}
                        {path === '/news' && (
                            <button
                                type="button"
                                className="btn btn-primary btn-create-article"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Tạo bài viết
                            </button>
                        )}
                    </div>
                </div>
            </div>

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
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Nhập tiêu đề bài viết"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Nội dung bài viết</label>
                                <ReactQuill
                                    theme="snow"
                                    value={formData.content}
                                    onChange={handleContentChange}
                                    placeholder="Nhập nội dung bài viết"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Hình ảnh</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageChange}
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

        </>
    );
}