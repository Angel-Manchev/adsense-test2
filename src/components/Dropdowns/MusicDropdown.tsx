import React from "react";

const MusicDropdown = ({
  activeItemId,
  id,
  style,
}: {
  activeItemId: number | null;
  id: number;
  style?: {};
}) => {
  return (
    <div
    style={style}
      className={`dropdown-menu dropdown-menu-right ${
        activeItemId === id ? "show" : ""
      }`}
    >
      <a className="dropdown-item" href="#">
        Play
      </a>
      <a className="dropdown-item" href="#">
        Next to play
      </a>
      <a className="dropdown-item" href="#">
        Add to queue
      </a>
      <a className="dropdown-item" href="#">
        Add to playlist
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">
        Share
      </a>
    </div>
  );
};

export default MusicDropdown;
