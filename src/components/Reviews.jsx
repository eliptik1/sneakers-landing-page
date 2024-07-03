import { useRef } from "react";
import sliderLogoOne from "../assets/slider-card-logo-1.svg";
import sliderLogoTwo from "../assets/slider-card-logo-2.svg";
import sliderLogoThree from "../assets/slider-card-logo-3.svg";
import sliderLogoFour from "../assets/slider-card-logo-4.svg";

import userOne from "../assets/user-thumb-1.png";
import userTwo from "../assets/user-thumb-2.png";
import userThree from "../assets/user-thumb-3.png";
import userFour from "../assets/user-thumb-4.png";
import sliderNextButton from "../assets/slider-next-button.svg";
import sliderPrevButton from "../assets/slider-prev-button.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Reviews = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const sliderSettings = {
    className: "slider variable-width",
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 2200,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 1536,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <section className="mb-20">
      <div className="relative z-10 max-w-[1280px] mx-auto p-20 flex justify-between text-[#0F172A] max-lg:pt-12 max-lg:pb-8">
        <h2 className="w-full text-[56px] font-bold leading-[61px] max-lg:text-center max-lg:text-[32px] max-lg:leading-8">
          Because they love us
        </h2>
        <div className="flex gap-6 max-md:hidden">
          <button className="shrink-0 " onClick={previous}>
            <img
              className="w-12 h-12 hover:scale-105 transition-all"
              src={sliderPrevButton}
              alt="previous slide button"
            />
          </button>
          <button className="shrink-0 " onClick={next}>
            <img
              className="w-12 h-12 hover:scale-105 transition-all"
              src={sliderNextButton}
              alt="next slide button"
            />
          </button>
        </div>
      </div>

      <div className="relative slider-container max-h-[450px]">
        <div className="flex justify-center">
          <span className="absolute flex justify-center w-[calc(100vw-80px)] max-lg:w-screen top-[-40px] max-lg:top-[-16px] h-[420px] max-lg:h-[277px] bg-[#FDE68A]"></span>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...sliderSettings}
        >
          <div style={{ width: 384 }} className="review-card">
            <img
              className="h-16 mb-4"
              src={sliderLogoOne}
              alt="review card logo"
            />
            <p className="text-2xl leading-[38.4px]">
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
              viverra turpis lorem. Varius a turpis urna id porttitor.
            </p>
            <div className="review-card-user">
              <img src={userOne} alt="user profile photo" />
              <div className="pl-4">
                <h3 className="text-lg leading-[28.8px]">Hellen Jummy</h3>
                <p className="text-[#475569] leading-[22.4px]">Team Lead</p>
              </div>
            </div>
          </div>
          <div style={{ width: 384 }} className="review-card">
            <img
              className="h-16 mb-4"
              src={sliderLogoTwo}
              alt="review card logo"
            />
            <p className="text-2xl leading-[38.4px]">
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
              viverra turpis lorem. Varius a turpis urna id porttitor.
            </p>
            <div className="review-card-user">
              <img src={userTwo} alt="user profile photo" />
              <div className="pl-4">
                <h3 className="text-lg leading-[28.8px]">Hellena John</h3>
                <p className="text-[#475569] leading-[22.4px]">Co-founder</p>
              </div>
            </div>
          </div>
          <div style={{ width: 384 }} className="review-card">
            <img
              className="h-16 mb-4"
              src={sliderLogoThree}
              alt="review card logo"
            />
            <p className="text-2xl leading-[38.4px]">
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
              viverra turpis lorem. Varius a turpis urna id porttitor.
            </p>
            <div className="review-card-user">
              <img src={userThree} alt="user profile photo" />
              <div className="pl-4">
                <h3 className="text-lg leading-[28.8px]">David Oshodi</h3>
                <p className="text-[#475569] leading-[22.4px]">Manager</p>
              </div>
            </div>
          </div>
          <div style={{ width: 384 }} className="review-card">
            <img
              className="h-16 mb-4"
              src={sliderLogoFour}
              alt="review card logo"
            />
            <p className="text-2xl leading-[38.4px]">
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
              viverra turpis lorem. Varius a turpis urna id porttitor.
            </p>
            <div className="review-card-user">
              <img src={userFour} alt="user profile photo" />
              <div className="pl-4">
                <h3 className="text-lg leading-[28.8px]">Charolette Hanlin</h3>
                <p className="text-[#475569] leading-[22.4px]">CEO</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
