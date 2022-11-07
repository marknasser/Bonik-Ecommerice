import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <Container>
      <Content>
        <CatLink>
          <span class="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-down"></i>
          </h4>
        </CatLink>

        <NavLinks onClick={() => setMobileMenu(false)}>
          <li>
            <NavLink activeClassName="active-link" to="/" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/products">
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-link" to="/about">
              ABOUT US
            </NavLink>
          </li>
        </NavLinks>

        {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button> */}
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  /* height: 8vh; */
  box-shadow: -1px 15px 17px -8px rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  justify-content: space-between;
  gap: 10px;

  a {
    display: block;
    transition: 0.5s;
    font-size: 15px;
    font-weight: 400;
    padding: 5px 10px;
  }
  a:hover,
  .active-link {
    background-color: #e94560;
    color: white;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const CatLink = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f6f9fc;
  padding: 0px 30px;
  border-radius: 5px;
  height: 6vh;
  width: fit-content;

  span {
    margin-right: 20px;
    font-size: 30px;
    margin-top: 10px;
  }

  h4 {
    font-weight: 500;
    margin-top: 12px;
  }

  h4 i {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;
