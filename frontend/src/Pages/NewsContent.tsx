import { Calendar } from "lucide-react";
import Image from "../assets/trend.webp";
import Trending from "../UI/Trending";
import Divide from "../Components/Divider";
import ClickableChips from "../Components/Chip";

const tags = ["Fashion", "Action"]

const NewsContent = () => {
  return (
    <div className=" ">
      <div className="news_content_cover py-8 px-4">
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-12 md:col-span-5 text-left md:text-right px-6">
            <span className="inline-block bg-red-700 text-white rounded-xl px-3 py-1 text-sm font-bold">
              Fashion
            </span>
            <h1 className="text-4xl font-bold fnt text-white mt-4 leading-tight">
              The focus in every image you take
            </h1>
            <div className="mt-4 text-gray-400 text-sm">
              <b>
                Author -{" "}
                <span className="text-white font-semibold">Tech Pro</span>
              </b>
            </div>
            <div className="mt-4 flex items-center justify-start md:justify-end text-gray-300 text-sm">
              <Calendar size={14} className="mr-2" />
              <span>March 23, 2021</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-12 md:col-span-7">
            <div className="news_content_img rounded-lg overflow-hidden shadow-lg">
              <img
                src={Image}
                alt="News"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="news_content w-11/12 md:w-9/12 lg:w-7/12 mx-auto my-12 text-gray-800">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <blockquote className="italic text-lg text-gray-600 border-l-4 border-gray-400 pl-4">
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s."
          </blockquote>
        </div>
        <article className="leading-relaxed text-lg space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rhoncus libero malesuada lorem molestie tempus. Mauris venenatis
            tellus vel sem auctor, in aliquam ex rutrum. Proin fringilla orci
            vel orci dignissim, sit amet porta magna bibendum. Praesent ut quam
            vehicula, pulvinar erat sit amet, sodales ipsum. Donec eu lorem
            varius, interdum justo vitae, semper dolor.
          </p>
          <p>
            Morbi sagittis risus non justo ullamcorper, ac porta tortor
            pellentesque. Sed euismod egestas massa eget faucibus. Aliquam eu
            varius ligula, in gravida turpis. Integer a egestas massa. Donec nec
            bibendum sem, sit amet congue erat. Nulla efficitur ligula dui, vel
            gravida nunc congue ac.
          </p>
          <p>
            Nunc elementum magna arcu, non auctor tortor facilisis ac. Duis
            vulputate metus sapien, sed accumsan odio tempus ut. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus nisl tortor, semper lacinia leo et, cursus
            fringilla dolor.
          </p>
          <p>
            Aenean et gravida dolor, in aliquet leo. Nam ultrices imperdiet
            ligula non tempor. Donec cursus bibendum imperdiet. Sed porta
            elementum cursus. Donec vulputate risus venenatis laoreet molestie.
            Donec urna felis, maximus non rutrum ut, ultrices ac mi.
          </p>
          <p>
            Proin suscipit, lorem ac hendrerit pretium, erat tortor interdum
            quam, sed imperdiet quam tellus nec libero. Duis porttitor non mi
            accumsan vestibulum. Suspendisse efficitur faucibus eros consequat
            luctus. Cras euismod varius nibh vitae dapibus.
          </p>
        </article>
        <div className="mt-5 flex gap-3 items-center">
          <span className="fnth">Tags: </span> <ClickableChips tags={tags} />
        </div>
      </div>

      <Divide />
      <div className="w-10/12 m-auto">
        <Trending />
      </div>
    </div>
  );
};

export default NewsContent;
