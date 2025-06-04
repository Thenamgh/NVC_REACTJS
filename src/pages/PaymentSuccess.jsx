import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>🎉 Thanh toán thành công!</h2>
                <p style={styles.message}>
                    Cảm ơn bạn đã ủng hộ hành trình của chúng tôi. Khoản đóng góp của bạn đã được ghi nhận.
                </p>
                <button
                    onClick={() => navigate('/sao-ke')}
                    style={styles.button}
                >
                    Đến trang sao kê
                </button>

                <button
                    onClick={() => navigate('/sao-ke')}
                    style={styles.button}
                >
                    Đến trang sao kê
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#f8f9fa',
    },
    card: {
        background: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '500px',
    },
    title: {
        fontSize: '28px',
        color: '#28a745',
        marginBottom: '16px',
    },
    message: {
        fontSize: '18px',
        color: '#333',
        marginBottom: '30px',
    },
    button: {
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default PaymentSuccess;
