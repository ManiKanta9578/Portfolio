import React from "react";

const achievementList = [
  {
    metric: "Projects",
    value: "3+",
  },
  {
    metric: "Users",
    value: "1K+",
  },
  {
    metric: "Awards",
    value: "1+",
  },
  {
    metric: "Years",
    value: "2+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border border-[#33353F] py-4 px-4">
        {achievementList.map((achievement, index) => (
          <div key={index} className="text-center">
            <h2 className="text-white text-4xl font-bold">
              {achievement.value}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
