import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <Container>
      <Categories />
      <SliderHome />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
