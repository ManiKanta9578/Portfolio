import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // You can customize the hover animation here
      className={`${className} relative group`}
    >
      <Link href={href} className="relative group flex items-center">
        {title}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          &#160;
        </motion.span>
      </Link>
    </motion.div>
  );
};

const MotionLink = motion(Link);

const Navbar1 = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="w-full fixed z-10 font-medium text-dark dark:text-light dark:bg-dark top-0 bg-light flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-2">
      <nav className="mb-4 md:mb-0">
        <MotionLink
          href={"/"}
          className="w-12 h-12 dark:text-light text-dark text-2xl font-bold dark:border-light border-dark border rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4"
          whileHover={{
            backgroundColor: [
              "#121212",
              "#233878",
              "rgba(255, 218, 185,1)",
              "rgba(50, 205, 50,1)",
              "rgba(125, 249, 255,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          MK
        </MotionLink>
      </nav>
      <nav className="flex flex-row items-center mr-10">
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
            <Image src="/images/sun.svg" alt="logo" height={40} width={40} />
          ) : (
            <Image src="/images/moon.svg" alt="logo" height={30} width={30} />
          )}
        </button>
      </nav>
    </section>
  );
};

export default Navbar1;
