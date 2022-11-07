import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/banner-1.png";
import img2 from "../../assets/images/banner-2.png";

const Annocument = () => {
  return (
    <Container className="container d_flex">
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
    </Container>
  );
};

export default Annocument;

const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;
  gap: 10px;

  @media (max-width: 767px) {
    div:nth-of-type(1) {
      display: none;
    }
  }

  img {
    display: block;
    width: 100%;
  }
`;
