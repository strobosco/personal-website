import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="section link-div">
      <p className="footer-text">Connect with me!</p>
      <div className="footer-links">
        <a href="https://linkedin.com/in/niccolonobili">
          <FaLinkedin />
        </a>
        <a href="https://github.com/strobosco">
          <FaGithub />
        </a>
        <a href="mailto:nobilicareers@gmail.com">
          <AiOutlineMail />
        </a>
        <a>
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
