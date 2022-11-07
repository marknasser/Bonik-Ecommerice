import React from "react";
import styled from "styled-components";

const Head = () => {
  return (
    <Container>
      <div>
        <i className="fa fa-phone"></i>
        <label> +88012 3456 7894</label>
        <i className="fa fa-envelope"></i>
        <label> support@ui-lib.com</label>
      </div>
      <div>
        <label>Theme FAQ"s</label>
        <label>Need Help?</label>
        {/* <span>🏳️‍⚧️</span>
        <label>EN</label>
        <span>🏳️‍⚧️</span>
        <label>USD</label> */}
      </div>
    </Container>
  );
};

export default Head;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #0f3460;
  padding: 20px 20px;
  color: #fff;
  /* max-width: 90%; */
  margin: auto;
  > div {
  }

  i {
    margin-right: 10px;
  }
  label {
    margin-right: 30px;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    justify-content: center;
    padding: 20px 0;
    div:nth-of-type(2) {
      display: none;
    }
  }
`;
