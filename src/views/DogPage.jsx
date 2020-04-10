import React from "react";
import EndlessContextProvider from "../contexts/EndlessContext";
import InfiniteScroll from "../components/dogs/InfiniteScroll";

const DogPage = () => {
  return (
    <EndlessContextProvider>
      <InfiniteScroll />
    </EndlessContextProvider>
  );
};

export default DogPage;