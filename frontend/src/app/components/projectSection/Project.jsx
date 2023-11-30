import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Project = ({
  type,
  title,
  summary,
  img,
  previewUrl,
  gitUrl,
  gitIcon,
}) => {
  return (
    <section className="w-full relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 lg:p-6 dark:bg-dark dark:border-light sm:rounded-2xl sm:rounded-br-2xl text-dark dark:text-light border-r-4 border-b-4 md:border-r-8 md:border-b-8">
      <Link
        href={previewUrl}
        target="_blank"
        className="w-full h-60 sm:h-[60vh] md:h-full row-span-4 cursor-pointer overflow-hidden rounded-lg mb-4 md:mb-0 md:mr-6"
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image
            src={img}
            alt={title}
            className="h-full w-full rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </Link>

      <div className="w-full h-full lg:h-full row-span-2 flex flex-col items-start justify-center">
        <span className="text-primary-300 font-medium text-base md:text-lg lg:text-xl">
          {type}
        </span>
        <Link
          href={previewUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-base md:text-lg lg:text-2xl xl:text-2xl font-bold">
            {title}
          </h2>
        </Link>
        {/* {summary && (
          <p className="my-2 font-medium text-sm md:text-base lg:text-lg">
            {summary}
          </p>
        )} */}
        <div className="w-full mt-2 flex flex-row items-center justify-between">
          <Link
            href={previewUrl}
            target="_blank"
            className="rounded-lg text-dark dark:text-light underline text-base md:text-lg lg:text-xl xl:text-xl font-semibold "
          >
            Visit
          </Link>
          <Link
            href={gitUrl}
            target="_blank"
            className="w-8 h-8 border rounded-full border-dark p-1 dark:border-light dark:bg-light"
          >
            <Image src={gitIcon} alt="Github" width={32} height={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
