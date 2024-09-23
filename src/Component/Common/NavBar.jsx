import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoBriefcase } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import logo from "/images/logo.png";
import logoicon from "/images/icon.png";
import me from "/images/me.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="navbar flex">
      <div className="logo_searchbar flex">
        <img src={logo} alt="" className="logo" />
        <div className="searchbar flex">
          <IoSearch className="searchicon" />
          <input
            className="searchinput"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="nav flex">
          <div className="nav_icon flex">
            <div className="nav_group">
              <Link to="" className="navlink flex flex-col">
                <AiFillHome className="navicon" />
                <span>Home</span>
              </Link>
            </div>

            <div className="nav_group flex flex-col">
              <Link to="" className="navlink flex flex-col">
                <HiUsers className="navicon" />
                <span>My Network</span>
              </Link>
            </div>
            <div className="nav_group flex flex-col">
              <Link to="" className="navlink flex flex-col">
                <IoBriefcase className="navicon" />
                <span>Jobs</span>
              </Link>
            </div>
            <div className="nav_group flex flex-col">
              <Link to="" className="navlink flex flex-col">
                <FaCommentDots className="navicon" />
                <span>Messaging</span>
              </Link>
            </div>
            <div className="nav_group flex flex-col">
              <Link to="" className="navlink flex flex-col">
                <GoBellFill className="navicon" />
                <span>Notifications</span>
              </Link>
            </div>
            <div className="nav_group flex flex-col">
              <Link to="" className="navlink flex flex-col">
                <img src={me} alt="" className="me" />
                <div className="nav_group_sub flex">
                  <span>Me</span>
                  <MdArrowDropDown className="navicon" />
                </div>
              </Link>
            </div>
          </div>
        
        <div className="nav_icons2 flex">
          <div className="nav_group  flex flex-col">
            <Link to="" className="navlink flex flex-col">
              <CgMenuGridR className="navicon" />
              <div className="nav_group_sub flex">
                <span className="flex flex-row">For Business</span>
                <MdArrowDropDown className="navicon" />
              </div>
            </Link>
          </div>
          <div className="nav_group flex flex-col">
            <Link to="" className="navlink flex flex-col">
            <img src={logoicon} alt="" className="try" />
            <span>Try for NGN0</span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
