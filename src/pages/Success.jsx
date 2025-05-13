import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h2 style={{ color: '#28a745', fontSize: '2rem' }}>🎉 Thanh toán thành công!</h2>
            <p style={{ marginTop: '12px', fontSize: '1.2rem' }}>
                Cảm ơn bạn đã đóng góp cho hành trình thiện nguyện của chúng tôi.
            </p>

            <button
                onClick={() => navigate('/sao-ke')}
                style={{
                    marginTop: '30px',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Đến trang sao kê
            </button>
        </div>
    );
};

export default Success;
