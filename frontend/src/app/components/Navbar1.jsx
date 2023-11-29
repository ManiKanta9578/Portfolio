import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          useRouter.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const handleClick = () => {
    toggle();
  };
  return (
    <Link
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          useRouter.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MotionLink = motion(Link);

const Navbar1 = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="w-full flex items-center justify-between fixed px-6 py-3 lg:px-32 z-10 font-medium text-dark dark:text-light dark:bg-dark/90 top-0 bg-light/90">
      <MotionLink
        href={"/"}
        className="w-12 h-12 dark:text-light text-dark text-2xl font-bold dark:border-light border-dark border rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          scale: { duration: 0.5 },
          opacity: { duration: 0.5 },
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        MK
      </MotionLink>

      <div className=" lg:flex hidden">
        <CustomLink href={"/"} title="Home" className="mb-2 md:mb-0 md:mr-4" />
        <CustomLink
          href={"#about"}
          title="About"
          className="mb-2 md:mb-0 md:mx-4"
        />
        <CustomLink
          href={"#projects"}
          title="Projects"
          className="mb-2 md:mb-0 md:mx-4"
        />
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="md:ml-4"
        >
          {currentTheme === "dark" ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <Image src="/images/sun.svg" alt="logo" height={30} width={30} />
            </motion.div>
          ) : (
            <Image src="/images/moon.svg" alt="logo" height={25} width={25} />
          )}
        </button>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col items-center z-30 justify-between lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 text-light dark:text-dark rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center mr-10">
            <CustomMobileLink
              href={"/"}
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"#about"}
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"#projects"}
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className="md:ml-4  p-1 bg-light dark:bg-dark rounded-full"
            >
              {currentTheme === "dark" ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <Image
                    src="/images/sun.svg"
                    alt="logo"
                    height={30}
                    width={30}
                  />
                </motion.div>
              ) : (
                <Image
                  src="/images/moon.svg"
                  alt="logo"
                  height={25}
                  width={25}
                />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <button
        className="flex flex-col justify-center items-center  lg:hidden "
        onClick={handleClick}
      >
        {/* Hamburger icon bars */}
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
    </nav>
  );
};

export default Navbar1;
