import React, { useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const First = () => {
  const arrowRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { autoAlpha: 1 },
      {
        duration: 1,
        ease: "none",
        autoAlpha: 0,
        scrollTrigger: {
          id: "arrow",
          trigger: arrowRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

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
        <div className="down" ref={arrowRef}>
          <BsArrowDown />
        </div>
      </div>
    </div>
  );
};

export default First;
