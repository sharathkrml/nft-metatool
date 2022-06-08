import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import IMetadata from "../types";
import FormComponent from "../components/FormComponent";
import DisplayComponent from "../components/DisplayComponent";
import { useState,useEffect } from "react";
const Home: NextPage = () => {
  const [metaData, setMetaData] = useState<IMetadata>({})
  useEffect(() => {
    console.log(metaData)
  }, [metaData])
  
  return (
    <div>
      <Head>
        <title>NFT MetaTool🚀</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="bg-[#04111D] flex items-center p-2 justify-between text-white">
          <span>NFT MetaTool🚀</span>
          <div>
            <ul className="flex items-center">
              <li className="flex items-center">
                <input
                  className="rounded-md  relative left-5 w-24 px-2 py-1 outline-none bg-[#353840] text-xs text-[#8A939B]"
                  type="text"
                  placeholder={"1.json"}
                ></input>
                <button className="flex hover:scale-105">
                  <Image
                    src={"/download.png"}
                    alt="Download"
                    width={18}
                    height={18}
                  ></Image>{" "}
                </button>
              </li>
              <li>
                <button className="hover:scale-105 border-2 border-[#353840] bg-[#353840]  text-[#8A939B] rounded-md text-sm mr-1 ml-2">Mint</button>
              </li>
              <li>
                <button className=" hover:scale-105 flex">
                  <Image
                    src={"/wallet.png"}
                    alt="Wallet"
                    width={20}
                    height={20}
                  ></Image>{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-6">
        <aside className="bg-[#303339] col-span-2"><FormComponent metaData={metaData} setMetaData={setMetaData} /></aside>
        <section className="bg-[#202225] col-span-4"><DisplayComponent /></section>
      </div>
    </div>
  );
};

export default Home;
