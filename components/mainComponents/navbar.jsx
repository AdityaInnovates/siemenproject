import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-[100%] h-[5rem]">
        <div className="w-[100%] h-[5rem] flex justify-between items-center fixed bg-white">
          <div>
            <img
              src="logo.svg"
              className="w-[10rem] h-[2rem] mt-[2rem] ml-[.8rem] "
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-[150%] w-[3.2rem] h-[3.2rem] m-4 object-cover"
              src="https://lh3.googleusercontent.com/a-/AOh14GgAs3VSQWiMzSugfiVHWi8B5khTr5eGMrxM0pfQ=s360-p-rw-no"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
