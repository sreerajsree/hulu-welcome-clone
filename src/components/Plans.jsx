import React from "react";
import Plan1 from "../img/plans/plan-1.jpg";
import Plan2 from "../img/plans/plan-2.jpg";
import Plan3 from "../img/plans/plan-3.jpg";
import Plan4 from "../img/plans/plan-4.jpg";
import { BsChevronDown } from "react-icons/bs";

const Plans = () => {
  return (
    <div className="items-center justify-center">
      <p className="text-[#00ed82] mt-28 font-bold tracking-wider text-center">
        INCLUDED IN ALL PLANS
      </p>
      <h1 className="text-6xl my-8 text-white font-bold text-center">
        All The TV You Love
      </h1>
      <p className="text-white items-center justify-center text-xl max-w-4xl mx-auto text-center">
        Stream full seasons of exclusive series, current-season episodes, hit
        movies, Hulu Originals, kids shows, and more.
      </p>
      <div className="max-w-[90rem] mx-auto px-4 mt-12">
        <div class="grid grid-cols-4 gap-1">
          <a href="/#">
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-to-b from-black/60 w-full top-0 h-full"></div>
              <div className="absolute top-8 left-8 w-full h-full">
                <p className="text-white text-lg font-bold">
                  Past & Current Seasons
                </p>
                <p className="text-white text-3xl mt-3 font-extrabold">
                  TV Shows
                </p>
              </div>
              <img
                className="w-full h-[450px] object-contain"
                src={Plan1}
                alt="Plan 1"
              />
            </div>
          </a>
          <a href="/#">
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-to-b from-black/60 w-full top-0 h-full"></div>
              <div className="absolute top-8 left-8 w-full h-full">
                <p className="text-white text-lg font-bold">News & Classic</p>
                <p className="text-white text-3xl mt-3 font-extrabold">
                  Movies
                </p>
              </div>
              <img
                className="w-full h-[450px] object-contain"
                src={Plan2}
                alt="Plan 2"
              />
            </div>
          </a>
          <a href="/#">
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-to-b from-black/60 w-full top-0 h-full"></div>
              <div className="absolute top-8 left-8 w-full h-full">
                <p className="text-white text-lg font-bold">Groundbreaking</p>
                <p className="text-white text-3xl mt-3 font-extrabold">
                  Hulu Originals
                </p>
              </div>
              <img
                className="w-full h-[450px] object-contain"
                src={Plan3}
                alt="Plan 3"
              />
            </div>
          </a>
          <a href="/#">
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-to-b from-black/60 w-full top-0 h-full"></div>
              <div className="absolute top-8 left-8 w-full h-full">
                <p className="text-white text-lg font-bold">Add-on</p>
                <p className="text-white text-3xl mt-3 font-extrabold">
                  Premiums
                </p>
              </div>
              <img
                className="w-full h-[450px] object-contain"
                src={Plan4}
                alt="Plan 4"
              />
            </div>
          </a>
        </div>
        <p className="text-gray-400 text-xs float-right mr-5 mt-3">
          Premium network add-ons available for an additional cost
        </p>
      </div>
      <div className="pt-24">
        <p className="text-[#00ed82] mt-28 font-bold tracking-wider text-center">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
        </p>
        <h1 className="text-6xl my-8 text-white font-bold text-center">
          Live TV Makes It Better
        </h1>
        <p className="text-white items-center justify-center text-xl max-w-4xl mx-auto text-center font-thin leading-6">
          Make the switch from cable. Get 75+ top channels on Hulu + Live TV
          with your favorite live sports, news, and events - plus the entire
          Hulu streaming library. With Unlimited DVR, store Live TV recordings
          for up to nine months and fast-forward through your DVR content.
          Access endless entertainment with Disney+ and live sports with ESPN+.
          <span className="font-bold">
            {" "}
            For a limited time, save $20/month for 3 months
          </span>
          . Ends 10/5.
        </p>
        <p className="my-5 text-gray-400 text-xs text-center items-center justify-center max-w-4xl mx-auto">
          Ends 11:59 PM PST on 10/5/22. Offer for Hulu (ad-supported) + Live TV
          plan only. $49.99/month for 3 months, then auto-renews at $69.99/month
          or then-current regular monthly price. Price will increase to
          $74.99/month as of 12/8/22. Cancel anytime, effective at the end of
          your billing period. Valid for eligible new and returning Hulu
          subscribers (who have not had Hulu in the past 1 month), 18+ only.
          Savings compared to regular monthly price. Additional offer terms
          apply
        </p>
        <p className="text-center text-gray-300 tracking-wider">
          <a className="underline font-extrabold" href="VIEW CHANNELS IN YOUR AREA">VIEW CHANNELS IN YOUR AREA →</a>
        </p>
          <BsChevronDown className="animate-bounce w-10 h-10 text-white mx-auto my-32" />
      </div>
    </div>
  );
};

export default Plans;
