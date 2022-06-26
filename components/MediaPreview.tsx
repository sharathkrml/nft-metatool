import { Favorite } from "@mui/icons-material";
import Image from "next/image";
import { Media } from "../types";
import { convertedMedia } from "../helpers";
function MediaPreview({ media }: { media: Media }) {
  let { animation_url, background_color, image, youtube_url } = media;

  const youtubeId = () => {
    if (youtube_url) {
      let converted =
        "https://www.youtube.com/embed/" + youtube_url.split("v=")[1];
      return converted;
    } else {
      return "";
    }
  };
  return (
    <div className="">
      <div className="flex rounded-t-md justify-end items-center py-2 px-2 bg-[#303339]">
        <Favorite className="text-base text-[#8A939B]" />
        <span className="ml-1 text-base">0</span>
      </div>
      <div
        style={{ backgroundColor: `#${background_color}` }}
        className={
          "w-auto h-80 rounded-b-md flex items-center justify-center relative"
        }
      >
        {image && !youtube_url && !animation_url && (
          <img
            className="object-fill h-full"
            src={convertedMedia(image)}
            onLoad={() => console.log("loaded")}
          />
        )}
        {youtube_url && !animation_url && (
          <iframe
            width="560"
            height="315"
            src={youtubeId()}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
        {animation_url && (
          <video width={500} height={500} className="h-full" controls>
            <source src={convertedMedia(animation_url)} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default MediaPreview;
