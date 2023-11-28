"use client";
import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  {
    metric: "Projects",
    value: "3",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10",
    postfix: "+"
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "2",
    postfix: "+"
  },
];

const AchievementsSection = () => {
  return (
    // <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-24 h-full">
      <div className=" flex flex-row lg:flex-col md:flex-col items-center justify-between w-full h-full ">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="rounded-md py-4 px-1 text-center flex flex-col"
          >
            <h2 className="text-dark dark:text-light inline-block text-2xl font-bold md:text-4xl sm:text-4xl xs:text-4xl">
              {achievement.prefix}
              <CountUp start={0} end={achievement.value} duration={3} />
              {achievement.postfix}
            </h2>
            <p className="dark:text-gray-400 text-gray-600 inline-block text-sm font-bold md:text-2xl sm:text-1xl xs:text-4xl">{achievement.metric}</p>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default AchievementsSection;
