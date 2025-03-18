import Image from "../assets/dark.jpg";
import { Calendar } from "lucide-react";

const CardOne = () => {
  return (
    <div className="card_One border-r border-gray-500 ">
      <div className="flex items-center gap-2">
        <div className="card_one_image">
          <img src={Image} className="" alt="" />
        </div>
        <div className="">
          <div className="flex gap-1  items-center">
            <Calendar className="text-gray-500" size={10} />
            <small className=" fnt text-xsm text-gray-500">March 21, 2021</small>
          </div>
          <h1 className="text-sm card_one_topic w-9/12 fnt mt-1">East Bangal Kerala Blasters have lost</h1>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
