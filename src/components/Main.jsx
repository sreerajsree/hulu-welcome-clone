import React, { useState } from "react";
import Background from "../img/hulu-background.jpg";
import Logo from "../img/hulu-logo.png";
import Connect from "../img/connect.png";
import { GrClose } from "react-icons/gr";


const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full h-full relative">
        <img
          className="h-[660px] w-full object-cover"
          src={Background}
          alt=""
        />
        <div className="absolute flex items-center justify-between p-8 top-0 left-0 inset-x-0 bg-gradient-to-b from-black">
          <img src={Logo} alt="Hulu Logo" className="w-[70px]" />
          <button
            onClick={() => setShowModal(true)}
            className="uppercase text-gray-400 tracking-wider font-semibold text-lg hover:bg-black/80 hover:text-white px-3 py-2 rounded-lg"
          >
            Log in
          </button>
        </div>
        <div className="absolute h-full mx-auto top-[25%] items-center justify-center text-center inset-x-0 max-w-3xl">
          <p className="text-[#00ed82] font-bold">
            BUNDLE WITH ANY HULU PLAN & SAVE
          </p>
          <img src={Connect} alt="" className="h-36 flex mx-auto my-5" />
          <p className="font-bold text-3xl text-white">
            Get endless entertainment, live sports, and the shows and movies you
            love.
          </p>
          <button className="bg-[#00ed82] mt-8 w-full rounded-md py-4 uppercase font-bold tracking-wider hover:opacity-60">
            get the disney bundle
          </button>
          <p className="my-4 text-gray-400 text-xs font-bold">
            <a
              href="What's included?"
              className="text-xs text-gray-400 mr-1 font-bold underline"
            >
              What's included?
            </a>
            See
            <a
              href="What's included?"
              className="text-xs text-gray-400 ml-1 font-bold underline"
            >
              Bundle terms.
            </a>
          </p>
          <p>
            <a
              href="Sign up for Hulu only"
              className="text-white text-lg underline underline-offset-4"
            >
              Sign up for Hulu only
            </a>
          </p>
        </div>
      </div>
      {showModal ? (
        <>
        <div className="h-screen w-full absolute bg-black/50"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[30rem]">
            <button onClick={() => setShowModal(false)} className="float-right m-5"><GrClose className="w-6 h-6 opacity-50"/></button>
              <div className="px-10 bg-white shadow-md pt-6 pb-8 w-full">
                <h1 className="text-black font-bold text-3xl mt-16">Log In</h1>
                <form className="mt-10">
                  <label className="block text-gray-600 text-sm font-bold mb-2">
                    EMAIL
                  </label>
                  <input className="border w-full py-3 px-1 text-black border-black rounded" />
                  <label className="block text-gray-600 text-sm font-bold mb-2 mt-8">
                    PASSWORD
                  </label>
                  <input className="border w-full py-3 px-1 text-black border-black rounded" />
                </form>
                <p className="my-8 text-blue-700"><a href="/#">Forgot your email or password?</a></p>
                <button className="py-3 w-full rounded tracking-wider bg-black opacity-50 text-white">LOG IN</button>
                <p className="text-center mt-24 text-black/50">Don't have an account? <a className="text-blue-700" href="/#"> Start your free trial</a></p>
              </div>
            </div>
          </div>
        </>
      ) : ''}
    </>
  );
};

export default Main;
