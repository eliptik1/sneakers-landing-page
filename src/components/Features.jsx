import backlightsDesktop from "../assets/Backlights.svg";
import backlightsMobile from "../assets/Backlights-mobile.svg";
import featureCardOne from "../assets/feature-card-1.png";
import featureCardTwo from "../assets/feature-card-2.png";
import featureCardThree from "../assets/feature-card-3.png";
import shoppingCart from "../assets/shopping-cart.svg";

export const Features = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        className="absolute z-10 left-0 right-0 top-[180px] p-0 w-full h-full lg:hidden"
        src={backlightsMobile}
        alt="backlights"
      />
      <img
        className="absolute z-10 bottom-[56px] px-11 max-lg:hidden"
        src={backlightsDesktop}
        alt="backlights"
      />
      <div className="relative bg-[#0F172A] flex flex-col gap-20 p-20 max-lg:px-4 max-lg:py-12 max-lg:gap-8">
        <div className="flex justify-between text-[#FFF] max-lg:flex-col max-lg:items-center max-lg:gap-8">
          <h2 className="text-[56px] font-bold leading-[79px] max-lg:text-center max-lg:text-[32px] max-lg:leading-8">
            The best of the best
          </h2>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="text-xl font-medium leading-6 px-8 py-4 border-current border-2 rounded-lg text-nowrap hover:underline max-lg:text-2xl max-lg:px-12 max-lg:py-5"
            >
              Sign up now
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-[1280px] z-10 flex gap-12 text-[#FFF]  max-lg:flex-col [&>div]:max-lg:text-center [&>div]:max-lg:items-center max-lg:gap-8">
            <div className="feature-card">
              <img src={featureCardOne} alt="feature card one" />
              <div className="p-8 flex flex-col ">
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
              <div className="p-8 flex flex-col ">
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
              <div className="p-8 flex flex-col ">
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
