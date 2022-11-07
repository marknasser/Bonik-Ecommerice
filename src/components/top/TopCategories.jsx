import React from "react";
import styled from "styled-components";
import TopCart from "./TopCart";

const TopCategories = () => {
  return (
    <TopContainer>
      <Heading>
        <div className="heading-left ">
          <i className="fa-solid fa-border-all"></i>
          <h2>Top Categories</h2>
        </div>
        <div className="heading-right ">
          <span>View all</span>
          <i className="fa-solid fa-caret-right"></i>
        </div>
      </Heading>
      <TopCart />
    </TopContainer>
  );
};

export default TopCategories;

const TopContainer = styled.section`
  max-width: 90%;
  margin: auto;
  position: relative;
  background: #f6f9fc;
  padding: 50px 0;

  /* @media (max-width: 767px) {
    display: none;
  } */
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

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
