import React from "react";
import Tick from "../img/Tick.svg";
import HuluSmall from "../img/hulu-small.svg";
import Bundle from "../img/bundles.svg";
import Disnep from "../img/disnep.svg";

const Pricing = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-white text-center">
        Select Your Plan
      </h1>
      <div className="text-center my-5 text-white">
        <p className="tracking-wider text-lg">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className="tracking-wider text-lg font-extrabold">
          Switch plans or cancel anytime.^^
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="w-full py-12">
          <div>
            <table className="sm:table-fixed table-auto w-full">
              <tbody>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl sticky top-0 bg-[#0b0c0f]">
                  <td className="w-5/12 p-2  text-white break-words">
                    <div className="flex items-center justify-center py-5">
                      <div className="uppercase font-bold">
                        <p className="mb-4">Base plans</p>
                        <img src={HuluSmall} alt="Hulu Small" />
                      </div>
                      <div className="m-5">
                        <div className="relative inline-block w-16 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="toggle"
                            className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div className="uppercase font-bold">
                        <p className="pt-2">BUNDLE / SAVE</p>
                        <img src={Bundle} alt="Bundles" />
                      </div>
                    </div>
                  </td>
                  <td className="w-auto sm:p-4 text-center text-white">
                    <div>
                      <button className="py-1 px-4 bg-[#00ed82] text-black rounded-2xl text-[10px] uppercase">
                        Most Popular
                      </button>
                      <img src={Disnep} alt="Disnep" className="mx-auto my-3" />
                      <p className="text-[24px] font-bold text-white">Hulu</p>
                      <button className="py-3 px-4 bg-gray-100 text-black rounded-lg w-full font-bold my-3">
                        $13.99 / MONTH
                      </button>
                    </div>
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <div>
                      <div className="py-1 px-4 bg-transparent text-black rounded-2xl text-[10px] uppercase">
                        &nbsp;
                      </div>
                      <img src={Disnep} alt="Disnep" className="mx-auto my-3" />
                      <p className="text-[24px] font-bold text-white">
                        Hulu (No Ads)
                      </p>
                      <button className="py-3 px-4 bg-gray-100 text-black rounded-lg w-full font-bold my-3">
                        $19.99 / MONTH
                      </button>
                    </div>
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <div>
                      <div className="py-1 px-4 bg-transparent text-black rounded-2xl text-[10px] uppercase">
                        &nbsp;
                      </div>
                      <img src={Disnep} alt="Disnep" className="mx-auto my-3" />
                      <p className="text-[24px] font-bold text-white">
                        Hulu + Live TV
                      </p>
                      <button className="py-3 px-4 bg-gray-100 text-black rounded-lg w-full font-bold my-3">
                        $49.99/MO FOR 3 MOS
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words">
                    Monthly price. Save up to $7.98/mo.*
                  </td>
                  <td className="w-auto sm:p-4 text-center text-white">
                    <p className="line-through text-sm text-gray-400">
                      $21.97/mo.
                    </p>
                    $13.99/mo.
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <p className="line-through text-sm text-gray-400">
                      $27.97/mo.
                    </p>
                    $19.99/mo.
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    $49.99/mo for 3 mos*
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Hulu Streaming Library with thousands of episodes and movies
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Most new episodes the day after they air^
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Access to award-winning Hulu Originals
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Watch on your TV, laptop, phone, or tablet
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Endless entertainment with Disney+, ad-free
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Live sports with ESPN+, now on Hulu
                  </td>
                  <td className="w-auto sm:p-4 text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    No ads in Hulu streaming librar
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Download and watch on Hulu
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Live TV with 75+ top channels. No cable required.
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Live TV guide to navigate channels
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
                <tr className="border-b-[1px] border-t-[1px] border-gray-400 max-w-2xl">
                  <td className="w-5/12 p-2  text-white break-words py-5">
                    Record Live TV with Unlimited DVR
                  </td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto sm:p-4 text-gray-400 text-center">—</td>
                  <td className="w-auto p-2 sm:p-4 text-center text-white">
                    <img className="mx-auto" src={Tick} alt="Tick" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-2">
            <p className="text-white text-[10px]">
              ^For current-season shows in the streaming library only
            </p>
            <p className="text-white text-[10px]">
              ^^Switches from Live TV to Hulu take effect as of the next billing
              cycle
            </p>
            <p className="text-white text-[10px]">
              *$49.99/month for 3 months, regular price after (currently
              $69.99/month, increasing to $74.99/month as of 12/8). Ends 10/5.
              Terms apply.
            </p>
            <p className="text-white text-[10px]">
              *Savings of up to $7.98/month compared to regular price of each
              service. 18+ only. Access content from each service separately,
              and access ESPN+ content via Hulu. Offer valid for eligible
              subscribers only. Subject to
              <a className="text-gray-400 underline" href="/#">
                {" "}
                Bundle Terms
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
