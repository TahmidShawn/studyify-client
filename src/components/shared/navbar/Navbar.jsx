import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import navLogo from "./../../../assets/navbar-logo.png";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="bg-white sticky top-0 z-50 inset-x-0 py-5 md:py-3 border-b-[1px]">
      <nav className="max-w-screen-xl lg:mx-auto md:mx-4 ">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10 md:hidden ml-6"
          whileHover={{ scale: 1.4 }}
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-6 bg-black h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-black h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-6 bg-black h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      //   when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-blue-600 p-6 flex flex-col justify-center space-y-10 md:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6 text-center"
                >
                  <li>
                    <a href="#" className="text-5xl font-semibold text-white">
                      Link #1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-5xl font-semibold text-white">
                      Link #2
                    </a>
                  </li>
                  <li className="lg:block md:block">
                    <a href="#" className="text-5xl font-semibold text-white">
                      Link #3
                    </a>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4 md:hidden"
                >
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
        {/* link for larger devices */}
        <div className="hidden lg:block md:block">
          <div className="flex justify-between items-center">
            {/* nav logo section  */}
            <div className="w-10 flex justify-center items-center gap-1 ml-10 cursor-pointer">
              <img src={navLogo} alt="" />
              <span className="text-xl font-semibold">Studyify</span>
            </div>

            {/* nav links section  */}
            <ul className="flex gap-10 items-center text-black">
              <li className="mr-12 hover:border-b-[1px] hover:border-slate-700 border-b-[1px] border-transparent cursor-pointer duration-500">
                Teach on Studyify
              </li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <BsCartDash className="text-2xl cursor-pointer" />
              </motion.li>
              <li>
                <Link to="/register">
                  <button className="border-[1px] border-slate-700 py-[6px] px-8 text-lg hover:bg-slate-700 hover:text-white duration-300">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
