import React from "react";

const UserDropdown = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right mt-3 animate fadeIn show">
      <a
        className="dropdown-item"
        href="../html/artist.detail.html"
        data-pjax-state=""
      >
        <span>Profile</span>
      </a>
      <a
        className="dropdown-item"
        href="../html/artist.detail.html#tracks"
        data-pjax-state=""
      >
        <span>Tracks</span>
      </a>
      <a
        className="dropdown-item"
        href="../html/artist.detail.html#albums"
        data-pjax-state=""
      >
        <span>Albums</span>
      </a>
      <a
        className="dropdown-item"
        href="../html/artist.detail.html#liked"
        data-pjax-state=""
      >
        <span>Likes</span>
      </a>
      <div className="dropdown-divider"></div>
      <a
        className="dropdown-item"
        href="../html/signin.html"
        data-pjax-state=""
      >
        Sign out
      </a>
    </div>
  );
};

export default UserDropdown;
