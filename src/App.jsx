import { useState } from "react";
import FapButton from "./components/FapButton";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostCreateOverlay from "./components/PostCreateOverlay";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Header />
      <PostsList />
      <FapButton openOverlay={() => setShowOverlay(true)} />
      <PostCreateOverlay
        show={showOverlay}
        closing={() => setShowOverlay(false)}
      />
    </>
  );
}

export default App;
