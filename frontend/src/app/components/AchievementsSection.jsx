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
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className=" flex flex-row items-center justify-evenly border border-[#33353F] ">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="rounded-md py-4 px-3 text-center flex flex-col"
          >
            <h2 className="text-white inline-block text-2xl font-bold md:text-4xl sm:text-4xl xs:text-4xl">
              {achievement.prefix}
              <CountUp start={0} end={achievement.value} duration={3} />
              {achievement.postfix}
            </h2>
            <p className="text-gray-400 inline-block text-sm font-bold md:text-2xl sm:text-1xl xs:text-4xl">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
