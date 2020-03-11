import React, { useState } from "react";
import { Link } from "@reach/router";

const Banner = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  const showBanner = () => {
    setIsBannerOpen(!isBannerOpen);
  };

  return (
    <>
      <div
        className="w-full h-6 left-0 fixed top-0"
        onMouseOver={() => setIsBannerOpen(true)}
      ></div>
      <div
        className={`flex z-50 items-center justify-between p-4 bg-white rounded shadow fixed top-0 w-5/6 mx-auto mt-6 transition ease-out duration-500 transform -translate-x-1/2 ${
          isBannerOpen ? "" : "-translate-y-24"
        }`}
        style={{ left: "50%" }}
        onMouseLeave={showBanner}
      >
        <h1 className="text-purple-600 font-semibold">Fast Resume v0.0.3</h1>
        {window.location.pathname === "/editor" ? (
          <Link
            to="/"
            className="px-4 py-1 rounded text-white bg-purple-600 hover:bg-purple-400"
            onClick={() => {
              setIsBannerOpen(false);
            }}
          >
            Save
          </Link>
        ) : (
          <Link
            to="editor"
            className="px-4 py-1 rounded text-white bg-purple-600 hover:bg-purple-400"
            onClick={() => {
              setIsBannerOpen(false);
            }}
          >
            Edit
          </Link>
        )}
      </div>
    </>
  );
};

export default Banner;
