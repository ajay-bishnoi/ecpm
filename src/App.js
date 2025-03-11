import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import GetFreeQuote from "./components/common/GetFreeQuote";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";
import Payment from "./components/pages/Payment";
import Network from "./components/pages/Network";
import Tracking from "./components/pages/Tracking";
import AboutUs from "./components/pages/AboutUs";
import BillsPage from "./components/pages/BillsPage";
import {
  ABOUT_PATH_LINK,
  BILL_PATH_LINK,
  ContactUs_PATH_LINK,
  NETWORK_PATH_LINK,
  PAYMENT_PATH_LINK,
  SERVICE_PATH_LINK,
  TRACKING_PATH_LINK,
} from "./utils/constants";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ABOUT_PATH_LINK} element={<AboutUs />} />
        <Route path={SERVICE_PATH_LINK} element={<Services />} />
        <Route path={TRACKING_PATH_LINK} element={<Tracking />} />
        <Route path={NETWORK_PATH_LINK} element={<Network />} />
        <Route path={PAYMENT_PATH_LINK} element={<Payment />} />
        <Route path={BILL_PATH_LINK} element={<BillsPage />} />
        <Route path={ContactUs_PATH_LINK} element={<ContactUs />} />
      </Routes>
      <GetFreeQuote />
      <Footer />
    </>
  );
}

export default App;
