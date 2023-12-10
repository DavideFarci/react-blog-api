import { useState, useEffect } from "react";
import FapButton from "./components/FapButton";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostCreateOverlay from "./components/PostCreateOverlay";

function App() {
  return (
    <>
      <Header />
      <PostsList />
    </>
  );
}

export default App;
