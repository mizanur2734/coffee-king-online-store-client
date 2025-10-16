import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/banner/coffee_slide-1-1.jpg";
import img2 from "../assets/banner/coffee_slide-2-1.jpg";
import img3 from "../assets/banner/coffee_slide-3.jpg";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-5 w-full">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-[#c0aa83] transition-all"></div>
    ),
  };

  const slides = [
    {
      img: img1,
      title: "Coffee market",
      subtitle: "online store",
      desc: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.",
    },
    {
      img: img2,
      title: "Online store",
      subtitle: "your market",
      desc: "Ut felis nibh, iaculis eu viverra eget, efficitur non erat. Fusce porta scelerisque orci id cursus. Ut id ante ut lacus tincidunt venenatis.",
    },
    {
      img: img3,
      title: "Espresso bar",
      subtitle: "coffee news",
      desc: "Pellentesque ac ipsum at justo finibus commodo. Aliquam pellentesque ultricies nulla in egestas. Fusce porta scelerisque orci id.",
    },
  ];

  return (
    <div className="relative bg-white md:my-40 my-20 px-4 md:px-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Responsive Image */}
            <img src={slide.img} className="w-full md:h-[500px] h-[300px] object-cover mx-auto -ml-30 md:ml-0" />

            {/* Overlay */}
            <div className="md:absolute top-[25%] md:top-1/2 transform -translate-y-0 md:-translate-y-1/2 text-black space-y-2 md:space-y-4">
              <h2>
                {/* Desktop */}
                <span className="hidden md:block text-7xl font-extrabold leading-[1.2]">
                  {slide.title}
                </span>
                <span className="hidden md:block text-[55px] text-[#c0aa83] font-extrabold">
                  {slide.subtitle}
                </span>
                {/* Mobile */}
                <span className="block md:hidden text-3xl font-extrabold leading-11">
                  {slide.title}
                </span>
                <span className="block md:hidden text-xl text-[#c0aa83] font-extrabold">
                  {slide.subtitle}
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg w-[90%] sm:w-3/5 md:w-3/5 mt-3 md:mt-6">
                {slide.desc}
              </p>

              <div className="flex flex-col md:flex-row mt-6 md:mt-10 gap-4 md:gap-6 md:w-full w-3/6">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-black text-white text-sm sm:text-base md:text-base font-bold  w-5/6 md:w-auto">
                  Read more
                </button>
                <button className="px-6 py-3 md:px-8 md:py-4 bg-[#c0aa83] text-white text-sm sm:text-base md:text-base font-bold w-full  md:w-auto">
                  View products
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
