"use client";
import React, { useEffect } from "react";
// import Player from "../Player";
// import { useGlobalContext } from "@/app/context/store";

const items = [
  {
    id: "1",
    title: "Song 1",
    author: "Artist 1",
    type: "audio",
    source: "path-to-song1.mp3",
    provider: "html5",
    poster: "path-to-poster1.jpg",
  },
  // More items...
];

const Footer = () => {
  // const { selectedMusicItem } = useGlobalContext();

  // console.log(selectedMusicItem);
  

  return (
    <footer id="footer" className="page-footer ">
      <div className="padding bg-dark  b-t">
        <div className="page-container">
          <div className="py-5 text-inherit text-hover-primary">
            <div className="row mb-5">
              <div className="col-6 col-md-4">
                <div className="mb-3">
                  <a href="index.html" className="navbar-brand text-white ">
                    <svg
                      width="48"
                      height="48"
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
                    <span className="hidden-folded d-inline l-s-n-1x ">
                      Bepop
                    </span>
                  </a>
                </div>
                <div className="px-1">
                  <div className="dropdown mt-5 ml-md-5">
                    <button
                      className="btn w-sm btn-dark text-align-auto b-a sorting"
                      data-toggle="dropdown"
                    >
                      English
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        English
                      </a>
                      <a href="#" className="dropdown-item">
                        Français
                      </a>
                      <a href="#" className="dropdown-item">
                        日本语
                      </a>
                      <a href="#" className="dropdown-item">
                        中文
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <h5 className="mb-3 text-muted">Pages</h5>
                <ul className="list-unstyled l-h-2x text-highlight">
                  <li>
                    <a href="../html/artists.html">Artists</a>
                  </li>
                  <li>
                    <a href="../html/charts.html">Top Charts</a>
                  </li>
                  <li>
                    <a href="../html/genres.html">Genres</a>
                  </li>
                  <li>
                    <a href="../html/page.about.html">About Us</a>
                  </li>
                  <li>
                    <a href="../html/blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="../html/signin.html">Signin</a>
                  </li>
                  <li>
                    <a href="../html/signup.html">Signup</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-2">
                <h5 className="mb-3 text-muted">Your Bepop</h5>
                <ul className="list-unstyled l-h-2x text-highlight">
                  <li>
                    <a href="../html/artist.detail.html">Profile</a>
                  </li>
                  <li>
                    <a href="../html/artist.detail.html#albums">Albums</a>
                  </li>
                  <li>
                    <a href="../html/artist.detail.html#tracks">Tracks</a>
                  </li>
                  <li>
                    <a href="../html/artist.detail.html#playlist">Playlist</a>
                  </li>
                  <li>
                    <a href="../html/artist.detail.html#liked">Liked</a>
                  </li>
                  <li>
                    <a href="../html/artist.detail.html#following">Following</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-2">
                <h5 className="mb-3 text-muted">Help</h5>
                <ul className="list-unstyled l-h-2x text-highlight">
                  <li>
                    <a href="../docs">Documentation</a>
                  </li>
                  <li>
                    <a href="../docs/changelog.html">Changelog</a>
                  </li>
                  <li>
                    <a href="../docs/changelog.html">Update</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-2 text-md-right">
                <h5 className="mb-3 text-muted">Follow Us</h5>
                <a href="#">Fb</a>
                <a href="#">Tw</a>
                <a href="#">Ig</a>
              </div>
            </div>
            <div className="text-center py-5">
              <span className="text-muted text-sm">
                &copy; Copyright. Bepop - Music Web Application, All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        data-plugin="plyr"
        className="plyrist plyrist_audio plyr-list-popup player bg-overlay b-t fixed-bottom"
        id="plyrist"
      >
        <audio controls hidden></audio>
        <div
          className="plyr-list bg-dark-overlay"
          style={{ display: "none" }}
        ></div>
      </div>

      {/* {selectedMusicItem && <Player item={selectedMusicItem} /> }  */}
    </footer>
  );
};

export default Footer;
