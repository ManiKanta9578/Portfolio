import Image from "next/image";
import Link from "next/link";
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
    <section className="w-full h-[60vh] grid grid-rows-6 justify-center rounded-3xl border border-solid border-light bg-dark shadow-2xl p-4 md:p-8 lg:p-10">
      <Link
        href={previewUrl}
        target="_blank"
        className="row-span-4 w-full md:w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg flex items-center justify-center"
      >
        <Image
          src={img}
          alt={title}
          className="h-auto w-full rounded-lg"
          width={500}
          height={500}
        />
      </Link>

      <div className="row-span-2 w-full md:w-full flex flex-col mt-4 lg:mt-0 ">
        <span className="text-primary-300 font-medium text-xl">{type}</span>
        <Link
          href={previewUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        {/* <p className="my-2 font-medium text-base text-light"> {summary} </p> */}
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <Link
            href={previewUrl}
            target="_blank"
            className="rounded-lg text-light text-base lg:text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={gitUrl} target="_blank" className="w-10">
            <Image src={gitIcon} alt="Github" width={50} height={50} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
