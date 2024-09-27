import React from "react";

type Song = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  duration: string;
  source: string;
  category?: string;
  tag?: string;
};

const TopTracksListItem = ({ song }: { song: Song }) => {
  return (
    <div
      className="col-12"
      data-id={song.id}
      data-category={song.category}
      data-tag={song.tag}
      data-source={song.source}
    >
      <div className="list-item r">
        <div className="media">
          <a
            href={`item.detail.html#${song.id}`}
            className="ajax media-content"
            style={{ backgroundImage: `url(${song.imageUrl})` }}
          ></a>
          <div className="media-action">
            <button
              className="btn btn-icon no-bg no-shadow hide-row"
              data-toggle-class
            >
              <i data-feather="heart" className="active-fill"></i>
            </button>
            <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play"></button>
            <button
              className="btn btn-icon no-bg no-shadow hide-row btn-more"
              data-toggle="dropdown"
            >
              <i data-feather="more-horizontal"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right"></div>
          </div>
        </div>
        <div className="list-content">
          <div className="list-body">
            <a
              href={`item.detail.html#${song.id}`}
              className="list-title title ajax h-1x"
            >
              {song.title}
            </a>
            <a
              href={`artist.detail.html#${song.id}`}
              className="list-subtitle d-block text-muted h-1x subtitle ajax"
            >
              {song.artist}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTracksListItem;
