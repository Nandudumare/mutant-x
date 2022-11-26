import React from "react";
import { BsArrowDown } from "react-icons/bs";

const First = () => {
  return (
    <div>
      <div className="navbar">
        <div className="face">
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div>
            <div></div>
          </div>
        </div>

        <div className="share">
          <span>Share</span>
          <div className="share__btn">
            <p>facebook</p>
            <p>twitter</p>
          </div>
        </div>
      </div>

      <div className="navs">
        <div>Technology</div>
        <div>Team lookup</div>
        <div>Contacts</div>
      </div>

      <div className="text">
        <p>
          Hello! <p>I'm Crypton </p>
        </p>
        <p>
          A cryptocurrency trading bot <p> based on machine learning.</p>
        </p>
      </div>

      <div className="arrowdown">
        <div className="down">
          <BsArrowDown />
        </div>
      </div>
    </div>
  );
};

export default First;
