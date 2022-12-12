import React from "react";
import { useState } from "react";
import Styles from "./Discovery.module.css";
import Filter from "../Filter/Filter";
import { useEffect } from "react";
import DiscoveryContent from "../DiscoveryContent/DiscoveryContent";

const Discovery = ({ ham }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  const styleForDiscovery = {
    width:
      ham && windowWidth >= 400
        ? "86.5%"
        : windowWidth <= 400 && ham
        ? "87%"
        : "100%",
    marginLeft:
      ham && windowWidth >= 400
        ? "10.5rem"
        : windowWidth <= 400 && ham
        ? "3rem"
        : "0rem",
  };

  return (
    <main
      data-testid="discovery"
      className={Styles.discovery}
      style={styleForDiscovery}
    >
      <section>
        <Filter />
      </section>

      <section>
        <DiscoveryContent />
      </section>
    </main>
  );
};

export default Discovery;
