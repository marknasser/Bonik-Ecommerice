import React from "react";
import styled from "styled-components";

import img1 from "../../assets/images/category/cat1.png";
import img2 from "../../assets/images/category/cat2.png";
import img3 from "../../assets/images/category/cat3.png";
import img4 from "../../assets/images/category/cat4.png";
import img5 from "../../assets/images/category/cat5.png";
import img6 from "../../assets/images/category/cat6.png";
import img7 from "../../assets/images/category/cat7.png";
import img8 from "../../assets/images/category/cat8.png";
import img9 from "../../assets/images/category/cat9.png";
import img10 from "../../assets/images/category/cat10.png";
import img11 from "../../assets/images/category/cat11.png";

const Categories = () => {
  const data = [
    {
      cateImg: img1,
      cateName: "Fashion",
    },
    {
      cateImg: img2,
      cateName: "Electronic",
    },
    {
      cateImg: img3,
      cateName: "Cars",
    },
    {
      cateImg: img4,
      cateName: "Home & Garden",
    },
    {
      cateImg: img5,
      cateName: "Gifts",
    },
    {
      cateImg: img6,
      cateName: "Music",
    },
    {
      cateImg: img7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: img8,
      cateName: "Pets",
    },
    {
      cateImg: img9,
      cateName: "Baby Toys",
    },
    {
      cateImg: img10,
      cateName: "Groceries",
    },
    {
      cateImg: img11,
      cateName: "Books",
    },
  ];

  return (
    <Container>
      {data.map((value, index) => {
        return (
          <CategoryItem key={index}>
            <img src={value.cateImg} alt="" />
            <span>{value.cateName}</span>
          </CategoryItem>
        );
      })}
    </Container>
  );
};

export default Categories;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-width: fit-content;
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  background-color: #fff;
  padding: 15px 0;
  border-radius: 5px;
  margin-top: 5px;

  .box {
    transition: 0.5s;
    padding: 0 20px;
  }

  .box:hover {
    background-color: #ffe1e6;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    flex-direction: row;
    gap: 5px;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  transition: 0.5s;
  padding: 0 20px;

  :hover {
    background-color: #ffe1e6;
    cursor: pointer;
  }
  > img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    object-fit: contain;
  }

  > span {
    display: block;
    min-width: fit-content;
    margin: 10px 20px;
    text-transform: capitalize;
  }
`;
