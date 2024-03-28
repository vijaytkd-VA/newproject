import { Button, Form, Input } from "antd";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    checkFormValidity(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkFormValidity(username, e.target.value);
  };

  const checkFormValidity = (username, password) => {
    if (username.trim() !== "" && password.trim() !== "") {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  const onFinish = (values) => {
    console.log(values);
    // You can add your login logic here
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={handleUsernameChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!isSubmitEnabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/register">Create a new account</Link>
    </div>
  );
};

export default Login;
