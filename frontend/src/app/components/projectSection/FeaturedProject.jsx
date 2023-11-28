import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  previewUrl,
  gitUrl,
  gitIcon,
}) => {
  return (
    <section className="w-full flex flex-col md:flex-col lg:flex-row relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 lg:p-8 dark:bg-dark dark:border-light sm:rounded-2xl sm:rounded-br-2xl text-dark dark:text-light border-r-8 border-b-8">
      <Link
        href={previewUrl}
        target="_blank"
        className="w-full lg:w-1/2 lg:h-full cursor-pointer overflow-hidden rounded-lg mb-6 lg:mb-0 lg:mr-6"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={img}
            alt={title}
            className="h-auto w-full rounded-lg"
            width={500}
            height={500}
          />
        </motion.div>
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between">
        <span className="text-primary-300 font-medium text-lg lg:text-xl">
          {type}
        </span>
        <Link
          href={previewUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left  text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-sm md:text-base lg:text-base xl:text-base text-dark dark:text-light">
          {summary}
        </p>
        <div className="mt-2 flex flex-row items-center justify-center lg:flex-row lg:items-center">
          <Link href={gitUrl} target="_blank" className="w-10 mr-4">
            <Image src={gitIcon} alt="Github" width={50} height={50} />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="rounded-lg dark:bg-light bg-dark dark:text-dark text-light p-1 px-2 lg:p-2 lg:px-4 text-sm md:text-base lg:text-base xl:text-base font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
