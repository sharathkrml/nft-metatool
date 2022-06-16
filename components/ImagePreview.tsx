import { Favorite } from "@mui/icons-material";
import Image from "next/image";
function ImagePreview() {
  return (
    <div className="">
      <div className="flex rounded-t-md justify-end items-center py-2 px-2 bg-[#303339]">
        <Favorite className="text-base text-[#8A939B]" />
        <span className="ml-1 text-base">0</span>
      </div>
      <div className="w-auto h-80 rounded-b-md relative bg-red-100">
        <Image src="/0.png" layout="fill" objectFit="contain" alt="preview" />
      </div>
    </div>
  );
}

export default ImagePreview;
