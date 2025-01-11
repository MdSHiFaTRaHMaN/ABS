import "tailwindcss/tailwind.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/webLogo.png"
const Footer = () => {
  return (
    <footer className="bg-green-500 dark:bg-primary-dark text-white dark:text-gray-100 py-8 pt-0 lg:pt-10">
      {/* Left Section: Logo and Description */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6 md:mb-0 w-10/12 mx-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <div className=" text-green-500 p-2 dark:bg-gray-700 dark:text-green-400">
            <img src={Logo} className="font-bold text-xl p-2" width={100}/>
          </div>
          <h1 className="text-3xl font-bold">Gittiom</h1>
        </div>
        <p className="text-center md:text-left max-w-sm md:ml-6">
          CashEase is an e-wallet app that allows you to store money, make
          payments, and perform other financial transactions electronically
          through your mobile device.
        </p>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-10/12 mx-auto h-px bg-white my-6 dark:bg-gray-600"></div>

      {/* Right Section: Social Icons and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center w-10/12 mx-auto">
        <p className="text-sm text-center md:text-right mb-4 md:mb-0">
          &copy; 2023 CashEase | All Rights Reserved
        </p>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            className="bg-white text-green-500 p-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-white text-green-500 p-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-white text-green-500 p-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-white text-green-500 p-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-white text-green-500 p-2 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-green-400 dark:hover:bg-gray-600"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
