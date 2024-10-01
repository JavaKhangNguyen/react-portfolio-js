import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUser, faNewspaper, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  // Function to switch to the Contact section
  const handleContactClick = () => {
    setAbout(false);
    setResume(false);
    setProjects(false);
    setContact(true);
  };

  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">
      {/* ================= Left Icons start here ====================== */}
      <div className="w-16 h-96 bg-transparent hidden lgl:flex flex-col gap-4">
        {/* ======= Other Icons Start */}
        <div className="w-full h-80 bg-bodyColor rounded-3xl flex flex-col items-center justify-between py-6">
          {/* About Icon */}
          <span
            onClick={() => {
              setAbout(true);
              setResume(false);
              setProjects(false);
              setContact(false);
            }}
            className={`${
              about
                ? "text-designColor"
                : "w-full h-6 text-textColor text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              About
            </span>
          </span>

          {/* Resume Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(true);
              setProjects(false);
              setContact(false);
            }}
            className={`${
              resume
                ? "text-designColor"
                : "w-full h-6 text-textColor text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FontAwesomeIcon icon={faNewspaper} />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Resume
            </span>
          </span>

          {/* Project Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(true);
              setContact(false);
            }}
            className={`${
              projects
                ? "text-designColor"
                : "w-full h-6 text-textColor text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Projects
            </span>
          </span>

          {/* Contact Icon */}
          <span
            onClick={() => {
              setAbout(false);
              setResume(false);
              setProjects(false);
              setContact(true);
            }}
            className={`${
              contact
                ? "text-designColor"
                : "w-full h-6 text-textColor text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
            } w-full h-6 text-2xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              Contact
            </span>
          </span>
        </div>
        {/* ======= Other Icons End */}
      </div>

      {/* ================= Left Icons end here ====================== */}
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-0 lgl:flex-row items-center">
        {/* ======================== Home Left Start here ============================ */}
        <Left handleContactClick={handleContactClick} />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 h-[100%] bg-bodyColor rounded-2xl flex justify-center items-center ml-2">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>

          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}

            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
