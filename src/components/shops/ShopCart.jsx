import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ProductsData, Flash } from "../../assets/Data";
import CartContext from "../../store/cart-context";
import { NavLink } from "react-router-dom";

const MergeData = [...ProductsData, ...Flash];

const ShopCart = () => {
  const ctx = useContext(CartContext);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <StyledWrapper>
      {MergeData.map((shopItems, index) => {
        return (
          <ProductItem key={shopItems.id}>
            <div>
              <span className="discount">{shopItems.discount}% Off</span>
              <NavLink to={`/${shopItems.name}`}>
                <img src={shopItems.cover} alt="" />
              </NavLink>

              <div className="product-like">
                <label>{count}</label> <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
              </div>
            </div>
            <div>
              <h3>{shopItems.name}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>${shopItems.price}.00 </h4>
                <button onClick={() => ctx.addItem(shopItems)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </ProductItem>
        );
      })}
    </StyledWrapper>
  );
};

export default ShopCart;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;

  @media (max-width: 767px) {
    /* text-align: center; */
    grid-template-columns: minmax(180px, 1fr);
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const ProductItem = styled.div`
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;
  transition: 0.5s;
  a {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    font-weight: 400;
    font-size: 17px;
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
  .price button {
    background: none;
    color: #e94560;
    font-size: 20px;
    transition: 0.5s;
    border: 1px solid rgb(3 0 71 / 9%);
    width: 35px;
    height: 35px;
    border-radius: 5px;
  }
  .price button:hover {
    cursor: pointer;
    background-color: #e94560;
    color: #fff;
  }
  .product-like {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    opacity: 0;
    transition: 0.5s;
    cursor: pointer;
  }
  .product-like label {
    background-color: #0f3460;
    padding: 1px 10px;
    font-size: 12px;
    color: white;
    border-radius: 50px;
  }
  .product-like i {
    font-size: 20px;
    margin: 10px 3px;
  }
  :hover .product-like {
    opacity: 1;
    box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  }
`;
