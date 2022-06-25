import Head from "next/head";
import { Properties, Stats, Level, Boost, Date, Basics, Media } from "../types";
import DownloadIcon from "@mui/icons-material/Download";
import Form from "../components/Form";
import Display from "../components/Display";
import { useState, useEffect, useRef, useMemo } from "react";
import { INPUTSTYLE } from "../styles";
import { create as ipfsHttpClient, Options } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import Core from "web3modal";
import { ABI, Address } from "../contract";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0" as Options);

const Home = () => {
  const web3modalRef = useRef<Core>();
  const [filename, setFilename] = useState<string>("");
  const [basics, setBasics] = useState<Basics>({
    name: "Lorem Ipsum #1",
    description:
      "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  });
  const [media, setMedia] = useState<Media>({
    image: "ipfs://QmPsb1jthhrqqRjT6FCFbi7ZSHaJEF1Jdd43xVVnPbyTzN",
    background_color: "251A52",
  });
  const [account, setAccount] = useState("");
  const [properties, setProperties] = useState<Properties[]>([
    {
      trait_type: "Base",
      value: "Starfish",
    },
    {
      trait_type: "Eyes",
      value: "Big",
    },
    {
      trait_type: "Mouth",
      value: "Surprised",
    },
  ]);
  const [stats, setStats] = useState<Stats[]>([
    {
      display_type: "number",
      trait_type: "Generation",
      value: 2,
      max_value: 50,
    },
    {
      display_type: "number",
      trait_type: "Level",
      value: 10,
    },
  ]);
  const [levels, setLevels] = useState<Level[]>([
    {
      trait_type: "Level",
      value: 5,
      max_value: 100,
    },
    {
      trait_type: "Stamina",
      value: 1.4,
    },
  ]);
  const [boosts, setBoosts] = useState<Boost[]>([
    {
      display_type: "boost_number",
      trait_type: "Aqua Power",
      value: 40,
    },
    {
      display_type: "boost_percentage",
      trait_type: "Stamina Increase",
      value: 10,
    },
  ]);
  const [dates, setDates] = useState<Date[]>([
    {
      display_type: "date",
      trait_type: "birthday",
      value: 1546360800,
    },
    {
      display_type: "date",
      trait_type: "1st anniversary",
      value: 1577920800,
    },
  ]);
  const metadata = useMemo(
    () => ({
      ...basics,
      ...media,
      attributes: [...dates, ...boosts, ...levels, ...stats, ...properties],
    }),
    [basics, media, dates, boosts, levels, stats, properties]
  );

  const downloadJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(metadata)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = filename;
    link.click();
  };
  useEffect(() => {
    if (!account) {
      web3modalRef.current = new Web3Modal();
    }
  }, [account]);
  const connectToWallet = async () => {
    try {
      let signer = (await getProviderOrSigner(true)) as providers.JsonRpcSigner;
      setAccount(await signer.getAddress());
    } catch (e) {
      console.log(e);
    }
  };
  const getProviderOrSigner = async (
    needSigner = false
  ): Promise<providers.Web3Provider | providers.JsonRpcSigner | null> => {
    if (web3modalRef.current) {
      const connection = await web3modalRef.current.connect();
      const provider: providers.Web3Provider = new providers.Web3Provider(
        connection
      );
      // If user is not connected to the Mumbai network, let them know and throw an error
      const { chainId } = await provider.getNetwork();
      if (chainId !== 80001) {
        window.alert("Change the network to Mumbai");
        throw new Error("Change network to Mumbai");
      }
      if (needSigner) {
        const signer: providers.JsonRpcSigner = provider.getSigner();
        return signer;
      }
      return provider;
    }
    return null;
  };
  const ContractProviderOrSigner = async (needSigner = false) => {
    let ProviderOrSigner = (await getProviderOrSigner(needSigner)) as
      | providers.Web3Provider
      | providers.JsonRpcSigner;
    return new Contract(Address, ABI, ProviderOrSigner);
  };
  const mintOrUpdate = async () => {
    try {
      let objectString = JSON.stringify(metadata);
      const added = await client.add(objectString, {
        progress: (prog) => console.log(prog),
      });
      let url = `ipfs://${added.path}`;
      let MetaTool = await ContractProviderOrSigner(true);
      let txn = await MetaTool.mintOrUpdate(url);
      await txn.wait();
      console.log(txn);
    } catch (e) {
      console.log(e);
    }
  };
  const convertedMedia = (media: string) => {
    if (media.startsWith("ipfs://")) {
      return `https://ipfs.infura.io/ipfs/${media.split("ipfs://")[1]}`;
    }
    return media;
  };

  const loadPrevious = async () => {
    try {
      let MetaTool = await ContractProviderOrSigner();
      let id = await MetaTool.ownedNft(account);
      let uri = await MetaTool.tokenURI(id);
      let uriConverted = convertedMedia(uri);
      let res = await fetch(uriConverted);
      let metadata = await res.json();
      setBasics({
        name: metadata.name,
        description: metadata.description,
        external_url: metadata.external_url,
      });
      setMedia({
        animation_url: metadata.animation_url,
        background_color: metadata.background_color,
        image: metadata.image,
        youtube_url: metadata.youtube_url,
      });
      if (metadata.attributes) {
        setDates([]);
        setBoosts([]);
        setStats([]);
        setProperties([]);
        setLevels([]);
        metadata.attributes.forEach((attr: any) => {
          if (!attr.display_type && typeof attr.value === "string") {
            setProperties((prevProperties) => [
              ...prevProperties,
              {
                trait_type: attr.trait_type,
                value: attr.value,
              },
            ]);
          }
          if (!attr.display_type && typeof attr.value === "number") {
            console.log("level", attr);
            setLevels((prevLevels) => [
              ...prevLevels,
              {
                trait_type: attr.trait_type,
                value: attr.value,
                max_value: attr.max_value,
              },
            ]);
          }
          if (attr.display_type && attr.display_type === "date") {
            setDates((prevDates) => [
              ...prevDates,
              {
                display_type: "date",
                trait_type: attr.trait_type,
                value: attr.value,
              },
            ]);
          }
          if (attr.display_type && attr.display_type === "number") {
            console.log("stat", attr);

            setStats((prevStats) => [
              ...prevStats,
              {
                display_type: "number",
                trait_type: attr.trait_type,
                value: attr.value,
                max_value: attr.max_value,
              },
            ]);
          }
          if (attr.display_type && attr.display_type.startsWith("boost")) {
            setBoosts((prevBoosts) => [
              ...prevBoosts,
              {
                display_type: attr.display_type,
                trait_type: attr.trait_type,
                value: attr.value,
              },
            ]);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Head>
        <title>NFT MetaTool🚀</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="fixed w-full z-50 bg-[#04111D] p-4 text-xl flex justify-between item-center text-slate-300">
          <span className="text-2xl flex items-center justify-center">
            NFT MetaTool🚀
          </span>
          <div className="flex">
            <input
              type="text"
              className={`${INPUTSTYLE} w-40`}
              placeholder="1.json"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
            <button
              onClick={downloadJson}
              className="border-2 w-10 h-10 hover:border-[#205ADC] border-[#205ADC] text-[#205ADC] hover:scale-105 ml-2 rounded-full"
            >
              <DownloadIcon color="inherit" className="w-8 h-8" />
            </button>
            {account ? (
              <div className="border-2 ml-2 h-10 text-sm flex item-center justify-center py-2 rounded-md border-[#205ADC] text-[#205ADC]">
                {account.substring(0, 10) + "..."}
              </div>
            ) : (
              <button
                onClick={connectToWallet}
                className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 leading-3"
              >
                Connect To
                <br /> Wallet
              </button>
            )}
            {account && (
              <>
                <button
                  onClick={mintOrUpdate}
                  className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 leading-3"
                >
                  Mint
                </button>
                <button
                  onClick={loadPrevious}
                  className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 leading-3"
                >
                  Load
                  <br />
                  <span className="text-xs">Previous</span>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="grid pt-14 bg-[#202225] grid-cols-2 min-h-screen">
        <aside className="">
          <Form
            basics={basics}
            setBasics={setBasics}
            properties={properties}
            setProperties={setProperties}
            stats={stats}
            setStats={setStats}
            levels={levels}
            setLevels={setLevels}
            boosts={boosts}
            setBoosts={setBoosts}
            dates={dates}
            setDates={setDates}
            media={media}
            setMedia={setMedia}
          />
        </aside>
        <section className=" text-white">
          <Display
            basics={basics}
            properties={properties}
            stats={stats}
            levels={levels}
            boosts={boosts}
            dates={dates}
            media={media}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
