import React, { useEffect, useState } from 'react';

const SaoKe = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        //Giả lập gọi API lấy danh sách giao dịch
        setTimeout(() => {
            setTransactions([
                { id: 'TXN001', name: 'Nguyễn Văn A', amount: 50000, date: '2025-05-20' },
                { id: 'TXN002', name: 'Trần Thị B', amount: 100000, date: '2025-05-21' },
                { id: 'TXN003', name: 'Lê Văn C', amount: 20000, date: '2025-05-22' },
            ]);
        }, 1000);
    }, []);

    return (
        <div style={{ padding: '40px' }}>
            <h2>Trang sao kê giao dịch</h2>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '24px'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f0f0f0' }}>
                        <th style={cellStyle}>Mã giao dịch</th>
                        <th style={cellStyle}>Người ủng hộ</th>
                        <th style={cellStyle}>Số tiền (VNĐ)</th>
                        <th style={cellStyle}>Ngày giao dịch</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(txn => (
                        <tr key={txn.id}>
                            <td style={cellStyle}>{txn.id}</td>
                            <td style={cellStyle}>{txn.name}</td>
                            <td style={cellStyle}>{txn.amount.toLocaleString()}</td>
                            <td style={cellStyle}>{txn.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const cellStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left'
};

export default SaoKe;
