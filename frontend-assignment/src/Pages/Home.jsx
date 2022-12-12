import React, { useState } from "react";
import Discovery from "../Components/Discovery/Discovery";
import Navbar from "../Components/Navbar/Navbar";

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
