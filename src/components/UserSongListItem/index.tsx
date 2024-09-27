'use client'
import React, { useState, useEffect, useRef } from "react";
import { Heart, MoreHorizontal } from "react-feather";
import MusicDropdown from "../Dropdowns/MusicDropdown";

// Define the props interface
interface UserSongListItemProps {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  duration: string;
  source: string;
}

const UserSongListItem: React.FC<UserSongListItemProps> = ({
  id,
  title,
  artist,
  imageUrl,
  duration,
  source,
}) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown visibility
  const handleToggleDropdown = (itemId: number) => {
    setActiveItemId(activeItemId === itemId ? null : itemId);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveItemId(null); // Close the dropdown if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="col-12" data-id={id} data-category="Latin" data-tag="all">
      <div className="list-item r">
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
              <Heart />
            </button>
            <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play">
              {/* Add play functionality here */}
            </button>
            <button
              className="btn btn-icon no-bg no-shadow hide-row btn-more"
              onClick={() => handleToggleDropdown(id)}
            >
              <MoreHorizontal />
            </button>
          </div>
        </div>
        <div className="list-content text-center">
          <div className="list-body">
            <a
              href={`item.detail.html#${id}`}
              className="list-title title ajax h-1x"
            >
              {title}
            </a>
            <a
              href={`artist.detail.html#${id}`}
              className="list-subtitle d-block text-muted h-1x subtitle ajax"
            >
              {artist}
            </a>
          </div>
        </div>
        <div className="list-action show-row">
          <div className="d-flex align-items-center">
            <div className="px-3 text-sm text-muted d-none d-md-block">
              {duration}
            </div>
            <button className="btn btn-icon no-bg no-shadow">
              <Heart />
            </button>
            <button
              className="btn btn-icon no-bg no-shadow btn-more"
              onClick={() => handleToggleDropdown(id)}
            >
              <MoreHorizontal />
            </button>
            {/* Add ref to the dropdown wrapper */}
            <div ref={dropdownRef}>
              <MusicDropdown style={{top:'65px',right:'20px'}} activeItemId={activeItemId} id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSongListItem;
