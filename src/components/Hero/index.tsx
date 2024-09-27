'use client';

import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for the slide object
interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

const PageHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    rtl: false,
    autoplay: true,
    beforeChange: (_, next) => setCurrentSlide(next), // Update the current slide on change
  };

  const slides: Slide[] = [
    {
      image: "/assets/img/b9.jpg",
      title: "Amazing songs",
      description:
        "Nam ut neque, nec venenatis laoreet sit semper arcu diam morbi duis fringilla eget elementum vel ipsum dui at turpis",
      link: "genres.html",
    },
    {
      image: "/assets/img/b0.jpg",
      title: "Bepop top charts",
      description:
        "Faucibus nullam est mauris fusce at enim, phasellus volutpat lorem egestas id amet amet, accumsan tellus dictum eu mattis dictumst",
      link: "charts.html",
    },
    {
      image: "/assets/img/b19.jpg",
      title: "Find popular artist",
      description:
        "A proin erat velit pharetra, blandit cursus nisl quisque lorem dapibus ultrices elementum erat orci ullamcorper morbi sit condimentum donec",
      link: "artists.html",
    },
  ];

  return (
    <div className="page-hero">
      {/* Background media which changes according to the current slide */}
      <div className="media bg-media">
        <div
          className="media-content"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        ></div>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
            className="slider-item"
          >
            <div className="pos-rlt">
              <h2 className="display-3 font-weight-bold text-white">
                {slide.title}
              </h2>
              <div className="col-6 px-0 py-3 text-muted">
                <p>{slide.description}</p>
              </div>
              <a
                href={slide.link}
                className="btn ajax btn-rounded gd-primary text-white"
              >
                Explore
              </a>
              <a href="#" className="btn no-bg text-white">
                Share
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PageHero;
