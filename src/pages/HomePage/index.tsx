"use client";
import Image from "next/image";
import PageHero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import AlbumListItem from "../../components/AlbumListItem";
import UserSongListItem from "../../components/UserSongListItem";
import BlogNewsListItem from "../../components/BlogNewsListItem";
import UpcomingEventsListItem from "../../components/UpcomingEventsListItem";
import { albums, songs } from "@/utils/consts"; // Import albums and songs arrays
// import { useGlobalContext } from "@/app/context/store";

export default function HomePage() {
  // const { selectedMusicItem } = useGlobalContext();

  return (
    <div id="main" className="layout-row flex">
      <div id="content" className="flex">
        <div>
          <div className="page-content page-container" id="page-content">
            <div className="padding sr">
              <PageHero />
              <div className="heading pt-5 pb-3 d-flex z-1">
                <div>
                  <div
                    style={{
                      visibility: "visible",
                      WebkitTransform: "translateY(0) scale(1)",
                      transform: "translateY(0) scale(1)",
                      opacity: 1,
                      WebkitTransition:
                        "all, -webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                      transition:
                        "all, transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                    }}
                    className="text-muted sr-item"
                  >
                    Weekly
                  </div>
                  <h5
                    style={{
                      visibility: "visible",
                      WebkitTransform: "translateY(0) scale(1)",
                      transform: "translateY(0) scale(1)",
                      opacity: 1,
                      WebkitTransition:
                        "all, -webkit-transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                      transition:
                        "all, transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s",
                    }}
                    className="text-highlight sr-item"
                  >
                    Top tracks
                  </h5>
                </div>
                <span className="flex"></span>
              </div>
              <Carousel />
              <div className="heading pt-5 pb-3 d-flex ">
                <div>
                  <div className="text-muted sr-item">Featured</div>
                  <h5 className="text-highlight sr-item">Albums</h5>
                </div>
                <span className="flex"></span>
              </div>
              <div className="row row-md">
                {/* Map through albums array and pass the data to each AlbumListItem */}
                {albums.map((album) => (
                  <AlbumListItem
                    source={album.source}
                    key={album.id}
                    id={album.id}
                    title={album.title}
                    artist={album.artist}
                    imageUrl={album.imageUrl}
                  />
                ))}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="heading pt-5 pb-3 d-flex ">
                    <div>
                      <div className="text-muted sr-item">User</div>
                      <h5 className="text-highlight sr-item">Recently added</h5>
                    </div>
                    <span className="flex"></span>
                  </div>
                  <div className="row list-row list-index">
                    {/* Map through songs array and pass the data to each UserSongListItem */}
                    {songs.map((song) => (
                      <UserSongListItem
                        key={song.id}
                        id={song.id}
                        title={song.title}
                        artist={song.artist}
                        imageUrl={song.imageUrl}
                        duration={song.duration}
                        source={song.source}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heading pt-5 pb-3 d-flex ">
                    <div>
                      <div className="text-muted sr-item">Upcoming</div>
                      <h5 className="text-highlight sr-item">Events</h5>
                    </div>
                    <span className="flex"></span>
                  </div>
                  <div className="row">
                    <UpcomingEventsListItem />
                    <UpcomingEventsListItem />
                  </div>
                  <div className="heading pt-5 pb-3 d-flex ">
                    <div>
                      <div className="text-muted sr-item">Blog</div>
                      <h5 className="text-highlight sr-item">News</h5>
                    </div>
                    <span className="flex"></span>
                  </div>
                  <div className="row">
                    <BlogNewsListItem />
                    <BlogNewsListItem />
                    <BlogNewsListItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
