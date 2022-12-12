import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import { FiArrowLeft, FiMessageSquare } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
  AiFillFileText,
} from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdFolderOpen } from "react-icons/io";
import { IoCrop } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

const Navbar = ({ ham, setHam }) => {
  const [nav, setNav] = useState("discovery");

  return (
    <main data-testid="navbar" className={Styles.navbar}>
      <div style={{ margin: ham ? "0" : "" }}>
        {ham ? (
          <div className={Styles.drawer}>
            <section>
              <figure>
                <img
                  src="https://uploads-ssl.webflow.com/5f86df42be670823afda53e2/5f86e6d0354137a81bd895f2_tribepod_logo_only_white.png"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </figure>
              <nav>
                <div
                  onClick={() => setNav("discovery")}
                  style={{
                    backgroundColor: nav === "discovery" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <AiOutlineSearch />
                  </i>
                  Discovery
                </div>
                <div
                  onClick={() => setNav("build_a_tribe")}
                  style={{
                    backgroundColor:
                      nav === "build_a_tribe" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <AiOutlineUsergroupAdd />
                  </i>
                  Build a Tribe
                </div>
                <div
                  onClick={() => setNav("my_tribe")}
                  style={{
                    backgroundColor: nav === "my_tribe" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <HiOutlineUsers />
                  </i>
                  My Tribes
                </div>
                <div
                  onClick={() => setNav("my_pro")}
                  style={{
                    backgroundColor: nav === "my_pro" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <AiFillFileText />
                  </i>
                  My Proposals
                </div>
                <div
                  onClick={() => setNav("my_project")}
                  style={{
                    backgroundColor: nav === "my_project" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <IoMdFolderOpen />
                  </i>
                  My Projects
                </div>
                <div
                  onClick={() => setNav("trans")}
                  style={{
                    backgroundColor: nav === "trans" ? "#54576f" : "black",
                  }}
                >
                  <i>
                    <IoCrop />
                  </i>
                  Transactions
                </div>
              </nav>
            </section>
            {/*  */}

            <footer>
              <div className={Styles.settings}>
                <i>
                  <MdOutlineSettings />
                </i>
                Settings
              </div>

              <div className={Styles.leftArrow} onClick={() => setHam(false)}>
                <FiArrowLeft />
              </div>
            </footer>
          </div>
        ) : (
          <GiHamburgerMenu onClick={() => setHam(true)} />
        )}
      </div>

      <div>
        <i>
          <FiMessageSquare />
        </i>
        <i>
          <IoMdNotificationsOutline />
        </i>
        <i>
          <CgProfile />
        </i>
      </div>
    </main>
  );
};

export default Navbar;
