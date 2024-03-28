import { Button,Form, Input } from "antd";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    checkFormValidity(e.target.value, email,password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkFormValidity(username, e.target.value,password);

  };
  

  const handlePasswordChange =(e) => {
    setPassword(e.target.value);
    checkFormValidity(username,email,e.target.value);
  };

  const checkFormValidity = (username,email,password) =>{
    if(username.trim() !== "" && email.trim() !== "" && password.trim() !== ""){
      setIsSubmitEnabled(true);
    }else{
      setIsSubmitEnabled(false);
    }
  };

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
        <Form.Item label="Username" name="username"
        rules={[{required: true, message: "Please input your username! "}]}>
          <Input onChange={handleUsernameChange} />
        </Form.Item>

        <Form.Item label="Email" name="email"
        rules={[{required: true, message: "Please input email! "}]}>
          <Input type="email" onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item label="Password" name="password"
        rules={[{required:true,message:"Please input your password!"}]}>
          <Input.Password onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit"
          disabled={!isSubmitEnabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      Already have an account?<Link to="/"> Login </Link>
    </div>
  );
};

export default Register;
