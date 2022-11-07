import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <CartContainer>
      <CartDetails>
        {ctx.items.length === 0 && <NoItems>No Items are add in Cart</NoItems>}

        {ctx.items.map((item) => {
          return (
            <CartList key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>

              <CartDetails>
                <h3>{item.name}</h3>
                <h4>
                  ${item.price}.00 * {item.amount}
                  <span>${item.price * item.amount}.00</span>
                </h4>
              </CartDetails>

              <CartButtons>
                <button onClick={() => ctx.deleteItem(item.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>

                <div>
                  <button onClick={() => ctx.addItem(item)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <button onClick={() => ctx.removeItem(item.id)}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </CartButtons>
            </CartList>
          );
        })}
      </CartDetails>

      <Total>
        <h2>Cart Summary</h2>
        <div className=" d_flex">
          <h4>Total Price :</h4>
          <h3>${ctx.totalAmount}.00</h3>
        </div>
      </Total>
    </CartContainer>
  );
};

export default Cart;
const CartButtons = styled.div`
  display: flex;
  align-items: end;
  width: 30%;

  button {
    cursor: pointer;
  }
  > button:nth-of-type(1) {
    position: absolute;
    top: 20px;
    right: 25px;
    background: none;
    font-size: 25px;
    text-align: right;
  }
  div {
    display: flex;
    flex: 1;
    justify-content: space-between;
    button {
      width: 40px;
      height: 40px;
      margin: 10px;
      border-radius: 5px;
      font-size: 20px;
    }
    button:nth-of-type(1) {
      background: none;
      border: 1px solid rgb(3 0 71 / 9%);
      color: #e94560;
    }
    button:nth-of-type(2) {
      background: #f6f9fc;
    }
  }
`;
const CartContainer = styled.div`
  display: flex;

  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;

  .img {
    width: 150px;
    height: 150px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h4 span {
    color: #e94560;
    margin-left: 20px;
    font-weight: 500;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const CartDetails = styled.div`
  width: 70%;
  h3 {
    margin-top: 20px;
  }
  h4 {
    font-size: 15px;
    font-weight: 400;
    margin-top: 50px;
    color: grey;
  }
  @media (max-width: 767px) {
    width: auto;
    text-align: center;
  }
`;

const CartList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;
  background: white;
  /* margin-top: 30px; */

  h3 {
    font-weight: 400;
    font-size: 17px;
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
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NoItems = styled.h1`
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;
  margin: 10px;
  color: #e94560;
  font-size: 18px;
  margin-top: 30px;
  height: 130px;
`;

const Total = styled.div`
  width: 30%;
  margin-top: 30px;
  margin-left: 30px;
  height: 130px;
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: rgb(3 0 71 / 9%) 0px 1px 3px;

  div {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    font-size: 15px;
    font-weight: 400;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #e94560;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(3 0 71 / 9%);
    padding-bottom: 10px;
    color: #e94560;
  }
  @media (max-width: 767px) {
    width: fit-content;
    margin: 0;
  }
`;
