import React, { useState, useContext } from "react";
import { User } from "../../context/allcontexts";

const FloatingButton = (props) => {
  const { canGoBack, setcanGoBack } = useContext(User);
  const [enable, setenable] = useState(props.enable);
  const [loading, setloading] = useState(props.loading ? props.loading : false);
  return (
    <>
      <div className="fixed flex justify-end items-end w-[100%] h-[88.8%] pointer-events-none">
        <div className="mb-[3rem] mr-[3rem] bg-black rounded-[100%] pointer-events-auto">
          <div
            className="p-5 pointer-events-auto cursor-pointer"
            onClick={() => {
              if (!loading) {
                setcanGoBack(canGoBack ? false : true);
              }
            }}
          >
            {canGoBack ? (
              <img
                className="w-[2rem]  invert pointer-events-auto"
                src="left-arrow.svg"
                alt=""
              />
            ) : (
              <img
                className="w-[2rem] rotate-45 invert pointer-events-auto"
                src="close-cross.svg"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingButton;
