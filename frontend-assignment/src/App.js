import { useState } from "react";
import "./App.css";
import Discovery from "./Components/Discovery";
import Navbar from "./Components/Navbar";

function App() {
  const [ham, setHam] = useState(false);

  return (
    <div className="App">
      <Navbar ham={ham} setHam={setHam} />
      <Discovery ham={ham} />
    </div>
  );
}

export default App;
