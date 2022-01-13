import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="section link-div">
      <p className="footer-text">Connect with me!</p>
      <div className="footer-links">
        <a
          href="https://linkedin.com/in/niccolonobili"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/strobosco"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:nobilicareers@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiOutlineMail />
        </a>
        <a href="./resume.pdf" rel="noopener noreferrer" target="_blank">
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
