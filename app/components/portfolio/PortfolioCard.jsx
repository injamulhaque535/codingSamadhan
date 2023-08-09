import React, { useState } from "react";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { Skeleton } from "@mui/material";
import "./styles.scss";
// LightBox and lightbox plugins import
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

const PortfolioCard = (currentPortfolio) => {
  const { siteName, siteURL, thumbnail, siteImages } = currentPortfolio;

  // use State hook for Light Box Open and Close
  const [openLightBox, setopenLightBox] = useState(false);

  return (
    <>
      <div className="portfolio_card relative overflow-hidden rounded-md">
        <div className="portfolio_card_data">
          <div className="card_image overflow-hidden relative duration-1000 m-5 mb-0 border border-border">
            <Image
              width={450}
              height={500}
              className="w-full absolute"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="card_title py-3 px-3 m-3 ">
            <Link href={siteURL} target="_blank">
              <h3 className="m-0 text-center text-2xl font-semibold capitalize">
                {siteName}
              </h3>
            </Link>
          </div>
        </div>
        <div className="portfolio_card_overlay absolute w-full h-full top-0 left-0 bottom-0 right-0 ">
          <div className="card_buttons_wrapper flex items-center justify-evenly flex-col w-full h-full">
            <div className="card_buttons flex items-center justify-center flex-col">
              <Link href={siteURL} target="_blank">
                <RiExternalLinkLine className="go_to_url_btn text-7xl cursor-pointer p-5 rounded-lg" />
              </Link>
              <span className="website_title font-medium text-2xl mt-3">
                Visit The Website
              </span>
            </div>
            <div className="card_buttons flex items-center justify-center flex-col">
              <IoMdImages
                className="portfolio_gallery_btn text-7xl cursor-pointer p-5 rounded-lg"
                type="button"
                onClick={() => setopenLightBox(true)}
              />
              <Lightbox
                open={openLightBox}
                close={() => setopenLightBox(false)}
                plugins={[
                  Captions,
                  Fullscreen,
                  Slideshow,
                  Thumbnails,
                  Video,
                  Zoom,
                ]}
                // zoom={}
                slides={siteImages}
              />
              <span className="website_title font-medium text-2xl mt-3">
                View Gallery
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
