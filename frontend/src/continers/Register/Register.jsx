import { Button, Checkbox, Form, Input } from "antd";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="register-container">
      <h1>Register</h1>
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

        <Form.Item label="Email" name="email">
          <Input type="email" />
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
      Already have an account?<Link to="/"> Login </Link>
    </div>
  );
};

export default Register;
