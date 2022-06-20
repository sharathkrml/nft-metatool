import { MediaSetter, Progress } from "../../types";
import { create as ipfsHttpClient, Options } from "ipfs-http-client";
import { Line } from "rc-progress";
import { useState } from "react";
import { Preview } from "@mui/icons-material";
const INPUTSTYLE =
  "bg-[#202225] border-2 border-[#4A5357] px-2 text-[#EDEDEE] focus:border-[#205ADC] rounded-md focus:outline-none";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0" as Options);

const MediaInput = ({ media, setMedia }: MediaSetter) => {
  let { background_color, animation_url, image, youtube_url } = media;
  const [progressData, setProgressData] = useState<Progress>({
    total: 10,
    progress: 9,
    statusImage: "initial",
    statusVideo: "initial",
  });
  const uploadToIPFS = async (
    files: FileList | null,
    video: boolean = false
  ) => {
    if (files) {
      let file = files[0];
      try {
        video
          ? setProgressData((prev) => ({
              ...prev,
              total: file.size,
              statusVideo: "uploading",
            }))
          : setProgressData((prev) => ({
              ...prev,
              total: file.size,
              statusImage: "uploading",
            }));
        const added = await client.add(file, {
          progress: (prog) =>
            setProgressData((prev) => ({
              ...prev,
              progress: prog,
            })),
        });
        video
          ? setProgressData((prev) => ({ ...prev, statusVideo: "completed" }))
          : setProgressData((prev) => ({ ...prev, statusImage: "completed" }));
        video
          ? setMedia((prev) => ({
              ...prev,
              animation_url: `ipfs://${added.path}`,
            }))
          : setMedia((prev) => ({
              ...prev,
              image: `ipfs://${added.path}`,
            }));
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
  };
  return (
    <div className="my-5">
      <div className="text-[#205ADC] font-happy-monkey text-center text-4xl">
        Media
      </div>
      <div className="flex justify-end items-center mt-3">
        <label className="text-[#205ADC] font-happy-monkey mr-2">
          Background <div className="text-right">Color :</div>
        </label>

        <div className="w-8/12">
          <input
            className={`${INPUTSTYLE} w-3/12 h-8`}
            type="text"
            name="background_color"
            id="background_color"
            onChange={(e) =>
              setMedia((prev) => ({
                ...prev,
                background_color: e.target.value,
              }))
            }
            value={background_color}
          />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="text-xs w-8/12  text-[#2DFBBD] font-happy-monkey">
          hexadecimal without a pre-pended #.
        </div>
      </div>
      <div className="text-[#205ADC] font-happy-monkey text-3xl pl-[20%]">
        Image
      </div>
      <div className="flex justify-end items-center">
        <label className="text-[#205ADC] font-happy-monkey mr-2">
          Upload Image to IPFS
        </label>
        <div className="w-2/3">
          <input
            className={`text-white h-8`}
            id="file_input"
            type="file"
            onChange={(e) => uploadToIPFS(e.target.files)}
          ></input>
        </div>
      </div>

      {progressData.statusImage == "uploading" && (
        <div className="w-[90%] ml-[10%] my-2 flex items-center justify-center">
          <Line
            strokeColor={"#205ADC"}
            percent={(progressData.progress * 100) / progressData.total}
          />
        </div>
      )}
      {progressData.statusImage != "uploading" && (
        <>
          <div className="flex justify-end items-center mt-1">
            <label
              className="text-[#205ADC] font-happy-monkey mr-2"
              htmlFor="image"
            >
              Image Url :
            </label>
            <input
              type="text"
              name="image"
              className={`${INPUTSTYLE} h-8 w-8/12`}
              id="image"
              value={image}
              onChange={(e) =>
                setMedia((prev) => ({ ...prev, image: e.target.value }))
              }
            />
          </div>
          <div className="flex justify-end items-center">
            <div className="text-xs w-8/12  text-[#2DFBBD] font-happy-monkey">
              Can be of form ipfs:// or https://
            </div>
          </div>
        </>
      )}
      <div className="text-[#205ADC] font-happy-monkey text-3xl pl-[20%]">
        Youtube
      </div>
      <div className="flex justify-end items-center">
        <label
          className="text-[#205ADC] font-happy-monkey mr-2"
          htmlFor="youtube_url"
        >
          Youtube Link :
        </label>
        <input
          type="text"
          name="youtube_url"
          id="youtube_url"
          className={`${INPUTSTYLE} w-8/12 h-8`}
          value={youtube_url || ""}
          onChange={(e) => {
            setMedia((prev) => ({ ...prev, youtube_url: e.target.value }));
          }}
        />
      </div>

      <div className="text-[#205ADC] font-happy-monkey text-3xl  pl-[20%]">
        Animation
      </div>
      <div className="flex justify-end items-center">
        <label className="text-[#205ADC] font-happy-monkey mr-2">
          Upload Video to IPFS
        </label>
        <div className="w-2/3">
          <input
            className="text-white"
            id="file_input"
            type="file"
            onChange={(e) => uploadToIPFS(e.target.files, true)}
          />
        </div>
      </div>
      {progressData.statusVideo == "uploading" && (
        <div className="w-[90%] ml-[10%] my-2 flex items-center justify-center">
          <Line
            strokeColor={"#205ADC"}
            percent={(progressData.progress * 100) / progressData.total}
          />
        </div>
      )}
      {progressData.statusVideo != "uploading" && (
        <>
          <div className="flex justify-end items-center mt-1">
            <label
              className="text-[#205ADC] font-happy-monkey mr-2"
              htmlFor="image"
            >
              Animation Url :
            </label>
            <input
              type="text"
              name="image"
              className={`${INPUTSTYLE} w-8/12 h-8`}
              id="image"
              value={animation_url}
              onChange={(e) =>
                setMedia((prev) => ({ ...prev, animation_url: e.target.value }))
              }
            />
          </div>
          <div className="flex justify-end items-center">
            <div className="text-xs w-8/12  text-[#2DFBBD] font-happy-monkey">
              Can be of form ipfs:// or https://
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MediaInput;
