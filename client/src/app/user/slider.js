import React, { useEffect, useRef } from "react";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import food1 from "../../../public/images/food1.svg";
import food2 from "../../../public/images/food2.svg";
import food3 from "../../../public/images/food3.jpg";
import food4 from "../../../public/images/food4.png";
import Image from "next/image";

const Slider = () => {
  useEffect(() => {
    const splide = new Splide("#main-slider", {
      height: "20rem",
      type: "slide",
      arrows: false,
      pagination: false,
      pauseOnHover: true,
      perPage: 3,
      lazyLoad: "nearby",
      start: 6,
      autoScroll: {
        speed: -0.5,
      },
      gap: 10,
    }).mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="w-2/3 my-10">
      <div id="main-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
            <Image src={food1} />   
            </li>
            <li className="splide__slide">
            <Image src={food2} />   
            </li>
            <li className="splide__slide">
            <Image src={food3} />   
            </li>
            <li className="splide__slide">
            <Image src={food4} />   
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
