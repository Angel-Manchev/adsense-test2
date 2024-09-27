import React from "react";

const UpcomingEventsListItem = () => {
  return (
    <div className="col-6">
      <div className="list-item list-overlay r mb-3">
        <div className="media media-4x3 gd-primary">
          <a
            href="blog.detail.html#"
            className="ajax media-content "
            style={{ backgroundImage: "url()" }}
          ></a>
          <div className="media-action "></div>
        </div>
        <div className="list-content p-4">
          <div className="list-body ">
            <a
              href="blog.detail.html#"
              className="list-title title ajax h5 font-weight-bold"
            >
              Spring Festival
            </a>
            <a
              href="artist.detail.html#"
              className="list-subtitle d-block text-muted h-1x subtitle ajax "
            >
              Nec sed in rutrum non eu malesuada senectus a
            </a>
          </div>
          <div className="list-footer ">
            <div className="text-muted text-sm">Feb 11, 3:39 am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsListItem;
