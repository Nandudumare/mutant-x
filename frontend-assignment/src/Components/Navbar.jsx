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
    <div className={Styles.navbar}>
      <div style={{ margin: ham ? "0" : "" }}>
        {ham ? (
          <div className={Styles.drawer}>
            <div>
              <div>
                <img
                  src="https://uploads-ssl.webflow.com/5f86df42be670823afda53e2/5f86e6d0354137a81bd895f2_tribepod_logo_only_white.png"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
              </div>
              <div>
                <div
                  onClick={() => setNav("discovery")}
                  style={{
                    backgroundColor: nav === "discovery" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <AiOutlineSearch />
                  </div>
                  Discovery
                </div>
                <div
                  onClick={() => setNav("build_a_tribe")}
                  style={{
                    backgroundColor:
                      nav === "build_a_tribe" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <AiOutlineUsergroupAdd />
                  </div>
                  Build a Tribe
                </div>
                <div
                  onClick={() => setNav("my_tribe")}
                  style={{
                    backgroundColor: nav === "my_tribe" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <HiOutlineUsers />
                  </div>
                  My Tribes
                </div>
                <div
                  onClick={() => setNav("my_pro")}
                  style={{
                    backgroundColor: nav === "my_pro" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <AiFillFileText />
                  </div>
                  My Proposals
                </div>
                <div
                  onClick={() => setNav("my_project")}
                  style={{
                    backgroundColor: nav === "my_project" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <IoMdFolderOpen />
                  </div>
                  My Projects
                </div>
                <div
                  onClick={() => setNav("trans")}
                  style={{
                    backgroundColor: nav === "trans" ? "#54576f" : "black",
                  }}
                >
                  <div>
                    <IoCrop />
                  </div>
                  Transactions
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className={Styles.settings}>
                <div>
                  <MdOutlineSettings />
                </div>
                Settings
              </div>

              <div className={Styles.leftArrow} onClick={() => setHam(false)}>
                <FiArrowLeft />
              </div>
            </div>
          </div>
        ) : (
          <GiHamburgerMenu onClick={() => setHam(true)} />
        )}
      </div>
      <div>
        <div>
          <FiMessageSquare />
        </div>
        <div>
          <IoMdNotificationsOutline />
        </div>
        <div>
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
