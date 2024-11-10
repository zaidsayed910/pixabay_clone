import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [query, setQuery] = useState("");
  const [backgroundimageData, setBackgroundImageData] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // For loading state
  const [dataById, setDataById] = useState([]);

  const api_key = "46856044-18f75bdb09817f1effa33f978";
  const BASE_URL = `https://pixabay.com/api/?key=${api_key}`;

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&pretty=true&per_page=100&editors_choice=true&image_type=''`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
      setVideoData("");
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    fetchImages(); // Fetch initial data when component mounts
  }, []);

  const fetchImages = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BASE_URL}&page=${page}&per_page=20`);
      const data = await response.json();
      setImageData((prevData) => [...prevData, ...data.hits]); // Append new images to existing ones
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increase page count
  };

  // Fetch new images whenever the page state changes
  useEffect(() => {
    if (page > 1) fetchImages();
  }, [page]);

  const fetchImagesById = async (cat) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BASE_URL}&id=${cat}`);
      const data = await response.json();
      setDataById(data.hits); // Append new images to existing ones
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const fetchImagesByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&pretty=true&per_page=100&editors_choice=true&image_type=''`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
    setVideoData("");
  };

  const fetchImagesByQueryAndCategory = async (cat) => {
    setImageData("");
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&q=${query}&category=&pretty=true&per_page=100&editors_choice=true&image_type=${cat}`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
    setVideoData("");
  };

  const fetchvideosByCategory = async () => {
    const api = await fetch(
      `https://pixabay.com/api/videos/?key=${api_key}&q=&category=&pretty=true&per_page=100&editors_choice=true`
    );
    const data = await api.json();
    setVideoData(data.hits);
    console.log(data.hits);
    setImageData("");
  };

  // fetchvideosByCategory();

  return (
    <PixabayContext.Provider
      value={{
        imageData,
        fetchImagesByCategory,
        setQuery,
        videoData,
        fetchvideosByCategory,
        fetchImagesByQueryAndCategory,
        backgroundimageData,
        setBackgroundImageData,
        loadMore,
        loading,
        fetchImagesById,
        setDataById,
        dataById,
      }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
