import React from "react";
import { useState } from "react";
import Styles from "./Discovery.module.css";
import Filter from "./Filter";
import { data } from "../data/data";
import Card from "./Card";
console.log("data:", data);

const Discovery = ({ ham }) => {
  const [nav, setNav] = useState("talent");

  return (
    <div
      className={Styles.discovery}
      style={{
        width: ham ? "86.5%" : "100%",
        marginLeft: ham ? "10.5rem" : "0rem",
      }}
    >
      <div>
        <Filter />
      </div>
      <div>
        <div className={Styles.head}>
          <h2 className={Styles.name_}>Discovery</h2>
          <div className={Styles.navs_}>
            <div
              onClick={() => setNav("talent")}
              style={{
                borderBottom: nav === "talent" ? "2px solid #ff755c" : "none",
              }}
            >
              Talent
            </div>
            <div
              onClick={() => setNav("tribe")}
              style={{
                borderBottom: nav === "tribe" ? "2px solid #ff755c" : "none",
              }}
            >
              Tribes
            </div>
            <div
              onClick={() => setNav("client")}
              style={{
                borderBottom: nav === "client" ? "2px solid #ff755c" : "none",
              }}
            >
              Clients
            </div>
            <div
              onClick={() => setNav("project")}
              style={{
                borderBottom: nav === "project" ? "2px solid #ff755c" : "none",
              }}
            >
              Projects
            </div>
          </div>
        </div>

        <div className={Styles.searchDiv}>
          <input
            type="text"
            placeholder="Search.."
            className={Styles.searchbar}
          />
        </div>

        <div className={Styles.container}>
          {data.map((el) => {
            return <Card key={Math.random()} el={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
