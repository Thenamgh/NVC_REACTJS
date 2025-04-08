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
                        <p>Tại <span>Nắng Vùng Cao,</span> chúng tôi làm việc hướng tới sự phát triển của xã hội</p>
                    </div>
                    <div className="caption3">
                        <p>Hãy mang lại sự thay đổi cho xã hội bằng cách dang tay giúp đỡ những trẻ em kém may mắn và các cộng đồng khó khăn khác.</p>
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