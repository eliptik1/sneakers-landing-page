import heroSneakers from "../assets/hero-sneakers.png";
import playIcon from "../assets/play-circle.svg";
import featureIconOne from "../assets/feature-icon-1.svg";
import featureIconTwo from "../assets/feature-icon-2.svg";
import featureIconThree from "../assets/feature-icon-3.svg";
import featureBgOne from "../assets/feature-bg-symbol-1.svg";
import featureBgTwo from "../assets/feature-bg-symbol-2.svg";
import featureBgThree from "../assets/feature-bg-symbol-3.svg";

export const Hero = () => {
  return (
    <section className="relative">
      <div className="flex gap-20 h-full items-center p-20">
        <div className="flex flex-col w-[714px] gap-12">
          <h1 className="text-[72px] text-[#0F172A] font-bold leading-[79px]">
            Collectible Sneakers
          </h1>
          <p className="text-lg">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </p>
          <div className="flex gap-4 text-[#78350F]">
            <a
              href="#"
              className="text-xl font-medium leading-6 px-8 py-4 border-current border-2 rounded-lg"
            >
              Sign up now
            </a>
            <a
              href="#"
              className="flex gap-2 items-center w-fit text-base font-medium leading-6 px-3 py-2"
            >
              <img className="w-6" src={playIcon} alt="play icon" />
              <span className=""> Watch Demo</span>
            </a>
          </div>
        </div>

        <div className="w-[486px] select-none">
          <img src={heroSneakers} alt="Sneakers image" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[1280px] flex gap-20 text-[#0F172A] ">
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
            <p>
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
            <p>
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
            <p>
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
