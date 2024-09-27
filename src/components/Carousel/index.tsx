"use client";
import React, { useState } from "react";
import { Heart, MoreHorizontal } from "react-feather";
import Slider from "react-slick";
import MusicDropdown from "../Dropdowns/MusicDropdown";
import CustomPrevArrow from "../Buttons/CustomPrevArrow";
import CustomNextArrow from "../Buttons/CustomNextArrow";

// Define the item structure as a TypeScript interface
interface Item {
  id: number;
  category: string;
  tag: string;
  source: string;
  imageUrl: string;
  title: string;
  artist: string;
}

const Carousel: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  // Slick slider settings
  const settings = {
    slidesToShow: 6,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = [
    {
      id: 378918899,
      category: "Dance",
      tag: "Canada",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a",
      imageUrl: "/assets/img/c20.jpg",
      title: "Body",
      artist: "Loud Luxury Feat. Brando",
    },
    {
      id: 439575216,
      category: "Rap",
      tag: "USA",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a",
      imageUrl: "/assets/img/c21.jpg",
      title: "Wake Up In The Sky",
      artist: "Gucci Mane, Bruno Mars & Kodak Black",
    },
    {
      id: 378918899,
      category: "Dance",
      tag: "Canada",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a",
      imageUrl: "/assets/img/c20.jpg",
      title: "Body",
      artist: "Loud Luxury Feat. Brando",
    },
    {
      id: 439575216,
      category: "Rap",
      tag: "USA",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a",
      imageUrl: "/assets/img/c21.jpg",
      title: "Wake Up In The Sky",
      artist: "Gucci Mane, Bruno Mars & Kodak Black",
    },
    {
      id: 378918899,
      category: "Dance",
      tag: "Canada",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a",
      imageUrl: "/assets/img/c20.jpg",
      title: "Body",
      artist: "Loud Luxury Feat. Brando",
    },
    {
      id: 439575216,
      category: "Rap",
      tag: "USA",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a",
      imageUrl: "/assets/img/c21.jpg",
      title: "Wake Up In The Sky",
      artist: "Gucci Mane, Bruno Mars & Kodak Black",
    },
    {
      id: 378918899,
      category: "Dance",
      tag: "Canada",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a",
      imageUrl: "/assets/img/c20.jpg",
      title: "Body",
      artist: "Loud Luxury Feat. Brando",
    },
    {
      id: 439575216,
      category: "Rap",
      tag: "USA",
      source:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a",
      imageUrl: "/assets/img/c21.jpg",
      title: "Wake Up In The Sky",
      artist: "Gucci Mane, Bruno Mars & Kodak Black",
    },
    // Add more items as needed
  ];

  const handleMoreClick = (id: number) => {
    // Toggle the active item when clicking on MoreHorizontal
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };

  const handleMouseLeave = (id: number) => {
    // Remove active state when the mouse leaves the container
    if (activeItemId === id) {
      setActiveItemId(null);
    }
  };

  // const handlePlay = (item: Item) => {
  //   setSelectedMusicItem(item);
  // };

  return (
    <Slider {...settings} className="slick slick-visible slick-arrow-top row sr-item">
      {items.map((item) => (
        <div key={item.id} className="col-2" onMouseLeave={() => handleMouseLeave(item.id)}>
          <div
            className={`list-item slick-item r list-hover mb-3 ${
              activeItemId === item.id ? "pos-rlt z-index-1" : ""
            }`}
          >
            <div className="media">
              <a
                href={`item.detail.html#${item.id}`}
                className="ajax media-content"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              ></a>
              <div
                className={`media-action media-action-overlay ${
                  activeItemId === item.id ? "show" : ""
                }`}
              >
                <button className="btn btn-icon no-bg no-shadow hide-row">
                  <Heart className="active-fill" />
                </button>
                <button
                  // onClick={() => handlePlay(item)}
                  className="btn btn-raised btn-icon btn-rounded bg--white btn-play"
                ></button>
                <button
                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                  onClick={() => handleMoreClick(item.id)}
                >
                  <MoreHorizontal />
                </button>
                <MusicDropdown activeItemId={activeItemId} id={item.id} />
              </div>
            </div>
            <div className="list-content text-center">
              <div className="list-body">
                <a
                  href={`item.detail.html#${item.id}`}
                  className="list-title title ajax h-1x"
                >
                  {item.title}
                </a>
                <a
                  href={`artist.detail.html#${item.id}`}
                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                >
                  {item.artist}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
