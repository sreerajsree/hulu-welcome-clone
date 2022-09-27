import React, { useState } from "react";

const WaterMark = () => {
  const [banner, bannerClose] = useState(true);

  return (
    <div>
      {banner ? (
        <>
          <div className="text-[#00ed82] py-2 text-sm text-center">
            <p className="tracking-wider">
              Made with{" "}
              <a className="font-bold" href="https://reactjs.org/">
                React JS
              </a>{" "}
              &{" "}
              <a className="font-bold" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>{" "}
              by{" "}
              <a
                className="font-bold underline underline-offset-2"
                href="https://sreerajsree.vercel.app/"
              >
                Sreeraj S
              </a>
            </p>
            <button onClick={() => bannerClose(false)} className="absolute top-2 right-10 text-xl">x</button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default WaterMark;
