import locationIcon from "../assets/images/svg/location.svg";
import phoneIcon from "../assets/images/svg/phon.svg";
import messageIcon from "../assets/images/svg/message.svg";
import packing from "../assets/images/webp/packing.webp";
import houseShifting from "../assets/images/webp/house-shifting.webp";
import localShifting from "../assets/images/webp/local-shifiting.webp";
import officeShifting from "../assets/images/webp/office-shifting.webp";
import carTransportation from "../assets/images/webp/car-transportation.webp";
import warehouse from "../assets/images/webp/warehouse.webp";
import share from "../assets/images/webp/share-icon.webp";
import moving from "../assets/images/webp/moving-icon.webp";
import schedule from "../assets/images/webp/scheduele-icon.webp";
import go from "../assets/images/webp/go-icon.webp";
import van from "../assets/images/webp/van.webp";
import support from "../assets/images/webp/support.webp";
import cost from "../assets/images/webp/cost.webp";
import safe from "../assets/images/webp/safe.webp";
import door from "../assets/images/webp/door.webp";
import easy from "../assets/images/webp/easy.webp";
import team from "../assets/images/webp/team.webp";
import delivery from "../assets/images/webp/delivery.webp";

import {
  ABOUT_PATH_LINK,
  ABOUT_TEXT_PATH_LINK,
  ContactUs_PATH_LINK,
  ContactUs_TEXT_PATH_LINK,
  NETWORK_PATH_LINK,
  NETWORK_TEXT_PATH_LINK,
  PAYMENT_PATH_LINK,
  PAYMENT_TEXT_PATH_LINK,
  SERVICE_PATH_LINK,
  SERVICE_TEXT_PATH_LINK,
  SERVICES_TEXT_PATH_LINK,
  TRACKING_PATH_LINK,
  TRACKING_TEXT_PATH_LINK,
} from "./constants";
import {
  INFO_LOC_ICON,
  INFO_MAIL_ICON,
  INFO_PHONE_ICON,
} from "../components/common/Icon";

export const NAV_ITEMS_DATA = [
  {
    href: "/",
    text: "Home",
    className: "navItems",
  },
  {
    href: ABOUT_PATH_LINK,
    text: "About Us",
    className: "navItems",
  },
  {
    href: SERVICE_PATH_LINK,
    text: "Our Services",
    className: "navItems",
  },
  {
    href: TRACKING_PATH_LINK,
    text: "Tracking",
    className: "navItems",
  },
  {
    href: NETWORK_PATH_LINK,
    text: "Our Network",
    className: "navItems",
  },
  {
    href: PAYMENT_PATH_LINK,
    text: "Online Payment",
    className: "navItems",
  },
  {
    href: ContactUs_PATH_LINK,
    text: "Contact Us",
    className: "navItems",
  },
];
export const FOOTER_LINKS_DATA = [
  {
    title: "Home",
    footerItems: [
      {
        listItemName: "About Us",
        pathUrl: ABOUT_TEXT_PATH_LINK,
      },
      {
        listItemName: "Our Services",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
      {
        listItemName: "Tracking",
        pathUrl: TRACKING_TEXT_PATH_LINK,
      },
      {
        listItemName: "Our Network",
        pathUrl: NETWORK_TEXT_PATH_LINK,
      },
      {
        listItemName: "Online Payment",
        pathUrl: PAYMENT_TEXT_PATH_LINK,
      },
      {
        listItemName: "Contact Us",
        pathUrl: ContactUs_TEXT_PATH_LINK,
      },
    ],
  },
  {
    title: "Our Services",
    footerItems: [
      {
        listItemName: "House Shifting",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
      {
        listItemName: "Office Shifting",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
      {
        listItemName: "Local Shifting",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
      {
        listItemName: "Car Transportation",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
      {
        listItemName: "Warehouse and Storage",
        pathUrl: SERVICES_TEXT_PATH_LINK,
      },
    ],
  },
  {
    title: "Our Address",
    contact: [
      {
        icon: locationIcon,
        value:
          "D-5, Satya Colony, Tegor Nagar 200 fit ByPass, Ajmer Rd, Jaipur, Rajasthan 302021",
        href: "https://maps.app.goo.gl/vukqQTNahbxPTECu6",
      },
      {
        icon: phoneIcon,
        value: "+91-8094543434",
        href: "tel:+918094543434",
      },
      {
        icon: messageIcon,
        value: "info@ecpm.in",
        href: "mailto:info@ecpm.in",
      },
    ],
  },
];

export const SLIDER_CARDS_DATA = [
  {
    image: packing,
    imageAlt: "packing",
    title: "Packing and Moving",
    content:
      "We have Well trained and Experienced Packing Staff for safe and Secure Packing & Moving.",
    description:
      "With years of experience under our belts, our packing and moving services are second to none. From houses to offices, we can easily transport everything - all we need to know about is where your new address lies before packing!",
  },
  {
    image: houseShifting,
    imageAlt: "houseShifting",
    title: "House Shifting Services",
    description:
      "Here, we differentiate ourselves by taking special care in packing household goods along with your clothing and books so they remain undamaged during transport to their new destination. With this approach to household shifting (Jaipur), we make moving home simpler!",
  },
  {
    image: officeShifting,
    imageAlt: "officeShifting",
    title: "Office Shifting Services",
    description:
      "No matter if it's just the furniture in your house and office that needs moving or all of it at once! One constant is our Jaipur Packers and Movers services, which are top-of-the-line, customer-friendly, and customizable to suit any need.",
  },
  {
    image: carTransportation,
    imageAlt: "carTransportation",
    title: "Car Transportation Service",
    description:
      "We are Offering Car Transportation Services in India. We have Team of Professionals who have many years of experience in Car Transportation Service.",
  },
  {
    image: localShifting,
    imageAlt: "localShifting",
    title: "Local Shifting Services",
    description:
      "We are Offering Local Shifting Services in India. We have Team of Professionals who have many years of experience in Local Shifting Service.",
  },
  {
    image: warehouse,
    imageAlt: "warehouse",
    title: "Warehouse and Storage",
    description:
      "We are Offering Warehouse and Storage Services in India. We have Team of Professionals who have many years of experience in Warehouse and Storage Service.",
  },
];
export const PROCESS_CARDS_DATA = [
  {
    image: share,
    title: "Share your Moving needs",
    description: "Let us know where and when would you like to move.",
  },
  {
    image: moving,
    title: "Get Free Moving Estimate",
    description: "We Ensured best price quote for your moving immediately.",
  },
  {
    image: schedule,
    title: "Schedule and Confirm",
    description: "Schedule date and pay a token amount to confirm your move.",
  },
  {
    image: go,
    title: "We get you moved!",
    description: "We will arive as per schedule to pack & move your goods.",
  },
];
export const WHY_US_CARDS_DATA = [
  {
    image: van,
    title: "SWide variety of transportation services",
  },
  {
    image: support,
    title: "24/7 Customer Support",
  },
  {
    image: cost,
    title: "Affordable Cost",
  },
  {
    image: safe,
    title: "Safe and Economical Service",
  },
  {
    image: door,
    title: "All India Door to Door Service",
  },
  {
    image: easy,
    title: "Easy Payment Options",
  },
  {
    image: team,
    title: "Highly Experienced and professional Team",
  },
  {
    image: delivery,
    title: "On-time Delivery",
  },
];

export const MOVE_SIZE_DATA = ["1 BHK", "2 BHK", "3 BHK", "Villa"];
export const PAYMENT_DATA_LIST = [
  {
    name: "NAME",
    value: "Express Cargo Packers and Movers",
  },
  {
    name: "A/C",
    value: "919020046066230",
  },
  {
    name: "Bank",
    value: "Axis Bank",
  },
  {
    name: "Branch",
    value: "Nirman Nagar",
  },
  {
    name: "IFSC Code",
    value: "UTIB0003235",
  },
  {
    name: "Mobile Number",
    value: "+91 9887128000",
  },
];

export const INFO_DATA = [
  {
    icon: INFO_PHONE_ICON,
    value: "  +91- 8094543434",
    url: "tel:+91 8094543434",
  },
  {
    icon: INFO_MAIL_ICON,
    value: "info@ecpm.in",
    url: "mailto:info@ecpm.in",
  },
  {
    icon: INFO_LOC_ICON,
    value: "D-5, Satya Colony, Tegor Nagar 200 fit ByPass, Ajmer Rd, Jaipur, Rajasthan 302021, India",
    url: "https://maps.app.goo.gl/vukqQTNahbxPTECu6",
  },
];
