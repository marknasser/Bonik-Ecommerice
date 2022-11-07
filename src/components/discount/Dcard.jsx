import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DiscountData } from "../../assets/Data";
import styled from "styled-components";

const Dcard = () => {
  // const [numToShow, setNumToShow] = useState(4);

  // useLayoutEffect(() => {
  //   function updateSize() {
  //     if (window.innerWidth <= 1000) setNumToShow(2);
  //     // if (window.innerWidth >= 767 && window.innerWidth <= 1200)
  //     //   setNumToShow(3);
  //     else {
  //       setNumToShow(4);
  //     }
  //   }
  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {DiscountData.map((value, index) => {
          return (
            <>
              <Content key={index}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </Content>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 300px; */

  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;

  h4 {
    font-weight: 400;
  }
  span {
    color: #e94560;
    font-size: 15px;
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .rate i {
    font-size: 15px;
    color: #ffcd4e;
    margin: 5px 5px 5px 0;
  }
  .price {
    display: flex;
    justify-content: space-between;
    color: #e94560;
  }
`;
