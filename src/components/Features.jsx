import backlightsDesktop from "../assets/Backlights.svg";
import backlightsMobile from "../assets/Backlights-mobile.svg";
import featureCardOne from "../assets/feature-card-1.png";
import featureCardTwo from "../assets/feature-card-2.png";
import featureCardThree from "../assets/feature-card-3.png";
import shoppingCart from "../assets/shopping-cart.svg";

export const Features = () => {
  return (
    <section className="flex justify-center relative overflow-hidden bg-[#0F172A]">
      <img
        className="absolute z-10 left-0 right-0 top-[180px] p-0 w-full h-full md:hidden"
        src={backlightsMobile}
        alt="backlights"
      />
      <img
        className="absolute z-10 bottom-[56px] px-11 max-md:hidden"
        src={backlightsDesktop}
        alt="backlights"
      />
      <div className="max-w-[1440px] w-full relative z-20 flex flex-col gap-20 lg:p-20 max-[500px]:px-4 max-lg:py-12 md:px-8 max-lg:gap-8">
        <div className="w-full flex justify-between text-[#FFF] max-lg:flex-col max-lg:items-center max-lg:gap-8">
          <h2 className="text-[56px] font-bold leading-[79px] max-md:text-center max-md:text-[32px] max-md:leading-8">
            The best of the best
          </h2>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="text-xl font-medium leading-6 px-8 py-4 border-current border-2 rounded-lg text-nowrap hover:underline max-md:text-2xl max-md:px-12 max-md:py-5"
            >
              Sign up now
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full z-10 flex gap-12 text-[#FFF]  max-md:flex-col [&>div]:max-sm:text-center [&>div]:max-sm:items-center max-sm:gap-8">
            <div className="feature-card">
              <img src={featureCardOne} alt="feature card one" />
              <div className="feature-card-container">
                <h4 className="feature-card-title ">Title</h4>
                <p className="feature-card-text ">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <a href="#" className="feature-card-button ">
                  <img
                    className="w-6"
                    src={shoppingCart}
                    alt="shopping cart icon"
                  />
                  <span className="leading-6">Buy Now</span>
                </a>
              </div>
            </div>
            <div className="feature-card">
              <img src={featureCardTwo} alt="feature card two" />
              <div className="feature-card-container">
                <h4 className="feature-card-title">Title</h4>
                <p className="feature-card-text">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <a href="#" className="feature-card-button">
                  <img
                    className="w-6"
                    src={shoppingCart}
                    alt="shopping cart icon"
                  />
                  <span className="leading-6">Buy Now</span>
                </a>
              </div>
            </div>
            <div className="feature-card">
              <img src={featureCardThree} alt="feature card three" />
              <div className="feature-card-container">
                <h4 className="feature-card-title">Title</h4>
                <p className="feature-card-text">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <a href="#" className="feature-card-button">
                  <img
                    className="w-6"
                    src={shoppingCart}
                    alt="shopping cart icon"
                  />
                  <span className="leading-6">Buy Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
