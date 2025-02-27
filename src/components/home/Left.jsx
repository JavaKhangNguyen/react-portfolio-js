import React, { useState, useEffect } from "react";
import { Textillate } from "textillate-react";
import bannerImgJpg from "../../assets/CV.jpg";
import bannerImgWebp from "../../assets/CV.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Resizer from "react-image-file-resizer";

const Left = ({ handleContactClick }) => {
  const roles = ["Front-end Developer"];
  // const roles = [, "Front-end Developer", "Back-end Developer", "Full-stack Developer", "Web Developer"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); 
  const [resizedImage, setResizedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setAnimateKey((prevKey) => prevKey + 1); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [roles.length]);

  useEffect(() => {
    const resizeImage = (imgSrc, format = "WEBP", quality = 90, maxWidth = 600, maxHeight = 600) => {
      Resizer.imageFileResizer(
        imgSrc,
        maxWidth, 
        maxHeight,
        format, 
        quality,
        0, 
        (uri) => {
          setResizedImage(uri);
        },
        "base64" 
      );
    };

    fetch(bannerImgJpg)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "image.jpg", { type: "image/jpeg" });
        resizeImage(file);
      });
  }, []);

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl overflow-y-scroll scrollbar-none shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <picture>
          <source srcSet={bannerImgWebp} type="image/webp" />
          {/* Use the resized image if available */}
          {resizedImage ? (
            <img
              className="w-full h-full object-cover md:object-scale-down rounded-2xl"
              src={resizedImage}
              alt="bannerImage"
              loading="priority"
            />
          ) : (
            <img
              className="w-full h-full object-cover md:object-scale-down rounded-2xl"
              src={bannerImgJpg} 
              alt="bannerImage"
              loading="priority"
            />
          )}
        </picture>
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">
            Nguyen Phuc Khang
          </h1>
          <p className="text-base font-medium text-designColor tracking-wide">
            {/* Display only the current role */}
            <Textillate
              key={animateKey} 
              option={{
                loop: true,
                minDisplayTime: 1500,
                in: { effect: "fadeInUp", sync: true },
                out: { effect: "fadeOutDown", sync: true },
                initialDelay: 150
              }}
            >
              <span>{roles[currentRoleIndex]}</span>
            </Textillate>
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
        <div className="flex h-14 mt-[-20px]">
          <a
            href="/CV_NguyenPhucKhang.pdf"
            download="CV_NguyenPhucKhang.pdf"
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              <span className="text-lg">Download CV</span>
              <FontAwesomeIcon icon={faFileArrowDown} bounce />
            </button>
          </a>
          <button
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide
            uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
            onClick={handleContactClick}
          >
            <span className="text-lg">Contact me</span>
            <FontAwesomeIcon icon={faPaperPlane} beatFade />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
