import React from "react";
import { useState } from "react";
import Styles from "./Discovery.module.css";
import Filter from "./Filter";
import { data } from "../data/data";
import Card from "./Card";
import { useEffect } from "react";

const Discovery = ({ ham }) => {
  const [nav, setNav] = useState("talent");
  const [dummyData, setDummyData] = useState(data);
  const [windowWidth, setWindowWidth] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  const handleChange = (e) => {
    try {
      setSearchValue(e.target.value);
      let value = new RegExp(`^${searchValue}`, `i`);
      if (e.target.value.length > 0) {
        const d = data.filter((el) => (value.test(el.name) ? el : ""));
        setDummyData([...d]);
        return;
      } else {
        setDummyData([...data]);
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div
      className={Styles.discovery}
      style={{
        width:
          ham && windowWidth > 400
            ? "86.5%"
            : windowWidth < 400 && ham
            ? "87%"
            : "100%",
        marginLeft:
          ham && windowWidth > 400
            ? "10.5rem"
            : windowWidth < 400 && ham
            ? "3rem"
            : "0rem",
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
            onChange={handleChange}
          />
        </div>

        <div className={Styles.container}>
          {dummyData &&
            dummyData.map((el) => {
              return <Card key={Math.random()} el={el} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
