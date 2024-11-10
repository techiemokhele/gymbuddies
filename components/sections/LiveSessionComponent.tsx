"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonComponent from "../common/ButtonComponent";
import { liveSessionBenefits } from "@/data/gymBuddieBenfits";

const LiveSessionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-dark-1 px-16 py-10 gap-8">
      <p className="text-xl italic text-white">
        Our platform is built to help you stay motivated and focused. We offer
        personalised workout plans, easy customisation, and access to exclusive
        resources. Elevate your fitness and achieve your goals. Join our journey
        with us.
      </p>

      <div>
        <ButtonComponent
          isPurple={true}
          isYellow={false}
          label="See Live Class Schedule"
          onClick={() => console.log("See Live Class Schedule")}
          iconPosition="left"
          icon={<IoIosArrowRoundForward size={20} />}
        />
      </div>

      <div className="border-[0.2px] border-white w-full" />

      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-8">
        {liveSessionBenefits.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <p className="text-white text-2xl font-bold">{item.benefit}</p>
            <p className="text-white text-xs opacity-50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveSessionComponent;