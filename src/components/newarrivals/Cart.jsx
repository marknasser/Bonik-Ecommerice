import React from "react";
import styled from "styled-components";
import { ArrivalsData } from "../../assets/Data";

const Cart = () => {
  return (
    <Content>
      {ArrivalsData.map((val, index) => {
        return (
          <div key={index}>
            <div className="img">
              <img src={val.cover} alt="" />
            </div>
            <h4>{val.name}</h4>
            <span>${val.price}</span>
          </div>
        );
      })}
    </Content>
  );
};

export default Cart;
const Content = styled.div`
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 30px;

  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;

  h4 {
    font-weight: 400;
  }
  span {
    color: #e94560;
    font-size: 15px;
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 100%;
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
`;
