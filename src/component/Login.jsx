import { Form, Input, Button, Typography, Card, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Logged in successfully!");
    navigate("/")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Card
        className="shadow-lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>
          Welcome Back!
        </Title>
        <Text type="secondary" style={{ textAlign: "center", display: "block", marginBottom: "20px" }}>
          Please login to your account
        </Text>
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
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Enter your email"
              className="rounded"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Enter your password"
              className="rounded"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{
                backgroundColor: "#6C5CE7",
                borderColor: "#6C5CE7",
                borderRadius: "5px",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
