import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full flex flex-col lg:flex-row sm:flex-col md:flex-col items-center justify-between rounded-3xl border border-solid border-light borderwid bg-dark shadow-2xl p-10 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h[103%] rounded-[2rem] bg-light" />
      <Link
        href={previewUrl}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg flex items-center justify-center"
      >
        <Image
          src={img}
          alt={title}
          className="h-auto w-full rounded-lg"
          width={500}
          height={500}
          layout="responsive"
        />
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between mt-6 lg:mt-0 lg:pl-6">
        <span className="text-primary-300 font-medium text-xl">{type}</span>
        <Link
          href={previewUrl}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-base text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={gitUrl} target="_blank" className="w-10">
            <Image src={gitIcon} alt="Github" width={50} height={50} />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="ml-4 rounded-lg bg-light text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
