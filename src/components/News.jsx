import React, { useState } from 'react';
import Slider from 'react-slick'
import 'react-quill/dist/quill.snow.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/newsForm.css';

function News() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(null);
    const [articles, setArticles] = useState([]); // Lưu danh sách bài viết
    const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở/đóng modal

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
        const newArticle = {
            title: formData.title,
            content: formData.content,
            image: previewImage,
        };
        setArticles([...articles, newArticle]); // Lưu bài viết vào danh sách
        alert('Bài viết đã được đăng thành công!');
        setFormData({
            title: '',
            content: '',
            image: null,
        });
        setPreviewImage(null);
        setIsModalOpen(false); // Đóng modal sau khi đăng bài
    };
    const sliderSettings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="news-container">
            {/* Nút mở modal */}
            {/* <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
            >
                Tạo bài viết
            </button> */}

            {/* Modal Form */}
            {/* {isModalOpen && (
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
            )} */}

            {/* Danh sách bài viết */}
            <div className="articles-slider">
                <h2>Slide bài viết</h2>
                {articles.length === 0 ? (
                    <p>Chưa có bài viết nào.</p>
                ) : (
                    <Slider {...sliderSettings}>
                        {articles.map((article, index) => (
                            <div key={index} className="article-slide">
                                <h3>{article.title}</h3>
                                <div
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                                {article.image && (
                                    <img
                                        src={article.image}
                                        alt="Article"
                                        className="article-image"
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default News;