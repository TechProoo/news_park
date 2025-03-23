import { Calendar } from "lucide-react";
import Image from "../assets/dark.jpg";
import BadgeInfo from "./Badge";

interface CardThreeProp {
  info: string;
  data?: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    views: number;
    date: string;
  }[];
}

const CardThree: React.FC<CardThreeProp> = ({ info }) => {
  return (
    <div
      className=" lg:w-[300px] "
    >
      <div className="card_three_cover ">
        <div className="card_three_img overflow-hidden lg:w-[270px] lg:-[270px] rounded-md">
          <img src={Image} className="rounded-md" alt="" />
        </div>
        <div className="card_three_content lg:w-[270px] my-4">
          <div className="flex justify-between items-center">
            <BadgeInfo content={info} />
            <div className="flex gap-1 card_two_date items-center">
              <Calendar className="text-gray-400" size={10} />
              <small className=" fnt text-xsm text-gray-400">sss</small>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="text-light text-md lnk fnt font-bold " >
              Climate changes in recent prospective
            </h1>
          </div>
          <div className="mt-2">
            <small className="">By <span>TechPro</span></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
