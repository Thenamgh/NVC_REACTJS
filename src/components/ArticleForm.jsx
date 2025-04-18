import React, { useState } from 'react';
import '../css/articleForm.css';

function ArticleForm() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.title.trim()) {
            errors.title = 'Please enter a title';
            isValid = false;
        }

        if (!formData.content.trim()) {
            errors.content = 'Please enter the content';
            isValid = false;
        }

        if (!formData.image) {
            errors.image = 'Please upload an image';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform action (e.g., send form data to server)
            setSuccessMessage('✔ Article Posted Successfully!');
            console.log('Article submitted:', formData);
            // Reset form fields
            setFormData({
                title: '',
                content: '',
                image: null
            });
        } else {
            setSuccessMessage('');
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <div className="article-form">
            <h2>Write and Post an Article</h2>
            <div className="success-message text-success">{successMessage}</div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Article Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <p className="text-danger">{errors.title}</p>
                </div>
                <div className="control-group">
                    <textarea
                        className="form-control"
                        id="content"
                        placeholder="Article Content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <p className="text-danger">{errors.content}</p>
                </div>
                <div className="control-group">
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        onChange={handleImageChange}
                        required
                    />
                    <p className="text-danger">{errors.image}</p>
                </div>
                <div>
                    <button className="btn btn-custom" type="submit">
                        Post Article
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ArticleForm;