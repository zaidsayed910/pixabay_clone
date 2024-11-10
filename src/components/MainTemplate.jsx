import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import Image from "./Image";
import Videos from "./Videos";

const MainTemplate = () => {
  const { imageData } = useContext(PixabayContext);
  const { videoData } = useContext(PixabayContext);
  return (
    <>
      <div>
        {imageData && (
          <div>
            <Image />
          </div>
        )}

        {videoData && (
          <div>
            <Videos />
          </div>
        )}
      </div>
    </>
  );
};

export default MainTemplate;
