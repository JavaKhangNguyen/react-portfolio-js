import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../../assets/CV_NPKhang.pdf";
import { bannerImg } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

const Left = ({ handleContactClick }) => {
  const [text] = useTypewriter({
    words: ["Front-end Developer", "Back-end Developer", "Full-stack Developer", "Web Developer", "IT Helpdesk"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">Nguyen Phuc Khang</h1>
          <p className="text-base font-medium text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <a
            href="https://github.com/JavaKhangNguyen" 
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor duration-300 cursor-pointer text-xl"
          >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          <a
            href="https://linkedin.com/in/ngpkhang" 
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor duration-300 cursor-pointer text-xl"
          >
              <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://facebook.com/JavaKhangNguyen" 
            target="_blank"
            rel="noreferrer"
            className="hover:text-designColor duration-300 cursor-pointer text-xl"
          >
              <FontAwesomeIcon icon={faFacebookF} />
          </a>
          </div>
        </div>
        <div className="flex h-12 mt-[-20px]">
          <a
            href={CV}
            download="CV_NguyenPhucKhang.pdf"
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
          <button className="w-full h-full flex justify-center items-center gap-2">
              <span className="text-lg">Download CV</span>
              <FontAwesomeIcon icon={faFileArrowDown} bounce />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide
            uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300" 
            onClick={handleContactClick}>
            <span className="text-lg">Contact me</span>  
            <FontAwesomeIcon icon={faPaperPlane} beatFade />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
