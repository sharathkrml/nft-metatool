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
import { convertedMedia, convertMetadata, downloadJson } from "../helpers";
import Expand from "../context/Expand";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
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
  const [nftId, setNftId] = useState(0);
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

  useEffect(() => {
    if (!account) {
      web3modalRef.current = new Web3Modal();
    } else {
      TransferEventListener();
      getNftId();
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
  const getNftId = async () => {
    try {
      let MetaTool = await ContractProviderOrSigner();
      setNftId(await MetaTool.ownedNft(account));
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
      connection.on("accountsChanged", (accounts: any) => {
        setAccount(accounts[0]);
      });
      // If user is not connected to the Rinkeby network, let them know and throw an error
      const { chainId } = await provider.getNetwork();
      if (chainId !== 4) {
        window.alert("Change the network to Rinkeby");
        throw new Error("Change network to Rinkeby");
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
  const TransferEventListener = async () => {
    let MetaTool = await ContractProviderOrSigner();
    MetaTool.on("Transfer", (from, to, tokenId) => {
      console.log("Transfer", from, to, tokenId);
      if (to === account) {
        setNftId(tokenId);
      }
    });
  };
  const mintOrUpdate = async () => {
    try {
      let objectString = JSON.stringify(metadata);
      let url;
      await toast.promise(
        client.add(objectString, {
          progress: (prog) => console.log(prog),
        }),
        {
          loading: "Uploading Metadata!",
          success: (data) => {
            url = `ipfs://${data.path}`;
            return <b>Uploaded!! </b>;
          },
          error: <b>Upload failed</b>,
        }
      );
      let MetaTool = await ContractProviderOrSigner(true);
      let txn = await MetaTool.mintOrUpdate(url);
      console.log(txn);
      toast.promise(txn.wait(), {
        loading: "Mining...",
        success: <b>{nftId == 0 ? "Minted!!" : "Updated!!"} </b>,
        error: <b>Transaction Failed.</b>,
      });
      console.log(txn);
      await getNftId();
    } catch (e) {
      console.log(e);
    }
  };
  const getDataFromIPFS = async (id: number) => {
    let MetaTool = await ContractProviderOrSigner();
    let url = await MetaTool.tokenURI(nftId);
    let uriConverted = convertedMedia(url);
    let res = await fetch(uriConverted);
    let metadata = await res.json();
    return metadata;
  };
  const loadPrevious = async () => {
    try {
      let metadata = await toast.promise(getDataFromIPFS(nftId), {
        loading: "Getting Previous metadata",
        success: <b>Got it!!!</b>,
        error: <b>Could`&apos;`nt get the data.</b>,
      });
      let {
        basics,
        boosts,
        dates,
        levels,
        media,
        properties,
        stats,
      } = convertMetadata(metadata);
      setBasics(basics);
      setBoosts(boosts);
      setDates(dates);
      setMedia(media);
      setStats(stats);
      setProperties(properties);
      setLevels(levels);
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
            <span className="bg-[#F2994A] text-xs text-black rounded-lg px-1">
              Rinkeby
            </span>
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
              onClick={() => downloadJson(metadata, filename)}
              className="border-2 w-10 h-10 hover:border-[#205ADC] border-[#205ADC] text-[#205ADC] hover:scale-105 ml-2 rounded-full"
            >
              <DownloadIcon color="inherit" className="w-8 h-8" />
            </button>
            {account ? (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className="border-2 ml-2 h-10 text-sm flex item-center justify-center py-2 rounded-md border-[#205ADC] text-[#205ADC]"
              >
                {account.substring(0, 10) + "..."}
              </motion.div>
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
                <motion.button
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={mintOrUpdate}
                  className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 leading-3"
                >
                  {nftId == 0 ? "Mint" : "Update"}
                </motion.button>
                {nftId != 0 && (
                  <>
                    <motion.button
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={loadPrevious}
                      className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 leading-3"
                    >
                      Load
                      <br />
                      <span className="text-xs">Previous</span>
                    </motion.button>
                    <motion.a
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.8 }}
                      href={`https://testnets.opensea.io/assets/rinkeby/${Address}/${nftId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 ml-2 h-10 text-sm rounded-md border-[#205ADC] text-[#205ADC] hover:scale-105 hover:border-[#205ADC] px-1 py-3 leading-3"
                    >
                      Opensea🌊
                    </motion.a>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
      <div>
        <Toaster />
      </div>
      <Expand>
        <div className="grid pt-24 bg-[#202225] grid-cols-2 min-h-screen">
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
      </Expand>
    </div>
  );
};

export default Home;
