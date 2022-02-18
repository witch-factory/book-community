import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import book1 from '../image/book1.jpg';

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SlideImageContainer = styled.div`
  flex:1 0 auto;
  width: 100%;
  background: black;
`;

function SlideItem({ img }) {
  return (
    <SlideImageContainer>
      <SlideImage src={img || book1} />
    </SlideImageContainer>
  );
}

const SlideItemContainer = styled.div`
  width: 100%;
  height:300px;
  display: flex; //이미지들을 가로로 나열
`;

const SlideContainer = styled.div`
  width:700px;
  overflow: hidden;
`;

const SlideMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function SlideMenu({ slideMenuImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // 현재 보여주고 있는 슬라이드
  const slideRef = useRef(0);
  const slideNumber = slideMenuImages.length - 1;

  const nextSlide = () => {
    if (currentSlide >= slideNumber) {
      setCurrentSlide(() => 0);
    } else {
      setCurrentSlide((cur) => cur + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(() => slideNumber);
    } else {
      setCurrentSlide((cur) => cur - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <SlideMenuContainer>
      <MdArrowBackIosNew size="30" onClick={prevSlide} />
      <SlideContainer>
        <SlideItemContainer ref={slideRef}>
          {slideMenuImages.map((item) => (
            <SlideItem img={item} />
          ))}
        </SlideItemContainer>
      </SlideContainer>
      <MdArrowForwardIos size="30" onClick={nextSlide} />
    </SlideMenuContainer>
  );
}

export default SlideMenu;
