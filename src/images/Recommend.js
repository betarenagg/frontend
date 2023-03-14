import React from "react";
import slot1 from "./images/slot 1.png";
import slot2 from "./images/slot 2.png";
import slot3 from "./images/slot 3.png";
import slot4 from "./images/slot 4.png";
import slot5 from "./images/slot 5.png";
import slotIcon from "./images/slot icon.png";
import play from "./images/play-icon.png";
import slot13 from "./images/slot 13.png";
import slot14 from "./images/slot 14.png";
import slot15 from "./images/slot 15.png";
import slot16 from "./images/slot 16.png";
import slot17 from "./images/slot 17.png";
import slot6 from "./images/slot 6.png";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";

import mark from "./images/best question mark.png";

export default function Recommend() {
  return (
    <div className="crash-swipe-cover">
      <div className="slot-line1">
        <div className="slot-line1-text">
          <img src={slotIcon} alt="slotIcon" width={"19px"} />
          <h4>Recommended Games</h4>
          <h3>22</h3>
        </div>
        <div className="slot-line1-arrows">
          <div className="slot-arrow-left">
            <h3> &#10094;</h3>
          </div>
          <div className="slot-arrow-right">
            <h3> &#10095;</h3>
          </div>
        </div>
      </div>

      <div className="content-img-swipe">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={1000}
          navigation={{
            nextEl: ".slot-arrow-right",
            prevEl: ".slot-arrow-left",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slot-display">
              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot1} alt="slot1" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Mancala</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot2} alt="slot2" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>RubyPlay</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot3} alt="slot3" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Microgaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot4} alt="slot4" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Betsoft</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot5} alt="slot5" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>BGaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex game_show">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot6} alt="slot6" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Amigo Gaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slot-display">
              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot13} alt="slot13" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Mancala</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot14} alt="slot14" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>RubyPlay</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot15} alt="slot15" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Microgaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot16} alt="slot16" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Betsoft</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot17} alt="slot17" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>BGaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>

              <div className="slot-flex game_show">
                <div className="slot-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={slot16} alt="slot16" width={"100%"} />
                  </div>
                </div>
                <div className="slot-image-text">
                  <h4>Amigo Gaming</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
