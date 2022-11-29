import { useState } from "react";
import "./App.css";
import Discovery from "./Components/Discovery";
import Navbar from "./Components/Navbar";

function App() {
  const [ham, setHam] = useState(false);

  return (
    <>
      <Navbar ham={ham} setHam={setHam} />
      <Discovery ham={ham} />
    </>
  );
}

export default App;
