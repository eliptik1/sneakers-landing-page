import hamburgerMenu from "../assets/hamburger-menu.svg";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.getElementById("menu-drawer").style.transform =
        "translateX(0px)";
    } else {
      document.body.style.overflow = "auto";
      document.getElementById("menu-drawer").style.transform =
        "translateX(300px)";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.getElementById("menu-drawer").style.transform =
        "translateX(300px)";
    };
  });

  return (
    <header>
      <nav className="flex items-center justify-between text-[#78350F] px-20 py-6 max-lg:p-4 ">
        <div
          onClick={toggleMenu}
          className={`${
            isOpen ? "block" : "hidden"
          } fixed z-20 inset-0 bg-gray-950/50 backdrop-blur-[2px]`}
        ></div>
        <div
          id="menu-drawer"
          className="fixed z-20 right-0 w-[300px] top-0 bottom-0 bg-[#FEF3C7] transition-all duration-500 lg:hidden"
        >
          <button
            onClick={toggleMenu}
            className="text-[#78350F] absolute right-4 top-6 text-2xl font-extrabold"
          >
            ✕
          </button>
          <div className="p-4 mt-12 mx-6 flex flex-col gap-2 font-medium [&_a]:px-2 [&_a]:py-3">
            <a className="hover:underline" href="#">
              Products
            </a>
            <a className="hover:underline" href="#">
              Solutions
            </a>
            <a className="hover:underline" href="#">
              Pricing
            </a>
            <a className="hover:underline" href="#">
              Resources
            </a>
            <a className="hover:underline" href="#">
              Log in
            </a>
            <a
              href="#"
              className="border-current border-2 rounded-lg w-fit hover:underline"
            >
              Sign up now
            </a>
          </div>
        </div>
        <div className="font-bold text-[32px]">Collers</div>
        <div className="flex gap-4 font-medium [&_a]:px-2 [&_a]:py-3 max-lg:hidden">
          <a href="#" className="hover:underline">
            Products
          </a>
          <a className="hover:underline" href="#">
            Solutions
          </a>
          <a className="hover:underline" href="#">
            Pricing
          </a>
          <a className="hover:underline" href="#">
            Resources
          </a>
          <a className="hover:underline" href="#">
            Log in
          </a>
          <a
            href="#"
            className="border-current border-2 rounded-lg hover:underline"
          >
            Sign up now
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className={`lg:hidden ${isOpen ? "hidden" : "block"}`}
        >
          <img src={hamburgerMenu} alt="menu icon" />
        </button>
      </nav>
    </header>
  );
};
