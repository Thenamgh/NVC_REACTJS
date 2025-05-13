import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import CVTT from "../assets/CoreTeam/NVC_CVTT.jpg";
import CNCLB from "../assets/CoreTeam/NVC_CNCLB.jpg";
import PCN from "../assets/CoreTeam/NVC_PCN.jpg";
import TBTT from "../assets/CoreTeam/NVC_TBTT.jpg";
import CVNVC from "../assets/CoreTeam/NVC_CVNVC.jpg";
import FDNVC from "../assets/CoreTeam/NVC_FDNVC.jpg";

import "../css/CoreTeam.css";

const CoreTeam1 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const members = [
        { image: FDNVC, fullName: "Triệu Quang Sáng", position: "Founder/ Cố Vấn Nắng Vùng Cao" },
        { image: CVNVC, fullName: "Vũ Diệu Linh", position: "Cố Vấn Nắng Vùng Cao" },
        { image: CNCLB, fullName: "Trần Văn Hùng", position: "Chủ Nhiệm Nắng Vùng Cao" },
        { image: PCN, fullName: "Trần Hồng Hạnh", position: "Phó Chủ Nhiệm" },
        { image: CVTT, fullName: "Mai Huyền Trang", position: "Cố Vấn Truyền Thông" },
        { image: TBTT, fullName: "Thanh Thảo", position: "Trưởng Ban Truyền Thông" },
    ];


    return (
        <div className="CoreTeam">
            <div className="title">
                <h1>BAN ĐIỀU HÀNH NẮNG VÙNG CAO </h1>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                centeredSlides={true}
                slidesPerView={4}
                spaceBetween={350}
                loop
                speed={800}
                className="coreteam-swiper"
            >

                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="member-slide">
                            <img src={member.image} alt={member.fullName} className="member-image" />
                            <div className="member-name">{member.fullName}</div>
                            <div className="member-position">{member.position}</div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            {/* Custom navigation dưới ảnh */}
            <div className="coreteam-navigation">
                <button ref={prevRef} className="custom-prev">❮</button>
                <button ref={nextRef} className="custom-next">❯</button>
            </div>
        </div>
    );
};

export default CoreTeam1;
