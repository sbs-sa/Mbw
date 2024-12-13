"use client";

import { FC } from "react";
import CountUp from "react-countup";

export const StatsSection: FC = () => {
  return (
    <div className="w-full lg:h-64 h-fit bg-blue-900 flex flex-wrap items-center justify-evenly px-20 py-10 gap-10">
      <div className="text-white font-bold text-2xl flex items-center justify-center flex-col space-y-5">
        <p className="text-6xl">
          <CountUp start={0} end={10} duration={5} />
          <span className="ml-2">+</span>
        </p>
        <p>Years of Experience</p>
      </div>
      <div className="text-white font-bold text-2xl flex items-center justify-center flex-col space-y-5">
        <p className="text-6xl">
          <CountUp start={0} end={30} duration={10} />
          <span className="ml-2">+</span>
        </p>
        <p>Global Reach</p>
      </div>
      <div className="text-white font-bold text-2xl flex items-center justify-center flex-col space-y-5">
        <p className="text-6xl">
          <CountUp start={0} end={100} duration={15} />
          <span className="ml-2">+</span>
        </p>
        <p>Happy Customers</p>
      </div>
      <div className="text-white font-bold text-2xl flex items-center justify-center flex-col space-y-5">
        <p className="text-6xl">
          <CountUp start={0} end={30} duration={10} />
          <span className="ml-2">+</span>
        </p>
        <p>Qualified Employees</p>
      </div>
    </div>
  );
};
