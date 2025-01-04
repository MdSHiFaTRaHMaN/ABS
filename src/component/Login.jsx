import { Modal, Form, Input, message } from "antd";

const Login = ({ isLoginModalOpen, handleCancel }) => {

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Logged in successfully!");
    handleCancel(); // Close the modal after successful login
  };

  return (
    <Modal
      title="Login"
      open={isLoginModalOpen}
      onCancel={handleCancel}
      footer={null} // Remove default footer buttons
    >
      <Form
        name="login_form"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Login
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
