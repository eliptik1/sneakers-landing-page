import heroSneakers from "../assets/hero-sneakers.png";
import playIcon from "../assets/play-circle.svg";
import featureIconOne from "../assets/feature-icon-1.svg";
import featureIconTwo from "../assets/feature-icon-2.svg";
import featureIconThree from "../assets/feature-icon-3.svg";
import featureBgOne from "../assets/feature-bg-symbol-1.svg";
import featureBgTwo from "../assets/feature-bg-symbol-2.svg";
import featureBgThree from "../assets/feature-bg-symbol-3.svg";
import backgroundTriangle from "../assets/bg-triangle.png";

export const Hero = () => {
  return (
    <section className="relative">
      <img
        className="absolute w-full h-full select-none max-lg:hidden"
        src={backgroundTriangle}
      />
      <div className="max-w-[1440px] m-auto relative flex justify-center gap-20 h-full items-center p-20 max-lg:flex-col max-lg:gap-8 max-lg:py-12 max-lg:px-4">
        <img
          className="absolute bottom-0 select-none lg:hidden"
          src={backgroundTriangle}
        />
        <div className="flex flex-col max-w-[714px] gap-8 max-lg:gap-8">
          <h1 className="text-[72px] text-[#0F172A] font-bold leading-[79.2px] max-lg:text-center max-lg:text-[56px]">
            Collectible Sneakers
          </h1>
          <p className="text-lg max-lg:text-center leading-[28.8px]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex gap-4 text-[#78350F] max-lg:justify-center z-10">
            <a
              href="#"
              className="text-xl font-medium leading-6 px-8 py-4 border-current border-2 rounded-lg text-nowrap hover:underline"
            >
              Sign up now
            </a>
            <a
              href="#"
              className="flex gap-2 items-center w-fit text-base font-medium leading-6 px-3 py-2 text-nowrap hover:underline"
            >
              <img className="w-6" src={playIcon} alt="play icon" />
              <span> Watch Demo</span>
            </a>
          </div>
        </div>

        <div className="relative w-[486px] max-lg:w-[361px] select-none">
          <img src={heroSneakers} alt="Sneakers image" />
        </div>
      </div>
      <div className="relative flex justify-center max-lg:bg-[#FEF3C7]">
        <div className="w-[1280px] p-20 flex gap-20 text-[#0F172A] max-lg:flex-col [&>div]:max-lg:text-center [&>div]:max-lg:items-center max-lg:gap-8 max-lg:py-12 max-lg:px-4">
          <div className="flex flex-col gap-4">
            <div className="relative w-fit select-none">
              <img
                className="w-14 absolute -right-5"
                src={featureBgOne}
                alt="feature background icon one"
              />
              <img
                className="w-16"
                src={featureIconOne}
                alt="feature Icon One"
              />
            </div>
            <h4 className="text-xl font-medium leading-[22px]">Nibh viverra</h4>
            <p className="text-lg leading-[28.8px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-fit select-none">
              <img
                className="w-9 absolute right-1"
                src={featureBgTwo}
                alt="feature background icon two"
              />
              <img
                className="w-16"
                src={featureIconTwo}
                alt="feature Icon Two"
              />
            </div>
            <h4 className="text-xl font-medium leading-[22px]">Cursus amet</h4>
            <p className="text-lg leading-[28.8px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-fit select-none">
              <img
                className="w-10 absolute -right-5"
                src={featureBgThree}
                alt="feature background icon three"
              />
              <img
                className="w-16"
                src={featureIconThree}
                alt="feature Icon Three"
              />
            </div>
            <h4 className="text-xl font-medium leading-[22px]">
              Ipsum fermentum
            </h4>
            <p className="text-lg leading-[28.8px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
