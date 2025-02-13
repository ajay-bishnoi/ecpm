import CommonHeadingBlack from "../common/CommonHeadingBlack";
import CommonParagraph from "../common/CommonParagraph";
import CommonButton from "../common/CommonButton";
import { SLIDER_CARDS_DATA } from "../../utils/helper";
import CommonOrangeHeading from "../common/CommonOrangeHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { SERVICES_TEXT_PATH_LINK } from "../../utils/constants";
import { NEXT_ARROW, PREV_ARROW } from "../common/Icon";
import { useEffect, useRef } from "react";

const HomepageServices = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <div>
      <div className="container max-w-[1180px]">
        <div className="max-sm:pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36 flex flex-col">
          <CommonOrangeHeading text="Service" className="text-center" />
          <CommonHeadingBlack
            text="Our Services"
            className="text-center mt-3"
          />
          <CommonParagraph
            text="Jaipur's top moving company, providing comprehensive packing and moving services like house, office, and vehicle shifting, warehousing, and goods insurance—all at affordable rates. Your one-stop solution for all relocation needs!"
            className="text-center max-sm:max-w-[450px] max-w-[678px] opacity-70 max-sm:mt-3 mx-auto mt-4"
          />
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides={true}
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {SLIDER_CARDS_DATA.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="max-lg:max-w-[420px] max-w-[364px] max-sm:min-h-[428px] max-md:min-h-[446px] min-h-[490px] h-full group overflow-hidden w-full border border-light-grey flex flex-col justify-between md:gap-[22px] gap-[18px] cursor-default"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-col md:gap-[22px] max-sm:gap-4 sm:gap-[18px] h-full justify-between">
                      <img
                        className="group-hover:scale-105 duration-300 ease-linear max-lg:max-w-[420px] max-w-[364px] w-full object-cover !h-[199px]"
                        src={item.image}
                        alt={item.imageAlt}
                        rel="preload"
                        width={364}
                        height={199}
                      />
                      <div
                        className={`flex flex-col items-center gap-4 xl:px-6 px-5 ${
                          index === 4 ? "max-md:px-[18px]" : ""
                        }`}
                      >
                        <h3
                          className={`text-dark-blue text-center font-medium leading-118 text-xl xl:text-custom-3xl `}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`mt-4 xl:px-6 px-5 ${
                        index === 2 ? "xl:px-[26px]" : ""
                      }`}
                    >
                      <CommonParagraph
                        text={`${item.description}`}
                        className="!text-off-blue max-md:text-sm text-center "
                      />
                    </div>
                  </div>
                  <div className="flex max-md:gap-3 gap-4 justify-center w-full xl:p-6 !p-5 !pt-0">
                    <Link
                      aria-label="Learn more about our services"
                      to={SERVICES_TEXT_PATH_LINK}
                      className="text-white bg-light-orange hover:shadow-[0px_0px_10px_0px_inset_#FD8447] max-md:max-w-[132px] hover:bg-transparent text-nowrap sm:py-3.5 !py-3 !px-6 hover:text-light-orange hover:border-light-orange max-w-[146px] max-sm:max-w-[130px] max-md:px-4 max-md:py-3 !w-full md:px-6 md:py-[14px] font-semibold !leading-118 border border-transparent duration-300 ease-linear"
                    >
                      Read More
                      <span className="sr-only">
                        Learn more about our services.
                      </span>
                    </Link>
                    <CommonButton
                      href="tel:+91 92262 18651"
                      text="Enquiry Now"
                      className="text-white bg-dark-blue hover:shadow-[0px_0px_10px_0px_inset_#141F3D] max-md:max-w-[132px] hover:bg-transparent text-nowrap sm:py-3.5 !py-3 !px-6 max-md:!px-4 hover:text-dark-blue hover:border-dark-blue max-w-[146px] max-sm:max-w-[130px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center gap-[26px] mt-7 justify-center">
            <button
              aria-label="prev"
              className="size-8 bg-white hover:bg-dark-blue swiper_button_prev ease-linear border-[2px] border-dark-blue duration-300 rounded-full group flex justify-center items-center"
            >
              <PREV_ARROW className="group-hover:fill-white" />
            </button>
            <button
              aria-label="next"
              className="size-8 bg-white hover:bg-light-orange swiper_button_next ease-linear border-[2px] border-light-orange duration-300 rounded-full group flex justify-center items-center"
            >
              <NEXT_ARROW className="group-hover:fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageServices;
