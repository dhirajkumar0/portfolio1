import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiOutlineDribbble } from "@react-icons/all-files/ai/AiOutlineDribbble";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
const Menu = () => {
  return (
    <>
      <u className="menu">
        <li>
          <a href="">linkedin &nbsp;&nbsp;/</a>
        </li>
        <li>
          <a href="">dribble &nbsp;&nbsp;/</a>
        </li>
        <li>
          <a href="">instagram</a>
        </li>
      </u>
      <u className="small-menu">
        <li>
          <a href="">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <AiOutlineDribbble />
          </a>
        </li>
        <li>
          <a href="">
            <AiOutlineInstagram />
          </a>
        </li>
      </u>
    </>
  );
};

export default Menu;
