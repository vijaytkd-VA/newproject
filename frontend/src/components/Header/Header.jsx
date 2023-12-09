import "./Header.scss";
import { Layout, Menu } from "antd";
const { Header: NavBar } = Layout;


const menuItems = [
  {
    key: "/login",
    label: "Login",
  },
  {
    key: "/",
    label: "Home",
  }

];

const Header = () => {
  return (
    <header className="blog-header">
      <NavBar className="navbar">
        {/* <div className="demo-logo" /> */}
        <span>BlogApp</span>
        <Menu
          theme="light"
          mode="horizontal"
          items={menuItems}
        />
      </NavBar>
    </header>
  );
};

export default Header;