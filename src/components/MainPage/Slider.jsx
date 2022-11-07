import React from "react";
import styled from "styled-components";
import { MainData } from "../../assets/Data";
import Slider from "react-slick";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <Container>
      <SLiderCon {...settings}>
        {MainData.map((value, index) => {
          return (
            <>
              <Content key={index}>
                <div>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div>
                  <img src={value.cover} alt="" />
                </div>
              </Content>
            </>
          );
        })}
      </SLiderCon>
    </Container>
  );
};

export default SliderHome;
const Container = styled.section`
  width: 77%;
  max-width: 90%;
  margin: auto;
`;

const SLiderCon = styled(Slider)`
  ul {
    position: absolute;
    bottom: 20px;
  }
  ul li {
    border: 2px solid #b8b7b7;
    border-radius: 50%;
    padding: 10px;
  }

  ul li button {
    background: transparent !important;
    color: transparent !important;
  }

  ul li button::before {
    font-size: 15px !important;
    color: #0f3460;
    position: absolute;
    top: 2px;
    left: 0;
    margin: auto;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;

  h1 {
    font-size: 45px;
    line-height: 55px;
    margin: 50px 0 20px 0;
  }
  p {
    margin: 20px 0;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    margin-top: 30px;
    img {
      width: 200px;
      margin: auto;
    }
    h1 {
      font-size: 30px;
    }
  }
`;
