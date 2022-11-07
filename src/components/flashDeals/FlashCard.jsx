import React, { useState, useLayoutEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import { Flash } from "../../assets/Data";
import { NavLink } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ addToCart }) => {
  const ctx = useContext(CartContext);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const [numToShow, setNumToShow] = useState(4);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 1000) setNumToShow(2);
      // if (window.innerWidth >= 767 && window.innerWidth <= 1200)
      //   setNumToShow(3);
      else {
        setNumToShow(4);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {Flash.map((productItems) => {
        return (
          <>
            <ProductItem>
              <div>
                <Discount>{productItems.discount}% Off</Discount>
                <NavLink to={`/${productItems.name}`}>
                  <img src={productItems.cover} alt="" />
                </NavLink>

                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{productItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${productItems.price}.00 </h4>
                  <button onClick={() => ctx.addItem(productItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </ProductItem>
          </>
        );
      })}
    </Slider>
  );
};

export default FlashCard;

const ProductItem = styled.div`
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;
  margin-top: 40px;

  h3 {
    font-weight: 400;
    font-size: 17px;
  }
  img {
    width: 100%;
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

const Discount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: #e94560;
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 50px;
  color: #fff;
  margin: 10px;
`;
