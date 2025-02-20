import React from "react";
import Slider from "react-slick";
import Card from "../molecules/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardList() {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "25%",
  };

  const handleKakaoClick = () => {
    window.location.href = "https://open.kakao.com/o/sZVP2Sah";
  };

  return (
    <section className="mt-12">
      <Slider {...settings}>
        <Card name="credit-banner" onClick={() => {}} />
        <Card name="kakao-banner" onClick={handleKakaoClick} />
        <Card name="premium-banner" onClick={() => {}} />
      </Slider>
    </section>
  );
}
