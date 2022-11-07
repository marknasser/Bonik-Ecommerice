import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../../store/cart-context";

const Search = ({ CartItem }) => {
  const ctx = useContext(CartContext);

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".fixed");
    search.classList.toggle("active-header", window.scrollY > 100);
  });

  return (
    <Container className="fixed">
      <Content>
        <div>
          <img src={logo} alt="" />
        </div>

        <SearchBox>
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search and hit enter..." />
          <span>All Category</span>
        </SearchBox>

        <CartBox>
          <i className="fa fa-user "></i>
          <div>
            <Link to="/cart">
              <i className="fa fa-shopping-bag "></i>
              <span>{ctx.units}</span>
            </Link>
          </div>
        </CartBox>
      </Content>
    </Container>
  );
};

export default Search;

const Container = styled.section`
  padding: 20px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: auto;
  gap: 50px;
  img {
    width: auto;
    height: auto;
  }
  @media (max-width: 767px) {
    /* justify-content: center; */
    /* gap: 20px; */
  }
`;

const SearchBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  i {
    width: 5%;
    text-align: center;
    font-size: 20px;
    opacity: 0.5;
    padding: 15px 20px;
    font-size: 17px;
  }

  input {
    flex: 1;
    padding: 10px;
    ::placeholder {
      font-size: 14px;
    }
  }

  span {
    opacity: 0.5;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const CartBox = styled.div`
  position: relative;
  display: flex;
  justify-content: end;

  span {
    position: absolute;
    top: -10px;
    right: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    background-color: #e94560;
    font-size: 12px;
    color: #fff;
  }

  i {
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #f3f5f9;
    margin-left: 20px;
    text-align: center;
    border-radius: 50%;
  }
`;
