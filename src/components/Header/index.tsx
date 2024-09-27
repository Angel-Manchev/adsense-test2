"use client";
import React, { useState, useEffect } from "react";
import { Maximize, Menu, Search, Upload } from "react-feather";
import UserDropdown from "../Dropdowns/UserDropdown";
import Link from "next/link";
import AdBanner from "@/adSense/adBanner";

// TypeScript types (optional)
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Toggle dropdown visibility on user icon click
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  // Toggle menu and header background
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`page-header scroll-header fixed ${
        isScrolled ? "scrolled" : ""
      } ${menuOpen ? "bg-dark" : ""}`}
    >
      <div className="navbar navbar-expand-lg">
        <Link href="/" className="navbar-brand text-white ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1"
              fill="#000"
            ></circle>
            <circle
              cx="12"
              cy="12"
              r="2"
              stroke="currentColor"
              strokeWidth="1"
            ></circle>
            <g
              className="loading-spin"
              stroke="currentColor"
              strokeWidth="1"
              style={{ transformOrigin: "12px 12px" }}
            >
              <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
            </g>
          </svg>
          <span className="hidden-folded d-inline l-s-n-1x">Bepop</span>
        </Link>

        <div
          className={`collapse navbar-collapse order-2 order-lg-1 ${
            menuOpen ? "show" : ""
          }`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav" data-nav>
            <li className="nav-item">
              <Link href="" className="nav-link">
                <span className="nav-text">Discover</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/charts" className="nav-link">
                <span className="nav-text">Charts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" className="nav-link">
                <span className="nav-text">Genres</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" className="nav-link">
                <span className="nav-text">Artists</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="" className="nav-link">
                <span className="nav-text">Blog</span>
              </Link>
            </li>
          </ul>
          <form className="input-group m-2 my-lg-0 ">
            <span className="input-group-prepend">
              <button type="button" className="btn no-shadow no-bg px-0">
                <Search />
              </button>
            </span>
            <input
              type="text"
              className="form-control no-border no-shadow no-bg typeahead"
              placeholder="Search..."
              data-plugin="typeahead"
            />
          </form>
        </div>
        <ul className="nav navbar-menu order-1 order-lg-2">
          <li className="nav-item d-none d-sm-block">
            <a
              className="nav-link px-2"
              data-toggle="fullscreen"
              data-plugin="fullscreen"
            >
              <Maximize />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link px-2">
              <Upload className="d-lg-none" />
              <span className="btn btn-rounded btn-sm gd-primary text-white d-none d-lg-block">
                Upload
              </span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <Link
              href=""
              onClick={toggleDropdown} // Toggle the dropdown on click
              className="nav-link d-flex align-items-center py-0 px-lg-0 px-2 text-color"
            >
              <span className="avatar w-24">
                <img src="./assets/img/a1.jpg" alt="..." />
              </span>
            </Link>
            {/* Conditionally render the dropdown based on state */}
            {dropdownVisible && <UserDropdown />}
          </li>
          <li className="nav-item d-lg-none">
            <Link
              href=""
              onClick={toggleMenu} // Toggle the menu and header background on click
              className="nav-link px-2"
            >
              <Menu />
            </Link>
          </li>
        </ul>
      </div>
      {/* <AdBanner
        style={{
          display: "block",
          width: "728px",
          height: "90px",
          margin: "auto",
        }}
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="1811071503"
      /> */}
    </header>
  );
};

export default Header;
