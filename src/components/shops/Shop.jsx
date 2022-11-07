import React, { useContext } from "react";
import styled from "styled-components";
import Catg from "./Catg";
import ShopCart from "./ShopCart";

const Shop = () => {
  return (
    <Container>
      <Catg />

      <div className="contentWidth">
        <Heading>
          <div className="heading-left ">
            <h2>Mobile Phones</h2>
          </div>
          <div className="heading-right  ">
            <span>View all</span>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </Heading>
        <ShopCart />
      </div>
    </Container>
  );
};

export default Shop;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;

  .contentWidth {
    margin-left: 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;

  img {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }
  i {
    margin: 10px;
  }
  .heading-left {
    display: flex;
  }
  .heading-left i {
    color: #e94560;
    font-size: 30px;
  }
  h2 {
    font-size: 25px;
    margin: 5px;
  }
  .heading-right {
    cursor: pointer;
    color: grey;
  }
`;
