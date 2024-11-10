import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Modal = () => {
    const {fetchImagesById, setDataById, dataById} = useContext(PixabayContext);
  return (
    <>
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      {dataById.length ? 
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {dataById[0].user}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <div className="w-100">
                <img src={dataById[0].largeImageURL} alt={dataById[0].user} className="w-100"/>
                </div>
                <div className="my-2 d-flex justify-content-between flex-wrp">
                    <div className="btn fw-bold text-bg-info mb-2">View : {dataById[0].views}</div>
                    <div className="btn fw-bold text-bg-primary mb-2">Likes : {dataById[0].likes}</div>
                    <div className="btn fw-bold text-bg-warning mb-2">Comments : {dataById[0].comments}</div>
                    <div className="btn fw-bold text-bg-success mb-2">Downloads : {dataById[0].downloads}</div>
                </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a className="btn btn-primary" href={dataById[0].largeImageURL} target="_blank" download={dataById[0].id}>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      : <div></div>
    }
    </>
  );
};

export default Modal;
