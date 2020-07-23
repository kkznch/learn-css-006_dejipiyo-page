import React from "react";
import styled, { keyframes } from "styled-components";
import LogoPng from "../../assets/images/logo.png";
import MachoMicronnSvg from "../../assets/images/macho-micronn.svg";
import MachoZunSvg from "../../assets/images/macho-zun.svg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const FadeIn = keyframes`
from {
  opacity: 0;
};

to {
  opacity: 1;
};
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  margin-top: 0%;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
  animation-delay: 3s;
`;

const Fluffy = keyframes`
from {

};

to {
transform: translateY(4rem);
};
`;

const LogoImg = styled.img`
  height: 100%;
  width: 100%;
  max-height: 32rem;
  max-width: 32rem;
  animation-name: ${Fluffy};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;
`;

const FixedContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;
`;

const KekezunDive = keyframes`
from {
};

to {
  transform: translate(0, 0);
};
`;

const MicronnDive = keyframes`
from {
};

to {
  transform: translate(0, 0);
};
`;

const GuruGuru = keyframes`
from {
  transform: rotate(0deg);
};

to {
  transform: rotate(360deg);
};
`;

const MachoZunImg = styled.img`
  height: 100%;
  width: 100%;
  animation-name: ${GuruGuru};
  animation-duration: 0.1s;
  animation-iteration-count: 8;
  animation-delay: 1s;
  animation-timing-function: linear;
`;

const FixedLeft = styled.div`
  flex: 1;
  transform: translate(400%, -400%);
  animation-name: ${KekezunDive};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`;

const FixedCenter = styled.div`
  flex: 2 1 auto;
`;

const MachoMicronnImg = styled.img`
  height: 100%;
  width: 100%;
  animation-name: ${GuruGuru};
  animation-duration: 0.1s;
  animation-iteration-count: 8;
  animation-delay: 1s;
  animation-timing-function: linear;
`;

const FixedRight = styled.div`
  flex: 1;
  transform: translate(-400%, -400%);
  animation-name: ${MicronnDive};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 1s;
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <LogoImg src={LogoPng}></LogoImg>
        </Top>
      </Container>
      <FixedContainer>
        <FixedLeft>
          <MachoZunImg src={MachoZunSvg}></MachoZunImg>
        </FixedLeft>
        <FixedCenter></FixedCenter>
        <FixedRight>
          <MachoMicronnImg src={MachoMicronnSvg}></MachoMicronnImg>
        </FixedRight>
      </FixedContainer>
    </Wrapper>
  );
};
