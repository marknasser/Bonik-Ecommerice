import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="box">
        <h1>Bonik</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="img ">
            <i class="fa-brands fa-google-play"></i>
            <span>Google Play</span>
          </div>
          <div className="img ">
            <i class="fa-brands fa-app-store-ios"></i>
            <span>App Store</span>
          </div>
        </div>
      </div>

      <div className="box">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="box">
        <h2>Customer Care</h2>
        <ul>
          <li>Help Center </li>
          <li>How to Buy </li>
          <li>Track Your Order </li>
          <li>Corporate & Bulk Purchasing </li>
          <li>Returns & Refunds </li>
        </ul>
      </div>
      <div className="box">
        <h2>Contact Us</h2>
        <ul>
          <li>
            70 Washington Square South, New York, NY 10012, United States{" "}
          </li>
          <li>Email: uilib.help@gmail.com</li>
          <li>Phone: +1 1123 456 780</li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  background-color: #0f3460;
  padding: 100px 0;
  color: #fff;
  > div {
    width: 310px;
  }

  h1 {
    margin-bottom: 30px;
    color: #e94560;
    font-weight: 800;
    font-style: italic;
  }

  .img {
    display: flex;
    background-color: #0c2a4d;
    padding: 15px 20px;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
  }
  .img:hover {
    background-color: #e94560;
  }
  .img i {
    font-size: 20px;
    margin: 5px;
  }
  .img span {
    margin-top: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    opacity: 0.5;
    margin-bottom: 20px;
  }
  h2 {
    width: fit-content;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #e94560;
  }
  li {
    margin-bottom: 10px;
    opacity: 0.5;
  }
`;
