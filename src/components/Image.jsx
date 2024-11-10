import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import Modal from "./Modal";

const Image = () => {
  const { imageData, loadMore, loading, fetchImagesById, setDataById } =
    useContext(PixabayContext);
  return (
    <>
      <Modal/>  
      <div className="container my-5">
        <div className="flex">
          {imageData.map((image) => (
            <div key={image.id}>
              <div className="item" >
                {/* <a href={image.largeImageURL} target="_blank"> */}
                  <img src={image.largeImageURL} alt={image.user} data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  id={image.id}
                  onClick={(e) => fetchImagesById(e.target.id)}/>
                {/* </a> */}
              </div>
            </div>
            
          )) }
        </div>
        <div className="cust-flex my-5">
          {/* <button className="btn btn-outline-primary mx-3">Load More</button> */}
          <button
            className="btn btn-outline-primary mx-3"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Image;
