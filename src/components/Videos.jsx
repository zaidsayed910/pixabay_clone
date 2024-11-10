import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Videos = () => {
  const { videoData } = useContext(PixabayContext);
  return (
    <>
      <div className="container my-5">
        <div className="flex">
          {videoData.map((video) => (
            <div key={video.id}>
              <div className="item">
                {/* <a href={video.largeImageURL}> */}
                  {/* <video src={video.largeImageURL} alt={video.user} /> */}
                <video width="320" height="240" controls>
                    <source src={video.videos.large.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* </a> */}
              </div>
            </div>
          ))}
        </div>
        <div className="cust-flex my-5">
          <button className="btn btn-outline-primary mx-3">Load More</button>
        </div>
      </div>
    </>
  );
};

export default Videos;
