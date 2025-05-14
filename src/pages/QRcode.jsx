import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const QRCodePage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 phút
    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {
        const socket = new SockJS('https://nvc-spring-production.up.railway.app/ws');
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('✅ WebSocket connected');
                client.subscribe(`/topic/order/${state.data.paymentLinkId}`, (message) => {
                    navigate('/success', {
                        state: {
                            data: "ok",
                        },
                    });
                });
            },
            onStompError: (frame) => {
                console.error('❌ STOMP error:', frame);
            },
        });

        client.activate();
        setStompClient(client);

        return () => {
            if (client && client.active) {
                client.deactivate();
                console.log('🔌 WebSocket disconnected');
            }
        };
    }, [state.data.paymentLinkId]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h3>Quét mã QR để ủng hộ</h3>
            <p>
                QR sẽ hết hạn sau:{' '}
                <strong
                    style={{
                        color:
                            timeLeft > 360
                                ? 'green'
                                : timeLeft > 180
                                ? '#ffc107'
                                : 'red',
                    }}
                >
                    {formatTime(timeLeft)}
                </strong>
            </p>

            {timeLeft > 0 ? (
                <QRCodeCanvas
                    value={state.data.qrCode}
                    size={256}
                    level="H"
                    fgColor="#25174E"
                />
            ) : (
                <>
                    <p style={{ color: 'red', marginTop: '20px' }}>Mã QR đã hết hạn.</p>
                    <button
                        onClick={() => navigate('/donate')}
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            border: 'none',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        Tạo lại QR
                    </button>
                </>
            )}
        </div>
    );
};

export default QRCodePage;
