import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodePage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [qrImage, setQrImage] = useState('');

    


    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <QRCodeCanvas
                value={state.data.qrCode}
                size={256}
                level="H"
                fgColor="#25174E"
            />
        </div>
    );
};

export default QRCodePage;
