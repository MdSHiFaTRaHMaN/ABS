import { Button, Drawer, Menu } from "antd";
import { useEffect, useState } from "react";
import {
  FaHandsHelping,
  FaInternetExplorer,
  FaLightbulb,
  FaMobileAlt,
  FaMoneyBillWave,
  FaMoon,
  FaSchool,
  FaStore,
  FaSun,
  FaTruck,
  FaTv,
  FaUnity,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../assets/webLogo.png";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoMdAirplane } from "react-icons/io";
import { BsDatabaseFillGear } from "react-icons/bs";
import { LuCable } from "react-icons/lu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // Add or remove the dark class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [visible, setVisible] = useState(false); // Drawer visibility state

  const showDrawer = () => {
    setVisible(true); // Show the drawer
  };

  const onClose = () => {
    setVisible(false); // Close the drawer
  };

  const productList = [
    {
      id: 1,
      name: "Airtime",
      code: "AIRTIME",
      description: "Airtime",
      country_code: "NG",
      icon: <IoMdAirplane />,
      color: "#16A34A",
    },
    {
      id: 2,
      name: "Mobile Data Service",
      code: "MOBILEDATA",
      description: "Mobile Data Service",
      country_code: "NG",
      icon: <BsDatabaseFillGear />,
      color: "#33FF57",
    },
    {
      id: 3,
      name: "Cable Bill Payment",
      code: "CABLEBILLS",
      description: "Cable Bill Payment",
      country_code: "NG",
      icon: <LuCable />,
      color: "#5733FF",
    },
    {
      id: 4,
      name: "Internet Service",
      code: "INTSERVICE",
      description: "Internet Service",
      country_code: "NG",
      icon: <FaInternetExplorer />,
      color: "#FF33A6",
    },
    {
      id: 5,
      name: "Utility Bills",
      code: "UTILITYBILLS",
      description: "Utility Bills",
      country_code: "NG",
      icon: <FaLightbulb />,
      color: "#33FFF5",
    },
    {
      id: 6,
      name: "Tax Payment",
      code: "TAX",
      description: "Tax Payment",
      country_code: "NG",
      icon: <FaMoneyBillWave />,
      color: "#FFB833",
    },
    {
      id: 8,
      name: "Transport and Logistics",
      code: "TRANSLOG",
      description: "Transport and Logistics",
      country_code: "NG",
      icon: <FaTruck />,
      color: "#33FF8C",
    },
    {
      id: 9,
      name: "Dealer Payments",
      code: "DEALPAY",
      description: "Dealer Payments",
      country_code: "NG",
      icon: <FaStore />,
      color: "#F533FF",
    },
    {
      id: 12,
      name: "Airtime",
      code: "AIRTIME",
      description: "Airtime",
      country_code: "KE",
      icon: <FaMobileAlt />,
      color: "#3333FF",
    },
    {
      id: 13,
      name: "Cable Bill Payment",
      code: "CABLEBILLS",
      description: "Cable Bill Payment",
      country_code: "KE",
      icon: <FaTv />,
      color: "#FF33D4",
    },
    {
      id: 14,
      name: "Utility Bills",
      code: "UTILITYBILLS",
      description: "Utility Bills",
      country_code: "KE",
      icon: <FaLightbulb />,
      color: "#33FFF2",
    },
    {
      id: 15,
      name: "Mobile Money",
      code: "MOBILEMONEY",
      description: "Mobile Money",
      country_code: "ZM",
      icon: <FaMoneyBillWave />,
      color: "#FFC733",
    },
    {
      id: 17,
      name: "Religious Institutions",
      code: "RELINST",
      description: "Religious Institutions",
      country_code: "NG",
      icon: <FaUnity />,
      color: "#33FFA3",
    },
    {
      id: 18,
      name: "Schools & Professional Bodies",
      code: "SCHPB",
      description: "Schools & Professional Bodies",
      country_code: "NG",
      icon: <FaSchool />,
      color: "#FF338F",
    },
  ];

  return (
    <div className="bg-primary-light dark:bg-primary-dark py-4">
      <header className="w-full flex justify-between items-center px-2 lg:px-5 text-white">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Website Logo" width={60} />
            <h1 className="text-3xl font-bold">Gittiom</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center gap-4">
          <Button
            className="bg-white font-semibold text-green-500 rounded-full"
            onClick={() =>
              window.open(
                "https://app.gittiom.com/index.html",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            LOGIN
          </Button>
          <button className="bg-green-500 text-2xl" onClick={showDrawer}>
            <RiMenu3Line />
          </button>
          <button
            onClick={toggleDarkMode}
            className="hidden items-center gap-2 px-2.5 py-2.5 rounded-full shadow-lg bg-white dark:bg-yellow-500 text-yellow-900 dark:text-black font-medium transition-all duration-300 transform hover:scale-110 hover:rotate-12 active:scale-95"
          >
            {/* Icon change based on darkMode state */}
            {darkMode ? (
              <FaSun className="text-xl animate-pulse" />
            ) : (
              <FaMoon className="text-xl animate-pulse" />
            )}
          </button>
        </div>
      </header>

      <Drawer
        placement="top"
        onClose={onClose}
        open={visible}
        className="w-full h-screen"
        title={
          <div className="flex items-center justify-between">
            <Link
              to="/"
              // onClick={closeDrawer}
              className="flex items-center space-x-2 text-xl font-bold"
            >
              <img
                src={Logo}
                alt="Logo"
                width={40}
                className="rounded-full bg-green-600"
              />
              <span className="font-semibold font-mono text-2xl">Gittiom</span>
            </Link>
          </div>
        }
        closeIcon={
          <CgClose
            style={{
              fontSize: "18px",
              color: "black",
              fontWeight: "bold",
              position: "absolute",
              right: "16px",
            }}
          />
        }
        headerStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        style={{
          top: "0",
          height: "100vh",
          paddingTop: "0",
          overflowY: "auto",
        }}
      >
        <Menu mode="inline" className="text-gray-700 font-medium bg-gray-50">
          <Menu.Item key="home-mobile">
            <Link
              to="/"
              onClick={onClose}
              className="text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="Product"
            title={<span className="text-gray-800">Product</span>}
            popupClassName="mobile-submenu"
            className=""
          >
            {/* <Menu.Item key="ecommerce">  */}
            {productList.map((list) => (
              <Link
                key={list.id}
                onClick={onClose}
                className="hover:text-blue-500 flex gap-y-4 items-center space-x-3 bg-gray-200 p-1 rounded-lg my-2"
              >
                {/* আইকনের জন্য */}
                <span style={{ color: list.color }} className="text-3xl p-1">
                  {list.icon}
                </span>
                <div>
                  <h2 className="text-lg font-semibold">{list.name}</h2>
                  <p className="text-sm text-gray-600">{list.description}</p>
                </div>
              </Link>
            ))}
          </Menu.SubMenu>
          <Menu.Item key="aboutus-mobile">
            <a
              href="#testimonial"
              onClick={onClose}
              className="text-gray-700 hover:text-blue-500"
            >
              About Us
            </a>
          </Menu.Item>
          <Menu.Item key="contact-mobile">
            <Link
              to="/term&condition"
              onClick={onClose}
              className="text-gray-700 hover:text-blue-500"
            >
              Term & Condition
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
