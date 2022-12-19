import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const LaptopDeco = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); //box의 포지션 값
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <>
      <StickersContainer>
        <img className="bgImg" src="./macbookFront.png" alt="" />

        <Draggable onDrag={(e, data) => trackPos(data)}>
            <StickersImg src="./stickers/stickers.png" alt="" />
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}>
            <StickersImg src="./stickers/day-off.png" alt="" />
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}>
            <StickersImg src="./stickers/good-luck.png" alt="" />
        </Draggable>
        <Draggable onDrag={(e, data) => trackPos(data)}>
            <StickersImg src="./stickers/burger.png" alt="" />
        </Draggable>
      </StickersContainer>
    </>
  );
};

const StickersContainer = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  .bgImg {
    width: 30%;
  }
`;

const StickersImg = styled.img`
  position: absolute;
  cursor: move;
  margin: auto;
  width: 100px;
  z-index: 10;
`;

export default LaptopDeco;
