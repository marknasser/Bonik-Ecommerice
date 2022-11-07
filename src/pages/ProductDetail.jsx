import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsData, Flash } from "../assets/Data";
import styled from "styled-components";
import CartContext from "../store/cart-context";

function ProductDetail() {
  const params = useParams();
  const ctx = useContext(CartContext);

  const MergData = [...ProductsData, ...Flash];
  const ProductIndex = MergData.findIndex(
    (item) => item.name === params.prductName
  );
  const PRODUCT = MergData[ProductIndex];

  console.log(PRODUCT);

  return (
    <Container>
      <Left dic={PRODUCT.discount}>
        <img src={PRODUCT.cover} alt="" />
        <span>{PRODUCT.discount}% Off</span>
      </Left>

      <Right>
        <h2>{PRODUCT.name}</h2>
        <span>${PRODUCT.price}.00</span>
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          aliquid officiis minima commodi, rerum in amet, est velit praesentium
          necessitatibus, provident molestias numquam beatae vero ut cupiditate
          nisi inventore quas!
        </p>
        <button
          onClick={() => {
            ctx.addItem(PRODUCT);
          }}
        >
          Add To Cart
        </button>
      </Right>
    </Container>
  );
}

export default ProductDetail;
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  margin: 20px auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  position: relative;
  overflow: hidden;
  width: 60rem;
  span {
    position: absolute;
    background-color: #e94560;
    color: white;
    top: 15%;
    left: -20%;
    text-align: center;
    width: 100%;
    transform: rotate(325deg);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    /* filter: drop-shadow(5px 5px 5px #222); */
  }
  @media (max-width: 800px) {
    width: 15rem;
  }
`;
const Right = styled.div`
  /* display:flex ; */
  span {
    color: #e94560;
    font-weight: bolder;
    font-size: larger;
  }
  p {
    position: relative;
    margin: 15px 0 35px;
    letter-spacing: 1px;
    color: #846d6d;
  }
  p::after {
    content: "";
    position: absolute;
    width: 45%;
    height: 0.5px;
    background: #dfdfdf;
    bottom: -17px;
    left: 0;
  }
  button {
    background-color: #e94560;
    color: white;
    border-radius: 5px;
    padding: 8px 20px;
    transition: 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: #cd3a53;
  }
  .rate i {
    font-size: 15px;
    color: #ffcd4e;
    margin: 5px 5px 5px 0;
  }
  @media (max-width: 800px) {
    p::after {
      width: 45%;
      height: 0.5px;
      bottom: -17px;
      left: 50%;
      transform: translateX(-50%);
    }
    text-align: center;
  }
`;
