import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="">
        <div className="w-[100%] h-[4.5rem] drop-shadow-sm">
          <div>
            <div className=" w-[100%] h-[4.5rem] fixed bg-white">
              <div className="h-[4.5rem] flex justify-between items-center p-auto max-w-[98vw]">
                <div>
                  <Link href={"/"}>
                    <img
                      crossOrigin="anonymous"
                      src="logo.svg"
                      className="cursor-pointer  w-[10rem] h-[2rem] mt-[2rem] ml-[.8rem] "
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <img
                    crossOrigin="anonymous"
                    className="rounded-[150%] w-[3.2rem] h-[3.2rem] m-4 object-cover"
                    src="https://lh3.googleusercontent.com/a-/AOh14GgAs3VSQWiMzSugfiVHWi8B5khTr5eGMrxM0pfQ=s360-p-rw-no"
                    alt=""
                  />
                </div>
              </div>
              <div className=" bg-black">
                <hr className="h-[1.19px]  bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
