import React from "react";
import { RiStarSFill } from "react-icons/ri";
import Styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={Styles.filter__}>
      <div>
        <h4 className={Styles.name}>Filters</h4>
        <h5 className={Styles.pods}>Pods</h5>
        <div className={Styles.pods__check}>
          <div>
            <input type="checkbox" />
            Design & Creative
          </div>
          <div>
            <input type="checkbox" />
            Sales & Marketing
          </div>
          <div>
            <input type="checkbox" />
            Web, Mobile & Software Dev
          </div>
        </div>
        <h5 className={Styles.pods}>Categories</h5>
        <select name="" id="" className={Styles.selects}>
          <option value="">select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option valu="D">D</option>
        </select>

        <h5 className={Styles.pods}>Skills</h5>
        <select name="" id="" className={Styles.selects}>
          <option value="">select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option valu="D">D</option>
        </select>

        <h5 className={Styles.pods}>City/Country</h5>
        <input type="text" className={Styles.city} placeholder="City" />

        <h5 className={Styles.pods}>Timezone</h5>
        <select name="" id="" className={Styles.selects}>
          <option value="">Timezone</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option valu="D">D</option>
        </select>

        <h5 className={Styles.pods}>Rating</h5>
        <div className={Styles.pods__check}>
          <div>
            <input type="checkbox" />
            {[1, 1, 1, 1, 1].map((el) => {
              return (
                <RiStarSFill
                  key={Math.random()}
                  style={{ color: el === 1 ? "#ffb300" : "#c7c7c9" }}
                />
              );
            })}
          </div>
          <div>
            <input type="checkbox" />
            {[1, 1, 1, 1, 0].map((el) => {
              return (
                <RiStarSFill
                  key={Math.random()}
                  style={{ color: el === 1 ? "#ffb300" : "#c7c7c9" }}
                />
              );
            })}
            <span className={Styles.up}> & Up </span>
          </div>
          <div>
            <input type="checkbox" />
            {[1, 1, 1, 0, 0].map((el) => {
              return (
                <RiStarSFill
                  key={Math.random()}
                  style={{ color: el === 1 ? "#ffb300" : "#c7c7c9" }}
                />
              );
            })}
            <span className={Styles.up}> & Up </span>
          </div>
          <div>
            <input type="checkbox" />

            <span className={Styles.up}> Unrated </span>
          </div>
        </div>
      </div>
      <div>
        <button className={Styles.btnAp}>Apply Filter</button>
        <button className={Styles.btnCl}>Clear All</button>
      </div>
    </div>
  );
};

export default Filter;
