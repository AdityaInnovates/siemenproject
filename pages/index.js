import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { User } from "../context/allcontexts";

export default function Home() {
  const { canGoBack, setcanGoBack } = useContext(User);
  setcanGoBack(false);
  return (
    <div className="h-[88.8vh] w-[100%] ">
      <Head>
        <title>Siemen</title>
        <meta name="description" content="Generated by Aditya" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Berkshire+Swash&family=Exo+2:wght@300&family=Roboto+Condensed:wght@300&family=Staatliches&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-[88.8vh] w-[100%] absolute z-[-1]">
        {/* <img
          crossOrigin="anonymous"
          src="proj.png"
          className={"h-[88.8vh] w-[100%] "}
          width="100vw"
          height="100%"
          alt="Siemens"
        /> */}
      </div>
      <div className="w-[100%] h-[100%] items-center justify-center flex">
        <div>
          <div className="stroke-black drop-shadow-[0px_1px_1px_rgba(0,0,0,0.400)]">
            <img
              crossOrigin="anonymous"
              src="logo.svg"
              className="w-[10rem] h-[2rem] "
              alt="LogoSiemens"
            />
          </div>
          <h3 className="italic text-[1.6rem] tracking-wide text-gray-600 font-[ui-sans-serif] pb-3 ">
            Intern's Work Search
          </h3>
          <div>
            <input
              className="rounded-md p-2 w-[80vw] border-2 border-black"
              type="text"
              placeholder="Search Here..."
            />
          </div>
          <div className="w-[100%] flex justify-center gap-[4rem] mt-1">
            <button className="bg-green-500 rounded-md py-2 px-8 mt-5 text-white hover:bg-green-600 hover:rounded-3xl transition-all duration-300">
              Search
            </button>
            <button className="bg-green-500 rounded-md py-2 px-8 mt-5 text-white hover:bg-green-600 hover:rounded-3xl transition-all duration-300">
              {/* <button className="bg-[#EAB543] rounded-md py-2 px-8 mt-5 hover:bg-[#d3a33b] hover:rounded-3xl transition-all duration-300"> */}
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
