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
    <section className="w-full h-[60vh] grid grid-rows-6 relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 lg:p-8 dark:bg-dark dark:border-light sm:rounded-2xl sm:rounded-br-2xl text-dark dark:text-light border-r-8 border-b-8">
      <Link
        href={previewUrl}
        target="_blank"
        className="w-full h-full row-span-4 cursor-pointer overflow-hidden rounded-lg mb-6 lg:mb-0 lg:mr-6"
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
        <span className="text-primary-300 font-medium text-lg lg:text-xl">
          {type}
        </span>
        <Link
          href={previewUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold">
            {title}
          </h2>
        </Link>
        {/* {summary && (
          <p className="my-2 font-medium text-base lg:text-light">{summary}</p>
        )} */}
        <div className="w-full mt-2 flex flex-row items-center justify-between">
          <Link
            href={previewUrl}
            target="_blank"
            className="rounded-lg text-dark dark:text-light underline text-lg md:text-lg lg:text-xl xl:text-xl font-semibold "
          >
            Visit
          </Link>
          <Link href={gitUrl} target="_blank" className=" w-10 border rounded-full border-dark p-1 dark:border-light dark:bg-light">
            <Image src={gitIcon} alt="Github" width={50} height={50} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
