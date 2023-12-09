import { useState, useEffect } from "react";
import FapButton from "./components/FapButton";
import Header from "./components/Header";
import PostsList from "./components/PostsList";
import PostCreateOverlay from "./components/PostCreateOverlay";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    // Devo togliere l'overflow dal body quando l'overlay è aperto
    document.body.classList.toggle("overflow-hidden", showOverlay);
    // document.body.classList.toggle('pr-4', showOverlay);
  }, [showOverlay]);
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
