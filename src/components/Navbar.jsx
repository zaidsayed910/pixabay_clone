import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const {
    fetchImagesByCategory,
    setQuery,
    fetchvideosByCategory,
    fetchImagesByQueryAndCategory,
  } = useContext(PixabayContext);
  return (
    <>
      <div className="container text-center my-3">
        
        <button
          onClick={() => fetchImagesByCategory("nature")}
          type="button"
          className="btn btn-outline-primary mx-3 mt-3"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImagesByCategory("science")}
          type="button"
          className="btn btn-outline-secondary mx-3 mt-3"
        >
          Science
        </button>
        <button
          onClick={() => fetchImagesByCategory("buildings")}
          type="button"
          className="btn btn-outline-success mx-3 mt-3"
        >
          Buildings
        </button>
        <button
          onClick={() => fetchImagesByCategory("sports")}
          type="button"
          className="btn btn-outline-danger mx-3 mt-3"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImagesByCategory("computer")}
          type="button"
          className="btn btn-outline-warning mx-3 mt-3"
        >
          Computer
        </button>
        <button
          onClick={() => fetchImagesByCategory("travel")}
          type="button"
          className="btn btn-outline-info mx-3 mt-3"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImagesByCategory("animals")}
          type="button"
          className="btn btn-outline-secondary mx-3 mt-3"
        >
          Animals
        </button>
        <button
          onClick={() => fetchImagesByCategory("fashion")}
          type="button"
          className="btn btn-outline-danger mx-3 mt-3"
        >
          Fashion
        </button>
        <button
          onClick={() => fetchImagesByCategory("food")}
          type="button"
          className="btn btn-outline-success mx-3 mt-3"
        >
          Food
        </button>
        <button
          onClick={() => fetchvideosByCategory("animation")}
          type="button"
          className="btn btn-outline-success mx-3 mt-3"
        >
          Video
        </button>
      </div>
      <div
        className="container text-center my-3 d-flex justify-content-center"
        style={{}}
      >
        {/* <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="form-control bg-dark text-light"
        /> */}
        <div className="d-flex mb-3 nav-w">
          {/* <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Image type
          </button> */}
          {/* <ul class="dropdown-menu">
                <li><button class="dropdown-item" onClick={() => fetchImagesByCategory("food")}>All</button></li>
                <li><a class="dropdown-item" href="#">Photo</a></li>
                <li><a class="dropdown-item" href="#">Illistration vector</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Vector</a></li>
            </ul> */}
          <select
            className="form-select w25 br-rn"
            id="inputGroupSelect01"
            onChange={(e) => fetchImagesByQueryAndCategory(e.target.value)}
          >
            <option selected disabled value="all">
              Select Type
            </option>
            <option value="all">All</option>
            <option value="photo">Photo</option>
            <option value="illustration">Illustration</option>
            <option value="vector">Vector</option>
          </select>
          <input
            type="text"
            className="form-control bg-body-secondary text-dark br-ln"
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Text input with dropdown button"
          />
        </div>
      </div>

      <div className="container text-center d-flex justify-content-center ">
        {/* <div className="mt-3 d-flex justify-content-center">
          <label htmlFor="">Choose Color</label>
        </div> */}
        <div>
      <span class="badge text-bg-primary mx-3 mt-3" onClick={() => fetchImagesByCategory("blue")}
          type="button" >Blue</span>
        <span class="badge text-bg-secondary mx-3 mt-3" onClick={() => fetchImagesByCategory("grey")}
          type="button" >Grey</span>
        <span class="badge text-bg-success mx-3 mt-3" onClick={() => fetchImagesByCategory("green")}
          type="button" >Green</span>
        <span class="badge text-bg-danger mx-3 mt-3" onClick={() => fetchImagesByCategory("red")}
          type="button" >Red</span>
        <span class="badge text-bg-warning mx-3 mt-3" onClick={() => fetchImagesByCategory("orange")}
          type="button" >Orange</span>
        <span class="badge text-bg-info mx-3 mt-3" onClick={() => fetchImagesByCategory("light+blue")}
          type="button" >Light Blue</span>
        <span class="badge text-bg-light mx-3 mt-3" onClick={() => fetchImagesByCategory("white")}
          type="button" >White</span>
        <span class="badge text-bg-dark mx-3 mt-3" onClick={() => fetchImagesByCategory("black")}
          type="button" >Black</span>
      </div>
      </div>
    </>
  );
};

export default Navbar;
