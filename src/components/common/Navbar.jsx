import React, { useEffect, useState } from "react";
import { NAV_ITEMS_DATA } from "../../utils/helper";
import CommonButton from "./CommonButton";
import logo from "../../assets/images/webp/ecpm-logo.webp";
import phon from "../../assets/images/svg/phon.svg";
import message from "../../assets/images/svg/message.svg";
import phonPlus from "../../assets/images/svg/phon-plus.svg";
import whatsapp from "../../assets/images/svg/whatsapp.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClick = (e, id) => {
    const element = document.getElementById(id);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (window.innerWidth < 1280) {
      setShow(!show);
    }
  };

  const location = useLocation();

  return (
    <div className="flex flex-col">
      <div className="bg-light-orange max-md:pb-0 py-[10px]">
        <div className="mx-auto px-5 max-w-[1180px] w-full">
          <div className="flex max-xl:justify-center xl:justify-between items-center">
            <a href="/" className="max-xl:hidden">
              <img
                loading="lazy"
                className="w-fit object-contain h-[51px]"
                src={logo}
                width={44}
                height={51}
                alt="logo"
              />
            </a>
            <div className="flex items-center gap-[30px] max-md:w-[660px] max-md:overflow-x-scroll max-md:pb-2">
              <a
                target="blank"
                href="tel:+91 8094543434"
                className="flex gap-[10px] items-center"
              >
                <img
                  className="w-[22px] duration-300 ease-linear hover:scale-105 h-[22px]"
                  src={phon}
                  alt="phone"
                />
                <span className="font-normal text-base leading-118 text-white text-nowrap">
                +91-8094543434
                </span>
              </a>
              <span className="h-5 w-[1px] bg-white"></span>
              <a
                target="blank"
                href="mailto:info@ecpm.in"
                className="flex gap-[10px] items-center"
              >
                <img
                  className="w-[22px] duration-300 ease-linear hover:scale-105 h-[22px]"
                  src={message}
                  alt="message"
                />
                <span className="font-normal text-base leading-118 text-white text-nowrap">
                info@ecpm.in	
                </span>
              </a>
              <span className="h-5 w-[1px] bg-white"></span>

              <a href="tel:+91- 8094543434" target="blank">
                <img
                  width={27}
                  height={27}
                  className="min-w-[27px] duration-300 ease-linear hover:scale-105 h-[27px]"
                  src={phonPlus}
                  alt="phone"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918094543434&text=&source=&data="
                target="blank"
              >
                <img
                  width={27}
                  height={27}
                  className="min-w-[27px] duration-300 ease-linear hover:scale-105 h-[27px]"
                  src={whatsapp}
                  alt="whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1180px]">
        <div className="flex justify-between items-center py-2 sm:py-4 w-full">
          <a className="xl:hidden" href="/">
            <img
              className="w-fit object-contain h-[70px]"
              src={logo}
              alt="logo"
              width={50}
              height={70}
              rel="preload"
            />
          </a>
          <ul
            className={`flex flex-col xl:flex-row items-center sm:gap-6 gap-3 max-xl:fixed max-xl:justify-center top-0 max-xl:-right-full max-xl:z-[90] max-xl:h-screen max-xl:w-full max-xl:duration-300 bg-white ${
              show ? "" : " !end-0"
            }`}
          >
            {NAV_ITEMS_DATA.map((item, index) => (
              <li key={index} className="text-nowrap">
                <Link
                  to={item.href}
                  onClick={(e) => handleClick(e, item.href.substring(1))}
                  className={`nav-items ${
                    location.pathname === item.href ||
                    (item.href !== "/" && location.pathname.includes(item.href))
                      ? "text-light-orange"
                      : ""
                  } `}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="w-full text-center md:hidden">
              <CommonButton
                href="tel:+91-9226218651"
                text="Enquiry Now"
                className="bg-light-orange text-white max-w-[146px]  text-nowrap hover:text-light-orange hover:border-light-orange hover:bg-white hover:shadow-[0px_0px_10px_0px_inset_#FD8447]"
              />
            </li>
            <li className="w-full text-center md:hidden">
              <CommonButton
                href="https://api.whatsapp.com/send?phone=919226218651&text=&source=&data="
                target="blank"
                text="Chat Now"
                className="bg-dark-blue max-sm:text-sm text-white max-w-[146px] hover:text-dark-blue hover:border-dark-blue hover:bg-white hover:shadow-[0px_0px_10px_0px_inset_#141F3D]"
              />
            </li>
          </ul>
          <div className="flex items-center sm:gap-6 gap-3 w-full justify-end">
            <div className="flex items-center gap-7 justify-end max-sm:hidden w-full">
              <CommonButton
                href="tel:+91- 9226218651"
                text="Enquiry Now"
                className="bg-light-orange max-sm:text-sm text-white max-w-[146px]  text-nowrap hover:text-light-orange hover:border-light-orange hover:bg-white hover:shadow-[0px_0px_10px_0px_inset_#FD8447]"
              />
              <CommonButton
                href="https://api.whatsapp.com/send?phone=919226218651&text=&source=&data="
                target="blank"
                text="Chat Now"
                className="bg-dark-blue max-sm:text-sm text-white max-w-[146px] hover:text-dark-blue hover:border-dark-blue hover:bg-white hover:shadow-[0px_0px_10px_0px_inset_#141F3D]"
              />
            </div>
            <div
              class={`cursor-pointer relative z-[100] xl:hidden max-sm:scale-75 ${
                show ? "" : "cross"
              }`}
              onClick={() => setShow(!show)}
            >
              <span class="nav-toggle-items"></span>
              <span class="nav-toggle-items my-2"></span>
              <span class="nav-toggle-items"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
