import bgWaves from "../assets/bg-waves.png";
import collectionImage from "../assets/collection-image.png";
import searchIcon from "../assets/search.svg";
import shieldIcon from "../assets/shield-check.svg";
import rocketIcon from "../assets/rocket.svg";
import screenIcon from "../assets/screen.svg";
import podcastIcon from "../assets/podcast.svg";
import settingsIcon from "../assets/settings-alt.svg";
import arrowIcon from "../assets/arrow-right.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Collection = () => {
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
  };
  return (
    <section className="flex justify-center relative text-[#0F172A]">
      <img
        className="absolute w-full h-[70%] max-lg:h-[55%] bottom-0 select-none object-fill max-lg:object-cover"
        src={bgWaves}
      />
      <div className="max-w-[1280px] w-full relative flex flex-col justify-between items-start p-20 lg:pr-8 max-md:p-4 max-md:pt-12 max-md:pb-20 ">
        <h2 className="w-full text-[56px] font-bold leading-[61.6px] mb-8 max-lg:text-center max-lg:text-[32px] max-lg:leading-[35.2px]">
          Grow your collection
        </h2>
        <p className="text-lg leading-[28.8px] mb-20 max-lg:text-center max-md:leading-[22.4px] max-lg:mb-8">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
        <div className="relative w-full flex justify-between max-lg:flex-col ">
          <div className="flex flex-col [&_.slick-track]:h-[60px] mb-8 lg:hidden">
            <Slider {...sliderSettings}>
              <div style={{ width: 240 }} className="collection-button ">
                <img src={searchIcon} alt="search icon" />
                <p className="collection-button-text">Bibendum tellus</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
              <div style={{ width: 240 }} className="collection-button">
                <img src={shieldIcon} alt="shield icon" />
                <p className="collection-button-text">Cras eget</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
              <div style={{ width: 240 }} className="collection-button">
                <img src={rocketIcon} alt="rocket icon" />
                <p className="collection-button-text">Dolor pharetra</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
              <div style={{ width: 240 }} className="collection-button">
                <img src={screenIcon} alt="screen icon" />
                <p className="collection-button-text">Amet, fringilla</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
              <div style={{ width: 240 }} className="collection-button">
                <img src={podcastIcon} alt="podcast icon" />
                <p className="collection-button-text">Amet nibh</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
              <div style={{ width: 240 }} className="collection-button">
                <img src={settingsIcon} alt="settings icon" />
                <p className="collection-button-text">Sed velit</p>
                <img
                  className="arrow-icon"
                  src={arrowIcon}
                  alt="right arrow icon"
                />
              </div>
            </Slider>
          </div>
          <div className="flex flex-col gap-4 mr-20 max-lg:hidden">
            <div className="collection-button ">
              <img src={searchIcon} alt="search icon" />
              <p className="collection-button-text">Bibendum tellus</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
            <div className="collection-button">
              <img src={shieldIcon} alt="shield icon" />
              <p className="collection-button-text">Cras eget</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
            <div className="collection-button">
              <img src={rocketIcon} alt="rocket icon" />
              <p className="collection-button-text">Dolor pharetra</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
            <div className="collection-button">
              <img src={screenIcon} alt="screen icon" />
              <p className="collection-button-text">Amet, fringilla</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
            <div className="collection-button">
              <img src={podcastIcon} alt="podcast icon" />
              <p className="collection-button-text">Amet nibh</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
            <div className="collection-button">
              <img src={settingsIcon} alt="settings icon" />
              <p className="collection-button-text">Sed velit</p>
              <img
                className="arrow-icon"
                src={arrowIcon}
                alt="right arrow icon"
              />
            </div>
          </div>
          <div className="max-w-[1000px]">
            <img
              className="w-full"
              src={collectionImage}
              alt="sneakers collection photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
