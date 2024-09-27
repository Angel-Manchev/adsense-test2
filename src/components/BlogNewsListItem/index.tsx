import React from 'react'

const BlogNewsListItem = () => {
  return (
    <div className="col-4">
    <div className="list-item r">
      <div className="media media-16x9">
        <a
          href="blog.detail.html#"
          className="ajax media-content "
          style={{
            backgroundImage: "url(../assets/img/b15.jpg)",
          }}
        ></a>
        <div className="media-action "></div>
      </div>
      <div className="list-content ">
        <div className="list-body ">
          <a
            href="blog.detail.html#"
            className="list-title title ajax "
          >
            Adipiscing urna quis consectetur
          </a>
        </div>
        <div className="list-footer ">
          <div className="text-muted text-sm">
            Feb 24, 12:43 am
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogNewsListItem