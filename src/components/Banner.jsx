import React, { useState } from "react";
import { ReactComponent as Options } from "../assets/options.svg";
import { Link } from "@reach/router";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white rounded shadow relative">
        <h1 className="text-indigo-600 font-bold">
          Simple Resume Editor v0.0.1
        </h1>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <Options className="h-8 w-8" />
        </button>
        {isMenuOpen && (
          <div className="rounded bg-white shadow absolute right-0 top-0 mt-20 overflow-hidden py-2 z-50">
            {window.location.pathname === "/editor" ? (
              <Link
                to="/"
                className="list-none px-16 py-2 hover:bg-purple-200 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Save
              </Link>
            ) : (
              <Link
                to="editor"
                className="list-none px-16 py-2 hover:bg-purple-200 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Edit
              </Link>
            )}
          </div>
        )}
      </div>
      {isMenuOpen && (
        <button
          type="button"
          className="absolute inset-0 w-screen h-screen border z-10 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
    </>
  );
};

export default Banner;
