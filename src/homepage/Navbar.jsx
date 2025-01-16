import { Button, Dropdown, message, Space } from "antd";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaMoon, FaSun } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import { TbSettingsStar } from "react-icons/tb";
import { Modal, Form, Input } from "antd";
import Logo from "../assets/webLogo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
    setIsModalOpen(false);
    message.success("Sent Your Message");
  };
  const items = [
    {
      key: "1",
      label: "MENU",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <a href="#home">Home</a>,
      extra: "⌘H",
      icon: <FaHome />,
    },
    {
      key: "3",
      label: <a href="#features">Features</a> ,
      extra: "⌘F",
      icon: <TbSettingsStar />,
    },
    {
      key: "4",
      label: <a href="#testimonial">Testimonial</a> ,
      icon: <FaUsersGear />,
      extra: "⌘A",
    },
    {
      key: "5",
      label: <a href="#download">Download & Install</a>,
      icon: <SiBlogger />,
      extra: "⌘B",
    },
    {
      key: "6",
      label: (
        <span onClick={showModal} className="block lg:hidden">
          Contact Us
        </span>
      ),
      icon: (
        <span className="block lg:hidden">
          <RiContactsFill />
        </span>
      ),
      extra: <span className="block lg:hidden">⌘C</span>,
    },
  ];

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

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

  return (
    <div className="bg-primary-light dark:bg-primary-dark py-4">
      <header className="w-full flex justify-between items-center px-2 lg:px-5 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Website Logo" width={60} />
          <h1 className="text-3xl font-bold">Gittiom</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex items-center gap-4">
          {/* <Button
            onClick={showModal}
            className="bg-white font-semibold text-green-500 rounded-full hidden lg:block"
          >
            Contact Us
          </Button> */}
          <Button
            className="bg-white font-semibold text-green-500 rounded-full"
            onClick={() =>
              window.open(
                "https://gittiom.hunteats.com/#/login",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            LOGIN
          </Button>
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
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="font-extrabold">
                <CiMenuFries className="font-bold text-2xl" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
      {/* Modal */}
      <Modal
        title="Contact Us"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Remove default footer for custom actions
      >
        <Form
          name="contactForm"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 2, message: "Name must be at least 2 characters!" },
            ]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Navbar;
