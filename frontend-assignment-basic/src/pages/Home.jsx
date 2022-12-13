import React, { useState } from "react";
import Discovery from "../components/Discovery";
import Navbar from "../components/Navbar";

const Home = () => {
  const [ham, setHam] = useState(false);
  return (
    <>
      <Navbar ham={ham} setHam={setHam} />
      <Discovery ham={ham} />
    </>
  );
};

export default Home;
