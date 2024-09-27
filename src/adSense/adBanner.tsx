"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  style: {};
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  style,
}: AdBannerTypes) => {
  useEffect(() => {
    try {
      // Only attempt to push the ads if adsbygoogle exists
      if (
        (window as any).adsbygoogle &&
        Array.isArray((window as any).adsbygoogle)
      ) {
        (window as any).adsbygoogle.push({});
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []); // Empty dependency array ensures this only runs once

  return (
    <ins
      className="adsbygoogle"
      style={{ ...style }}
      data-ad-client="ca-pub-5942356139252622"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AdBanner;
