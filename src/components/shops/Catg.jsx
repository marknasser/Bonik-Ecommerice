import React from "react";
import styled from "styled-components";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <Container>
      <CatHeader>
        <h1>Brands </h1>
        <h1>Shops </h1>
      </CatHeader>
      <BrandsList>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </BrandsList>
      <div className="box box2">
        <button>View All Brands</button>
      </div>
    </Container>
  );
};

export default Catg;
const Container = styled.div`
  min-width: fit-content;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  background-color: #fff;
  width: 23%;
  height: fit-content;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 5px;
  padding: 30px;

  .box {
    background-color: #f6f9fc;
    padding: 5px 10px;
    transition: 0.5s;
    border-radius: 5px;
  }
  .box:hover {
    background-color: #fff;
    box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
    cursor: pointer;
  }
  .box2 {
    margin-top: 100px;
    text-align: center;
  }
  img {
    margin-top: 10px;
    object-fit: contain;
    width: auto;
    height: auto;
  }
  button {
    padding: 10px;
    background: none;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
  }
  span {
    margin: 10px 20px;
    text-transform: capitalize;
  }
  @media (max-width: 767px) {
    .box2 {
      margin-top: 50px;
    }
  }
`;

const CatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  h1:nth-child(1) {
    padding-right: 5px;
    border-right: 5px solid #b3b3b3;
  }
  h1:nth-child(2) {
    opacity: 0.5;
    /* border-left: 3px solid rgba(0, 0, 0, 0.5); */
    /* padding-left: 70px; */
  }
  @media (max-width: 767px) {
    justify-content: center;
    gap: 15px;
  }
`;

const BrandsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media (max-width: 767px) {
    flex-direction: row;
    gap: 5px;
  }
`;
