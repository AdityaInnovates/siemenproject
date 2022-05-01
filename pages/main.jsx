import React, { useState } from "react";
import Switch from "react-switch";

const Main = () => {
  const [toggle1, settoggle1] = useState("");
  return (
    <>
      <div className="w-100% bg-white px-[10rem]">
        <div className="min-h-[6rem] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[2rem] pt-4">
            <div>
              <div className="flex justify-between">
                <img src="/logo.svg" width={100} alt="" />
                <div className="flex gap-4">
                  <div className="flex items-baseline gap-1 justify-center">
                    <i class="fa-regular fa-envelope"></i>
                    <h3>Contact</h3>
                  </div>
                  <div className="flex items-baseline gap-1 justify-center">
                    <i class="fa-solid fa-globe"></i>
                    <h3>India</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 mb-2">
              <div className="border-b-4 border-cyan-300">
                Products & Services
              </div>
              <div>Market-specific Solutions</div>
              <div>Company</div>
            </div>
            <div className="mr-3">
              <Switch onChange={settoggle1} checked={toggle1} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-[20rem] bg-slate-100">
          <div className="px-[10rem]">
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-5">
                  <div className="h-[4rem] w-[0.5rem] block bg-cyan-300"></div>
                  <h3 className="text-[3rem] font-semibold">
                    2021 Industrial Controls Download Catalog
                  </h3>
                </div>
              </div>
              <div>
                <div className="flex gap-4">
                  <img
                    src="https://assets.new.siemens.com/siemens/assets/api/uuid:f96e8d0a-5904-4087-be7f-4d4c96ec3ecb/width:1125/quality:high/industrial-controls-catalog-with-control-and-circuit-components.png"
                    // width={600}
                    className="w-[150rem] h-[20rem] object-cover mb-14"
                    height={600}
                    alt=""
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">
                      New Industrial Controls Catalog - September 2021
                    </h3>
                    <h3>
                      The 2021 Industrial Controls Catalog is available as a
                      single interactive PDF file. It includes the latest,
                      best-in-class Control Products from our SIRIUS Control,
                      SIRIUS Hybrid, SIRIUS Monitor, SIRIUS Command and General
                      Purpose families. This is an extremely interactive catalog
                      with page links, bookmarks, and search engine. Download it
                      today to see just how quickly you can select products and
                      retrieve information.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
