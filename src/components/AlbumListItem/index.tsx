"use client";
import React, { useState } from "react";
import { Heart, MoreHorizontal } from "react-feather";
import MusicDropdown from "../Dropdowns/MusicDropdown";
// import { useGlobalContext } from "@/app/context/store";

// Define the props type for the AlbumListItem
interface AlbumListItemProps {
  id: number;
  imageUrl: string;
  title: string;
  artist: string;
  source: string;
}

const AlbumListItem: React.FC<AlbumListItemProps> = ({
  id,
  imageUrl,
  title,
  artist,
  source,
}) => {
  // Define the state type and initialize with null
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  // const { setSelectedMusicItem, selectedMusicItem } = useGlobalContext();

  const item = { id, imageUrl, title, artist, source };

  const handleMoreClick = () => {
    // Toggle the active item when clicking on MoreHorizontal
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  const handleMouseLeave = () => {
    // Remove active state when the mouse leaves the container
    if (activeItemId === id) {
      setActiveItemId(null);
    }
  };

  // const handlePlay = () => {
  //   setSelectedMusicItem(item)
  // };

  return (
    <div onMouseLeave={handleMouseLeave} className="col-4 col-md-3 col-lg-2 col-xl-1-8">
      <div className="list-item r list-hover">
        <div className="media">
          <a
            href={`item.detail.html#${id}`}
            className="ajax media-content"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></a>
          <div className="media-action media-action-overlay">
            <button className="btn btn-icon no-bg no-shadow hide-row">
              <Heart className="active-fill" />
            </button>
            <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play"></button>
            <button
              className="btn btn-icon no-bg no-shadow hide-row btn-more"
              data-toggle="dropdown"
              onClick={handleMoreClick}
            >
              <MoreHorizontal />
            </button>
            {activeItemId === id && (
              <MusicDropdown
                style={{
                  position: "absolute",
                  transform: "translate3d(-51px, 74px, 0px)",
                  top: "0px",
                  left: "0px",
                  willChange: "transform",
                }}
                activeItemId={activeItemId}
                id={id}
              />
            )}
          </div>
        </div>
        <div className="list-content text-center">
          <div className="list-body">
            <a href={`item.detail.html#${id}`} className="list-title title ajax h-1x">
              {title}
            </a>
            <a href={`artist.detail.html#${id}`} className="list-subtitle d-block text-muted h-1x subtitle ajax">
              {artist}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumListItem;
