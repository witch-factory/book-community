import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderLogo from './common/HeaderLogo';
import HorizontalContainer from './common/HorizontalContainer';
import DropDownMenu from './common/DropDownMenu';
import book from './image/basic-book.jpg';
import VerticalContainer from './common/VerticalContainer';

const firstMenuDropDown = [
  '자유게시판',
  '리뷰게시판',
  '장르별게시판',
];

const secondMenuDropDown = [
  '자유게시판',
  '리뷰게시판',
  '장르별게시판',
];

const SlideImage = styled.img`
  width:100%;
  height:70vh;
`;

function SlideItem({ img }) {
  return (
    <SlideImage src={img || book} />
  );
}

const SlideMenuContainer = styled.div`
  width:50%;
  overflow: hidden;
`;

const SlideButton = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #ffffff;
  }
`;
const SlideContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

function SlideMenu({ slideNumber }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // 현재 보여주고 있는 슬라이드
  const slideRef = useRef(0);

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
      <SlideContainer ref={slideRef}>
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </SlideContainer>
      <SlideButton onClick={prevSlide}>이전 슬라이드</SlideButton>
      <SlideButton onClick={nextSlide}>다음 슬라이드</SlideButton>
    </SlideMenuContainer>
  );
}

function MainPage() {
  return (
    <VerticalContainer direction="center">
      <HeaderLogo />
      <HorizontalContainer>
        <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
        <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
      </HorizontalContainer>
      <SlideMenu slideNumber={3} />
    </VerticalContainer>
  );
}

export default MainPage;
