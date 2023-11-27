import React, { useEffect, useState, useCallback } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showMore, setShowMore] = useState(false);
  const mobileMaxLines = 100;
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleShowMore = useCallback(() => {
    setShowMore((prevShowMore) => !prevShowMore);
  }, []);

  const maxLines = isMobile ? mobileMaxLines : description;
  const truncatedWork = showMore ? description : `${description.slice(0, maxLines)}...`;

  useEffect(() => {
    setShowMore(!isMobile);
  }, [isMobile]);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-light group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-light" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-light group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-light" />
          </Link>
        </div>
      </div>
      <div className="text-light rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">
          {truncatedWork}
          {isMobile && description.length > mobileMaxLines && (
            <button
              className="font-normal underline cursor-pointer"
              onClick={toggleShowMore}
            >
              {showMore ? "View Less" : "View More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
