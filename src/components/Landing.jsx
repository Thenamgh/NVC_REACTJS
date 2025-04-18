import '../css/landing.css';
import main from '../assets/Landing.JPG';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return (
        <div className="landing">
            <span className="left">
                <div className="caption1">
                    <hr />
                    <h4>CHÚNG TÔI LÀ NẮNG VÙNG CAO</h4>
                </div>
                <div className="titles">
                    <div className="caption2">
                        <p>Tại <span>Nắng Vùng Cao,</span></p>
                    </div>
                    <div className="caption3">
                        <p>chúng tôi luôn hướng về những điểm trường mầm non nơi vùng núi xa xôi – nơi những em nhỏ còn thiếu thốn cả về điều kiện học tập lẫn cuộc sống thường ngày.

                            Chúng tôi tin rằng mỗi hành động nhỏ đều có thể mang lại sự thay đổi lớn. Hãy cùng chúng tôi gieo những hạt mầm yêu thương, tiếp thêm hy vọng và thắp sáng tương lai cho các em nhỏ vùng cao.</p>
                    </div>
                    <div className="btns">
                        <button onClick={() => window.open("https://www.facebook.com/nangvungcao", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">Know More</button>
                        <button type="button" className="btn btn-success" onClick={() => navigate("/donate")}>DONATE</button>
                    </div>
                </div>

            </span>
            <span className="right">
                <img src={main} alt="Smiling Faces" />
            </span>
        </div>
    );
}