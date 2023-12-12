 import { Button, Checkbox, Form, Input } from "antd";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log(values);
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
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/register">Creat a new account </Link>
    </div>
  );
};

export default Login;
