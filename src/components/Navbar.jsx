import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="mailto:Omar@gmail.com" className="message">
        <div className="message-icon-container">
          <AiOutlineMail className="message-i" />
        </div>
        <p>get in touch</p>
      </a>
      <Menu />
    </nav>
  );
};

export default Navbar;
