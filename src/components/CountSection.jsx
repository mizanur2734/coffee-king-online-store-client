import React from "react";
import CountUp from "react-countup";

const CountSection = () => {
  return (
    <div>
      <div className="text-center mt-16  md:mt-40">
        <h4 className="text-[22px] font-bold text-[#c0aa83] ">
          Our Clients say
        </h4>
        <h2 className="md:text-5xl text-3xl font-bold text-center lg:mb-12 mb-6 mt-2">
          Our Skills
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center px-4 md:px-8 gap-4 lg:mt-6">
        {/* 1 */}
        <div className="lg:p-6 p-3 border-8 border-[#c0aa83] text-center">
          <h2 className="text-5xl text-[#c0aa83] mt-2">
            <CountUp end={380} enableScrollSpy scrollSpyDelay={1} />+
          </h2>
          <h3 className="text-xl md:text-[25px] ml-2 mt-2 text-[#0F0F0F99]">
            Online Stores
          </h3>
          <p className="mt-1">
            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
            vehicula odio.
          </p>
        </div>
        {/* 2 */}
        <div className="lg:p-6 p-3 border-8 border-[#c0aa83] text-center">
          <h2 className="text-5xl mt-2 text-[#c0aa83]">
            <CountUp end={19} enableScrollSpy scrollSpyDelay={1} />+
          </h2>
          <h3 className="text-xl md:text-[25px] ml-2 mt-2 text-[#0F0F0F99]">
            Pruduct Types
          </h3>
          <p className="mt-1">
            Nunc eu quam venenatis, dapibus elit a, feugiat est. Aenean in
            posuere tellus.
          </p>
        </div>
        {/* 3 */}
        <div className="lg:p-6 p-3 border-8 border-[#c0aa83] text-center">
          <h2 className="text-5xl mt-2 text-[#c0aa83]">
            <CountUp end={12} enableScrollSpy scrollSpyDelay={1} />+
          </h2>
          <h3 className="text-xl md:text-[25px] ml-2 mt-2 text-[#0F0F0F99]">
            Years Experience
          </h3>
          <p className="mt-1">
            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id
            vehicula odio.
          </p>
        </div>
        {/* 4 */}
        <div className="lg:p-6 p-3 border-8 border-[#c0aa83] text-center">
          <h2 className="text-5xl mt-2 text-[#c0aa83]">
            <CountUp end={768} enableScrollSpy scrollSpyDelay={1} />+
          </h2>
          <h3 className="text-xl md:text-[25px] ml-2 mt-2 text-[#0F0F0F99]">
            Happy Buyers
          </h3>
          <p className="mt-1">
            Nunc eu quam venenatis, dapibus elit a, feugiat est. Aenean in
            posuere tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountSection;
