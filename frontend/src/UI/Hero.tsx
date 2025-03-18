import { Calendar } from "lucide-react";
import { Eye } from "lucide-react";
import { Heart } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import admin from "../assets/techPro.png"
import CardOne from "../Components/CardOne";

const Hero = () => {
  return (
    <div className="hero_cover">
      <div className="md:w-10/12 pt-40 pl-10 md:pl-1 m-auto">
        <div className="flex justify-between items-center">
          <div className="hero_left">
            <div className="hero_left_top flex items-center gap-4">
              <div className="flex items-center py-2 px-3 rounded text-center hero_category_cover">
                <b className="fnt text-white">Business</b>
              </div>
              <div className="flex gap-1  items-center">
                <Calendar className="text-white" size={15} />
                <span className="text-white fnt text-sm">March 21, 2021</span>
              </div>
            </div>
            <div className="hero_left_middle mt-5">
              <h1 className="w-11/12 fnt text-3xl md:text-5xl text-white">
                Climate changes in recent prospective
              </h1>
            </div>
            <div className="hero_left_bottom mt-5">
              <div className="flex gap-3 items-center">
                <div>
                  <img src={admin} className="h-30" alt="" />
                </div>
                <div className="flex hero_icons_cover gap-3 items-center text-white">
                  <p className="text-gray-500">
                    By <b className="text-white">admin</b>
                  </p>
                  <div className="hero_icons flex items-center gap-1">
                    <Eye size={15} className="text-gray-500" />
                    <b className="text-sm">121</b>
                  </div>
                  <div className=" flex items-center gap-1">
                    <Heart size={15} className="text-gray-500" />
                    <b className="text-sm">0</b>
                  </div>
                  <div className=" flex items-center gap-1">
                    <MessageSquareText size={15} className="text-gray-500" />
                    <b className="text-sm">0</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_bottom p-3">
          <div className="flex items-center gap-3">
            <CardOne />
            <CardOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
