import React from "react";
import styled from "styled-components";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <Container>
      {data.map((val, index) => {
        return (
          <ProductItem key={index}>
            <div>
              <i>{val.cover}</i>
            </div>
            <h3>{val.title}</h3>
            <p>{val.decs}</p>
          </ProductItem>
        );
      })}
    </Container>
  );
};

export default Wrapper;

const Container = styled.section`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 10px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;
  text-align: center;
`;

const ProductItem = styled.div`
  width: 250px;
  background: #fff;
  padding: 30px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #f3f5f9;
    border-radius: 50%;
    margin: auto auto 20px;
    font-size: 25px;
  }

  h3 {
    font-weight: 500;
    font-size: 17px;
  }

  i {
    font-size: 25px;
  }

  p {
    font-size: 15px;
    margin-top: 20px;
    color: grey;
  }
`;
