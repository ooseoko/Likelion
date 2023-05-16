import React from "react";
import styled from "styled-components";
import Image from "./success.png";

const SuccessContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffeecc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessTitle = styled.h1`
  font-size: 84px;
  color: #ff5e00;
  margin-bottom: 10px;
  font-family: '맑은 고딕', sans-serif;
`;

const SuccessMessage = styled.p`
  font-size: 42px;
  color: #ff5e00;
  margin-bottom: 5px;
  font-family: '맑은 고딕', sans-serif;
`;

const SuccessImage = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 20px;
  margin-top: 40px;
  border-radius: 10px;
`;

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessTitle>Success!</SuccessTitle>
      <SuccessMessage>성공하셨습니다. 축하합니다!!</SuccessMessage>
      <SuccessMessage>완료한 프로젝트는 자신의 GitHub에 올려주세요!</SuccessMessage>
      <SuccessImage src={Image} alt="Success" />
    </SuccessContainer>
  );
};

export default Success;
