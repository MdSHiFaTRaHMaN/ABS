import { Button, Dropdown, message, Space } from "antd";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { SiBlogger } from "react-icons/si";
import { TbSettingsStar } from "react-icons/tb";
import {  Modal, Form, Input } from "antd";
import ABS from "../assets/ABS.png"

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
    message.success("Sent Your Message")
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
      label: "Home",
      extra: "⌘H",
      icon: <FaHome />,
    },
    {
      key: "3",
      label: "Features",
      extra: "⌘F",
      icon: <TbSettingsStar />,
    },
    {
      key: "4",
      label: "About Us",
      icon: <FaUsersGear />,
      extra: "⌘A",
    },
    {
      key: "5",
      label: "Blog",
      icon: <SiBlogger />,
      extra: "⌘B",
    },
    {
      key: "6",
      label: <span onClick={showModal} className="block lg:hidden">Contact Us</span>,
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

  return (
    <div className="bg-green-500 py-4">
      <header className="w-full flex justify-between items-center px-5 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src={ABS} alt="" width={60} />
        <h1 className="text-2xl md:text-4xl font-bold">ABS</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex gap-4">
          <Button
            onClick={showModal}
            className="bg-white font-semibold text-green-500 rounded-full hidden lg:block"
          >
            Contact Us
          </Button>
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
