import React from "react";
import ShopCart from "../components/shops/ShopCart";
import Annocument from "../components/annocument/Annocument";
import styled, { keyframes } from "styled-components";

function ProductsPage() {
  return (
    <div>
      <Heading>
        <span>Products Page</span>
      </Heading>
      <Annocument />
      <ShopCart />
    </div>
  );
}

export default ProductsPage;

const textWriter = keyframes`
 0%{
  width: 0;
}
100%{
  width: 200px;
}`;

const blider = keyframes` 0%{
    border-right: 2px solid rgba(255, 255, 255, 0);
  }
  100%{
    border-right: 2px solid rgba(255, 255, 255, 0.5);
  } `;

const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 250px; */
  height: 60px;
  padding: 5px 0;
  margin: 20px auto;
  background-color: #2a3b4f;
  color: white;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 50%);
  font-weight: 600;
  font-size: 25px;
  position: relative;
  transition: 0.5s;
  overflow: hidden;

  span {
    display: block;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    width: 200px;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    animation: ${textWriter} 3s steps(19) 1.5s infinite both,
      ${blider} 0.5s infinite;
  }
`;
