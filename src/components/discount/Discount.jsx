import React from "react";
import Dcard from "./Dcard";
import styled from "styled-components";

const Discount = () => {
  return (
    <Container>
      <Heading>
        <div className="heading-left ">
          <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
          <h2>Big Discounts</h2>
        </div>
        <div className="heading-right  ">
          <span>View all</span>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </Heading>
      <Dcard />
    </Container>
  );
};

export default Discount;
const Container = styled.section`
  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;
  @media (max-width: 850px) {
    display: none;
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
