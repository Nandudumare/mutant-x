import React from "react";
import Styles from "./Card.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Card = ({ el }) => {
  return (
    <div data-testid="card" className={Styles.card}>
      <div data-testid="coverImage" className={Styles.cover}></div>
      <div data-testid="profile" className={Styles.profile}>
        <figure data-testid="image" className={Styles.img}>
          <img
            src={el.profile}
            alt=""
            height={"100%"}
            width={"100%"}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </figure>

        <div data-testid="name" className={Styles.name_pro}>
          <GoPrimitiveDot />
          {el.name}
        </div>

        <div data-testid="pods" className={Styles.pods_pro}>
          {el.pods}
        </div>

        <div
          data-testid="rating_location"
          className={Styles.ratings_location_pro}
        >
          <div>
            <AiFillStar />
            {el.rating}
          </div>
          <div>
            <MdLocationPin />
            {el.location}
          </div>
        </div>

        <article data-testid="description" className={Styles.description_pro}>
          {el.description}
        </article>

        <div data-testid="skills" className={Styles.skills_pro}>
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
