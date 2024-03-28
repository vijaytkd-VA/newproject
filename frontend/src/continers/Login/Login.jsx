import { Button, Checkbox, Form, Input } from "antd";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    // You can add your login logic here
  };

  const validateForm = async () => {
    try {
      const values = await form.validateFields();
      setIsFormValid(true);
    } catch (error) {
      setIsFormValid(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form
        form={form}
        layout="vertical"
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        onValuesChange={validateForm}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!isFormValid}
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
