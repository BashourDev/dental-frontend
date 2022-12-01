import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SpecialCentersCarousel = ({ title, subtitle, centers = [] }) => {
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          display: props.onClick === null ? "none" : "block",
          background: "white",
          colorAdjust: "black",
          width: props.onClick === null ? "0px" : "60px",
          height: props.onClick === null ? "0px" : "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          zIndex: props.onClick === null ? 0 : 1000,
          right: props.onClick === null ? "0px" : "15px",
        }}
        onClick={onClick}
      >
        <MdChevronRight
          className={`fixed text-primaryDark ${
            props.onClick === null ? "w-0 h-0" : "w-7 h-7"
          }`}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{
          ...style,
          display: props.onClick === null ? "none" : "block",
          background: "white",
          colorAdjust: "black",
          width: props.onClick === null ? "0px" : "60px",
          height: props.onClick === null ? "0px" : "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          zIndex: props.onClick === null ? 0 : 1000,
          left: props.onClick === null ? "0px" : "15px",
        }}
        onClick={onClick}
      >
        <MdChevronLeft
          className={`fixed text-primaryDark ${
            props.onClick === null ? "w-0 h-0" : "w-7 h-7"
          }`}
        />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 15000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    adaptiveHeight: true,
    arrows: false,
    className: "slider variable-width",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 50,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: false,
          arrows: false,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: false,
          arrows: false,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          arrows: false,
          adaptiveHeight: false,
          //   centerMode: true,
          //   centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <div className="bg-dark-blue rounded-sm pt-8 pb-12">
      <div className="px-2 sm:px-6 pb-8 flex flex-col items-center space-y-4">
        <h3 className="text-light-green text-center w-full font-semibold text-base">
          {title}
        </h3>
        <h3 className="text-white text-center max-w-sm w-full font-bold text-3xl">
          {subtitle}
        </h3>
        <div className="w-2/6 md:w-1/6 h-0.5 bg-white mt-2"></div>
      </div>
      <Slider {...settings}>
        {centers.map((center) => (
          <div
            onDragStartCapture={() => setIsDragging(true)}
            onDragEndCapture={() =>
              setTimeout(() => setIsDragging(false), 1000)
            }
            key={center.id}
            className="group relative px-3 w-56"
          >
            <div className="min-h-64 h-64 w-56 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-64 lg:aspect-none">
              <img
                src={center?.first_media_only?.original_url}
                alt={center?.first_media_only?.name}
                draggable={false}
                className="w-full h-full drag object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between w-56">
              <div>
                <h3 className="text-base font-medium text-gray-100">
                  <button
                    onClick={() =>
                      !isDragging && navigate(`/doctors/${center.id}`)
                    }
                  >
                    <span
                      aria-hidden="true"
                      draggable={false}
                      className="absolute inset-0"
                    />
                    {t("ln") === "en" ? center.en_name : center.ar_name}
                  </button>
                </h3>
                <p className="mt-1 text-xs text-medium-gray">
                  {t("ln") === "en" ? center?.en_country : center?.ar_country},{" "}
                  {t("ln") === "en" ? center?.en_city : center?.ar_city},{" "}
                  {t("ln") === "en" ? center?.en_address : center?.ar_address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialCentersCarousel;
