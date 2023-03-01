import styled from "styled-components";

export const JobsBlogContainer = styled.div`
  width: 100%;
  height: 574px;
  display: block;
  background: #F0F1F9;
  padding: 50px 210px 39px 210px;
  justify-content: space-between;
  font-family: Lato;

  @media only screen and (max-width: 600px) {
    padding: 26px 29px 38px 35px;
    height: 329px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    padding-left: 64px;
    height: 429px;
  }
  @media (min-width: 900px) and (max-width: 1366px) {
    padding-left: 80px;
    height: 550px;
  }
`;

export const JobsBlogCardContainer = styled.div`
  width: 100%;
  /* height: 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-bottom: 24px;
`;