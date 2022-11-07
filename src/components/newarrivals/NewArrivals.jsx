import React from "react";
import Cart from "./Cart";
import styled from "styled-components";

const NewArrivals = () => {
  return (
    <Container>
      <Heading>
        <div className="heading-left ">
          <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
          <h2>New Arrivals </h2>
        </div>
        <div className="heading-right  ">
          <span>View all</span>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </Heading>

      <Cart />
    </Container>
  );
};

export default NewArrivals;
const Container = styled.div`
  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;
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
