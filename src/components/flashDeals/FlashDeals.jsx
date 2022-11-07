import React from "react";
import styled from "styled-components";
import FlashCard from "./FlashCard";

const FlashDeals = ({ addToCart }) => {
  return (
    <Container>
      <Heading>
        <i className="fa fa-bolt"></i>
        <h1>Flash Deals</h1>
      </Heading>
      <FlashCard addToCart={addToCart} />
    </Container>
  );
};

export default FlashDeals;

const Container = styled.section`
  max-width: 90%;
  margin: auto;
  background: #f6f9fc;
  padding: 50px 0;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;

  i {
    margin: 10px;
  }
`;
