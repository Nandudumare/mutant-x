import React, { useState } from "react";
import Styles from "./DiscoveryContent.module.css";
import { data } from "../../Data/data";
import Card from "../Card/Card";

const DiscoveryContent = () => {
  const [nav, setNav] = useState("talent");
  const [dummyData, setDummyData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

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
    <>
      <header className={Styles.head}>
        <h2 className={Styles.name_}>Discovery</h2>
        <nav className={Styles.navs_}>
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
        </nav>
      </header>

      <section className={Styles.searchDiv}>
        <input
          type="text"
          placeholder="Search.."
          className={Styles.searchbar}
          onChange={handleChange}
        />
      </section>

      <section className={Styles.container}>
        {dummyData &&
          dummyData.map((el) => {
            return <Card key={Math.random()} el={el} />;
          })}
      </section>
    </>
  );
};

export default DiscoveryContent;
