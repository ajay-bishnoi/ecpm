import React from "react";
import { FOOTER_LINKS_DATA } from "../../utils/helper";
import footerLogo from "../../assets/images/webp/logo-ecpm.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-12 md:pt-16 lg:pt-20 bg-dark-blue">
      <div className="container max-w-[1180px]">
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap">
            <div className="w-full lg:w-4/12 flex flex-col">
              <div className="max-sm:flex-col max-sm:items-start max-lg:flex max-lg:items-center">
                <div className="flex flex-col">
                  <a className="w-fit" href="/">
                    <img
                      rel="preload"
                      src={footerLogo}
                      alt="logo"
                      width={69}
                      height={80}
                      className="w-fit xl:h-[70px] h-20 "
                    />
                  </a>
                  <p className="mt-4 max-sm:text-sm lg:max-w-[314px] text-white opacity-70 font-normal text-base !leading-135">
                  Express Cargo Packers And Movers Have Highly Dedicated And Committed Young Professionals On Our Team, Our Expertise Team Has In-Depth Knowledge Of Packaging And Moving.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 max-lg:my-10 flex lg:justify-end">
              <div className="flex max-md:flex-wrap justify-between xl:gap-10 gap-7 lg:max-w-[745px] w-full">
                {FOOTER_LINKS_DATA.map((obj, index) => (
                  <ul
                    key={index}
                    className={`${
                      index === 2
                        ? "w-full max-w-[340px] sm:max-w-[292px]"
                        : "max-sm:max-w-[250px] max-w-[292px]"
                    }`}
                  >
                    <li className="font-medium text-white text-lg leading-116 md:mb-5 mb-4">
                      {obj.title}
                    </li>
                    {obj.contact
                      ? obj.contact.map((info, contactIndex) => (
                          <li key={index} className="md:mb-4 mb-3 ">
                            <a
                              key={`${obj.title}-${contactIndex}`}
                              href={info.href}
                              target="_blank"
                              className="flex items-start gap-2 text-white max-md:text-sm opacity-70 duration-300 ease-linear hover:opacity-100 text-base leading-118 font-normal"
                            >
                              <img
                                className="w-[25px] h-[25px]"
                                src={info.icon}
                                alt="icon"
                              />
                              <span>{info.value}</span>
                            </a>
                          </li>
                        ))
                      : obj.footerItems.map((data, itemIndex) => (
                          <li key={index} className="md:mb-4 mb-3 ">
                            <Link
                              key={`${data.listItemName}-${itemIndex}`}
                              to={data.pathUrl}
                              className="max-sm:break-words max-sm:whitespace-normal cursor-pointer text-white max-md:text-sm opacity-70 duration-300 ease-linear hover:opacity-100 text-base leading-118 font-normal"
                            >
                              {data.listItemName}
                            </Link>
                          </li>
                        ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white opacity-10 mb-[15px]"></div>
          <span className="mx-auto text-base leading-125 font-normal max-sm:text-sm text-white opacity-70 text-center pb-[15px]">
            Copyrights © Express Cargo, All rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
