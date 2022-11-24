import React from "react";

import Styles from "./Card.module.css";

import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Card = ({ el }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cover}></div>
      <div className={Styles.profile}>
        <div className={Styles.img}>
          <img
            src={el.profile}
            alt=""
            height={"100%"}
            width={"100%"}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </div>
        <div className={Styles.name_pro}>
          <GoPrimitiveDot />
          {el.name}
        </div>
        <div className={Styles.pods_pro}>{el.pods}</div>
        <div className={Styles.ratings_location_pro}>
          <div>
            <AiFillStar />
            {el.rating}
          </div>
          <div>
            <MdLocationPin />
            {el.location}
          </div>
        </div>
        <div className={Styles.description_pro}>{el.description}</div>
        <div className={Styles.skills_pro}>
          {el.skills.map((el) => {
            return (
              <div key={Math.random()} className={Styles.skills_pro_per}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
