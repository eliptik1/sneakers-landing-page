import socials from "../assets/socials.svg";
import appStore from "../assets/app-store.svg";
import googlePlay from "../assets/google-play.svg";
import worldIcon from "../assets/world-icon.svg";

export const Footer = () => {
  return (
    <footer className="pt-12 px-20 bg-[#0F172A] w-full text-white flex flex-col items-center max-lg:px-10 max-md:px-4">
      <div className="max-w-[1280px] w-full flex justify-start  gap-12 pb-12 border-b border-[#334155] max-lg:flex-col ">
        <div className="flex [&>div]:max-w-[284px] w-full gap-12 max-lg:justify-center max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-full max-md:items-center">
            <a href="#" className="footer-main-link">
              Product
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Overview
            </a>
            <a href="#" className="footer-link">
              Browse
            </a>
            <a href="#" className="footer-link">
              Accessibility
            </a>
            <a href="#" className="footer-link">
              Five
            </a>
          </div>
          <div className="flex flex-col w-full max-md:items-center">
            <a href="#" className="footer-main-link">
              Solutions
            </a>
            <a href="#" className="footer-link">
              Brainstorming
            </a>
            <a href="#" className="footer-link">
              Ideation
            </a>
            <a href="#" className="footer-link">
              Wireframing
            </a>
            <a href="#" className="footer-link">
              Research
            </a>
            <a href="#" className="footer-link">
              Design
            </a>
          </div>
        </div>

        <div className="flex [&>div]:max-w-[284px] w-full gap-12 max-lg:justify-center max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-full max-md:items-center">
            <a href="#" className="footer-main-link">
              Support
            </a>
            <a href="#" className="footer-link">
              Contact Us
            </a>
            <a href="#" className="footer-link">
              Developers
            </a>
            <a href="#" className="footer-link">
              Documentation
            </a>
            <a href="#" className="footer-link">
              Integrations
            </a>
            <a href="#" className="footer-link">
              Reports
            </a>
          </div>
          <div className="flex flex-col items-start w-full max-md:items-center">
            <a
              href="#"
              className="hover:underline py-3 mb-2 leading-[17.6px] font-medium "
            >
              Get the App
            </a>
            <img
              className="mb-2 h-[46px] cursor-pointer"
              src={appStore}
              alt="app store icon"
            />
            <img
              className="h-[46px] cursor-pointer"
              src={googlePlay}
              alt="google play icon"
            />
            <a href="#" className="hover:underline mt-12 mb-3 leading-[22.4px]">
              Follow Us
            </a>
            <img
              className="cursor-pointer mt-2"
              src={socials}
              alt="social icons"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-full flex justify-between items-center py-6 max-md:py-12 max-md:flex-col max-md:gap-6 max-md:items-center">
        <div>Collers @ 2023. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Privacy
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
          <div className="flex gap-2">
            <img src={worldIcon} alt="language icon" />
            <a href="#" className="footer-link">
              EN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
