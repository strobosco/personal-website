import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="container nav-bar">
      <p className="heading">Niccolo Nobili</p>
      <div className="link-div">
        <a href="https://linkedin.com/in/niccolonobili">
          <FaLinkedin />
        </a>
        <a href="https://github.com/strobosco">
          <FaGithub />
        </a>
        <a href="mailto:nobilicareers@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
