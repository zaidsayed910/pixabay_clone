import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Banners = () => {
  const { backgroundimageData } = useContext(PixabayContext);

  const bgimg = backgroundimageData ;
  console.log(bgimg, "bgimg")

  return (
    <>
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
          <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
        {backgroundimageData.map((image) => (
          <div key={image.id}>
                <div className="">
                  <img
                    src={image.largeImageURL}
                    className="d-block w-100"
                    alt={image.user}
                  />
                </div>
              </div>
        ))}
        </div>
        </div>
      </div> */}

        {/* <div className="w-100">
        <img src={bgimg[0].largeImageURL} className="d-block w-100" alt={bgimg[0].user} />
        </div> */}
    </>
  );
};

export default Banners;
