"use client";
// ... other imports
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { songsCharts, songsTopTracks } from "@/utils/consts";
import TopTracksListItem from "@/components/TopTrackslistItem";
import UserSongListItem from "@/components/UserSongListItem"; // Ensure the correct import
import AdBanner from "@/adSense/adBanner";

const ChartsPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [timeRange, setTimeRange] = useState<"Седмична" | "Дневна" | "Месечна">(
    "Седмична"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Категории");

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleTimeRangeChange = (range: "Седмична" | "Дневна" | "Месечна") => {
    setTimeRange(range);
    setIsDropdownOpen(false);
    setStartDate(null);
    setEndDate(null);
    setIsDatePickerOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    if (timeRange === "Дневна") {
      setStartDate(date);
      setEndDate(null);
    } else if (timeRange === "Седмична" && date) {
      const startOfWeek = new Date(date);
      const endOfWeek = new Date(date);
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
      setStartDate(startOfWeek);
      setEndDate(endOfWeek);
    } else if (timeRange === "Месечна" && date) {
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      setStartDate(startOfMonth);
      setEndDate(endOfMonth);
    }
  };

  const getButtonText = () => {
    if (timeRange === "Седмична") {
      const startFormatted = startDate
        ? `${startDate.getMonth() + 1}/${startDate.getDate()}`
        : "";
      const endFormatted = endDate
        ? `${
            endDate.getMonth() + 1
          }/${endDate.getDate()} ${endDate.getFullYear()}`
        : "Избери дата";
      return startDate && endDate
        ? `${startFormatted} - ${endFormatted}`
        : `${startFormatted} ${endFormatted}`;
    } else {
      return startDate ? startDate.toLocaleDateString() : "Избери дата";
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsCategoriesDropdownOpen(false);
  };

  return (
    <div id="main" className="layout-row flex">
      <div id="content" className="flex">
        <div>
          <div className="page-content page-container" id="page-content">
            <div
              className="padding sr"
              id="list"
              data-plugin="list"
              data-page="50"
            >
              <div className="page-hero">
                <AdBanner
                  style={{
                    display: "block",
                  }}
                  dataAdFormat="auto"
                  dataFullWidthResponsive={true}
                  dataAdSlot="1811071503"
                />

                <div className="media bg-media">
                  <div className="media-content"></div>
                </div>
                <div className="pos-rlt">
                  <h1 className="display-3 font-weight-bold text-white">
                    {timeRange} Top Charts
                  </h1>
                </div>
              </div>
              <div className="d-lg-flex pos-rlt">
                <div className="flex">
                  <div className="heading pt-5 pb-3 d-flex">
                    <div>
                      <div className="text-muted sr-item">Top</div>
                      <h5 className="text-highlight sr-item">Charts</h5>
                    </div>
                    <span className="flex"></span>
                  </div>
                  <div className="pos-rlt z-index-1">
                    <div className="d-flex py-2 sr-item">
                      <div className="dropdown my-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          onClick={toggleDropdown}
                        >
                          {timeRange}
                        </button>
                        <div
                          className={`dropdown-menu ${
                            isDropdownOpen ? "show" : ""
                          }`}
                        >
                          <a
                            href="#"
                            className="dropdown-item sort"
                            onClick={() => handleTimeRangeChange("Седмична")}
                          >
                            Седмична
                          </a>
                          <a
                            href="#"
                            className="dropdown-item sort"
                            onClick={() => handleTimeRangeChange("Дневна")}
                          >
                            Дневна
                          </a>
                          <a
                            href="#"
                            className="dropdown-item sort"
                            onClick={() => handleTimeRangeChange("Месечна")}
                          >
                            Месечна
                          </a>
                        </div>
                      </div>

                      <div className="dropdown my-2 mx-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          onClick={toggleDatePicker}
                        >
                          <span>{getButtonText()}</span>
                        </button>
                        {isDatePickerOpen && (
                          <div style={{ position: "absolute", zIndex: 100 }}>
                            <DatePicker
                              selected={startDate || undefined} // Convert null to undefined
                              onChange={handleDateChange}
                              selectsStart={timeRange === "Седмична"}
                              selectsEnd={timeRange === "Седмична"}
                              startDate={
                                timeRange === "Седмична"
                                  ? startDate || undefined
                                  : undefined
                              } // Convert null to undefined
                              endDate={
                                timeRange === "Седмична"
                                  ? endDate || undefined
                                  : undefined
                              } // Convert null to undefined
                              inline
                              onClickOutside={() => setIsDatePickerOpen(false)}
                              showMonthYearPicker={timeRange === "Месечна"}
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex"></div>

                      <div className="dropdown my-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          onClick={toggleCategoriesDropdown}
                        >
                          <span>{selectedCategory}</span>
                        </button>
                        <div
                          className={`dropdown-menu dropdown-menu-right scrollable hover ${
                            isCategoriesDropdownOpen ? "show" : ""
                          }`}
                          id="filter-category"
                          style={{ maxHeight: "310px" }}
                        >
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleCategoryChange("Категории")}
                          >
                            Категории
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleCategoryChange("Категория 1")}
                          >
                            Категория 1
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleCategoryChange("Категория 2")}
                          >
                            Категория 2
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleCategoryChange("Категория 3")}
                          >
                            Категория 3
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row list list-row list-index">
                    {songsCharts.map((song) => (
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

                  <div className="no-result hide">
                    <div className="p-5 text-center">
                      <h5>Nothing Found</h5>
                      <small>
                        It seems we can’t find what you’re looking for.
                      </small>
                    </div>
                  </div>

                  <div className="d-flex py-3 justify-content-center hide">
                    <ul className="pagination pagination-sm"></ul>
                  </div>
                </div>

                <div style={{ minWidth: "4rem" }}></div>
                <div className="w-xl w-auto-md no-shrink">
                  <div className="sticky">
                    <div className="list mb-5">
                      <div className="list-item list-overlay r">
                        <div className="media">
                          <a
                            href="item.detail.html#"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/b16.jpg)",
                            }}
                          ></a>
                        </div>
                        <div className="list-content p-5 text-center">
                          <div className="list-body">
                            <a
                              href="item.detail.html#"
                              className="list-title title ajax h3 font-weight-bold"
                            >
                              Hip-Hop Chart 100
                            </a>
                            <a
                              href="artist.detail.html#"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              The hottest rap right now.
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <AdBanner
                      style={{
                        display: "block",
                      }}
                      dataAdFormat="auto"
                      dataFullWidthResponsive={true}
                      dataAdSlot="9497989836"
                    />

                    <h6 className="text text-muted sr-item">Top tracks</h6>
                    <div className="row list-row">
                      {songsTopTracks.map((song) => (
                        <TopTracksListItem key={song.id} song={song} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
