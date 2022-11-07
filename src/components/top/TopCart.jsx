import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopData } from "../../assets/Data";
import styled from "styled-components";

const TopCart = () => {
  const [numToShow, setNumToShow] = useState(3);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) setNumToShow(1);
      else {
        setNumToShow(3);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: numToShow,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {TopData.map((value, index) => {
        return (
          <ContentItem key={index}>
            <div className="nametop d_flex">
              <span className="tleft">{value.para}</span>
              <span className="tright">{value.desc}</span>
            </div>
            <div className="img">
              <img src={value.cover} alt="" />
            </div>
          </ContentItem>
        );
      })}
    </Slider>
  );
};

export default TopCart;

const ContentItem = styled.div`
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;

  margin: 10px;
  img {
    width: 100%;
    /* height: 100%; */
    border-radius: 5px;
  }

  .nametop {
    position: relative;
    width: 100%;
  }
  .nametop span {
    background: #0f3460;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 50px;
    margin: 5px;
    position: absolute;
    top: 10px;
  }
  .nametop .tleft {
    left: 0;
  }
  .nametop .tright {
    background-color: aliceblue;
    color: black;
    position: absolute;
    right: 0;
  }
`;
