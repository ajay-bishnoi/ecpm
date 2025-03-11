/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      colors: {
        "dark-blue": "#141F3d",
        "light-orange": "#FD8447",
        "light-grey": "#E5E6EA",
        "transparent-orange": "#FD84479E",
        "off-grey": "#F9F9F9",
        "mix-grey": "#8D8D8D",
        "off-blue": "#5B6277",
      },
      fontSize: {
        "custom-8xl": "56px",
        "custom-6xl": "40px",
        "custom-3xl": "22px",
        "custom-4xl": "28px",
      },
      backgroundImage: {
        hero: "url(./assets/images/webp/hero-homepage.webp)",
        about: "url(./assets/images/webp/hero-about.webp)",
        bill: "url(./assets/images/webp/hero-bill.webp)",
        services: "url(./assets/images/webp/hero-services.webp)",
        tracking: "url(./assets/images/webp/hero-tracking.webp)",
        network: "url(./assets/images/webp/hero-network.webp)",
        payment: "url(./assets/images/webp/hero-payment.webp)",
        contact: "url(./assets/images/webp/hero-contact.webp)",
      },
      lineHeight: {
        116: "116%",
        118: "118%",
        119: "119%",
        120: "120%",
        125: "125%",
        135: "135%",
        166: "166%",
      },
      boxShadow: {
        "service-cards": "0px 0px 17.3px 0px #141F3D14",
        "quote-cards": "0px 4px 8.5px 4px #141F3D1A",
        "orange-box": "0px 0px 21.5px 6px #0000001C",
        "info-cards": "0px 0px 10.7px 2px #0000000D",
        "free-quote": "0px 0px 21.5px 6px #0000001C",
      },
    },
  },
  plugins: [],
};
