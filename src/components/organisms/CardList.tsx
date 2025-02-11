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
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "25%",
  };

  return (
    <section className="mb-28 mt-16">
      <Slider {...settings}>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
      </Slider>
    </section>
  );
}
