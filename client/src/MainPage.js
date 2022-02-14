import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
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

const thirdMenuDropDown = [
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

const SlideItemContainer = styled.div`
  width:50%;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const SlideMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
      <MdArrowBackIosNew onClick={prevSlide} />
      <SlideItemContainer>
        <SlideContainer ref={slideRef}>
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
        </SlideContainer>
      </SlideItemContainer>
      <MdArrowForwardIos onClick={nextSlide} />
    </SlideMenuContainer>
  );
}

function MainPage() {
  return (
    <VerticalContainer horizontal="center">
      <HeaderLogo />
      <HorizontalContainer horizontal="center">
        <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
        <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
        <DropDownMenu menuName="전체글" dropDownItemList={thirdMenuDropDown} />
      </HorizontalContainer>
      <SlideMenu slideNumber={3} />
    </VerticalContainer>
  );
}

export default MainPage;
