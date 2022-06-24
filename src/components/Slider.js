import React from "react";

import { Carousel } from "react-bootstrap";
import slide1 from "../assets/0.jpg";
import slide2 from "../assets/1.jpg";
import slide3 from "../assets/2.jpg";
import slideI from "../assets/slideI.jpg";
import slideF from "../assets/slide2.jpg";
import "./Slider.css";
export default function Slider() {
  return (
    <div className="classes.my__carousel_main">
      <Carousel fade="true" pause="hover" interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideI}
            style={{ height: "400px" }}
          />
          <div className="slide-line"></div>
          <Carousel.Caption className="Captions">
            Статуэтка Ивара и Набор Охотницы
          </Carousel.Caption>
        </Carousel.Item>
        {/*                                  */}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            // alt={}
            style={{
              height: "400px",
              fontFamily: "ITC Avant Garde Gothic,sans-serif",
              letterSpacing: ".025em",
            }}

            //         line-height: 1.6;
            // font-size: 17px;
            // -webkit-text-size-adjust: 100%;
            // t ext-rendering: optimizeSpeed;
          />
          <div className="slide-line"></div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            style={{ height: "400px" }}
          />
          <div className="slide-line"></div>
          {/* <Carousel.Caption style={{'text-shadow': 'white 6px', 'text-allign':'left' }}>
                <h1 style={{'font-weight':'700', 'text-shadow': 'white 6px', 'text-allign':'left'}}>Злодеи</h1>                   
                
                <h3>Коллекция 2.0</h3>
                    
                

                </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            style={{ height: "400px" }}
          />
          <div className="slide-line"></div>
          {/* <Carousel.Caption style={{'text-shadow': 'white 6px', 'text-allign':'left' }}>
                <h1 style={{'font-weight':'700', 'text-shadow': 'white 6px', 'text-allign':'left'}}>Злодеи</h1>                   
                
                <h3>Коллекция 2.0</h3>
                    
                

                </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
