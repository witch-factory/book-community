import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { nanoid } from 'nanoid';
import book1 from '../../image/book1.jpg';
import SearchBox from '../../common/SearchBox';

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SlideImageContainer = styled.div`
  flex:1 0 auto;
  width: 100%;
  background: black;
  //추후에 다른 색으로 바꿉시다.
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
  height:400px;
  display: flex; //이미지들을 가로로 나열
`;

const SlideContainer = styled.div`
  width:100%;
  overflow: hidden;
`;

const SlideMenuContainer = styled.div`
  width:100%;
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
            <SlideItem key={nanoid()} img={item} />
          ))}
        </SlideItemContainer>
      </SlideContainer>
      <MdArrowForwardIos size="30" onClick={nextSlide} />
    </SlideMenuContainer>
  );
}

const SearchEngineContainer = styled.div`
  margin-bottom:1rem;
  width:100%;
  height:40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightyellow;
`;

const SearchEngineMainPhrase = styled.h1`
  font-size:3vh;
  margin:0;
  margin-top:2rem;
  white-space: pre-wrap;
  text-align: center;
`;

const SearchEngineSubPhrase = styled.h2`
  font-size:2vh;
  margin-top:1.5rem;
  margin-bottom:1rem;
`;

function MainPageSearchBox({ mainPhrase, subPhrase }) {
  return (
    <SearchEngineContainer>
      <SearchEngineMainPhrase>
        {mainPhrase}
      </SearchEngineMainPhrase>
      <SearchEngineSubPhrase>
        {subPhrase}
      </SearchEngineSubPhrase>
      <SearchBox />
    </SearchEngineContainer>
  );
}

const SmallGroupSummaryContainer = styled.div`
  width:100%;
  height:30vh;
  background: #a2c7ff;
  margin-top:1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallGroupSummaryTitle = styled.h1`
  font-size: 2rem;
`;

const SmallGroupSummaryItem = styled.h3`
  margin:0.5rem;
  font-size:1rem;
`;

function SmallGroupSummary({ TitleList }) {
  return (
    <SmallGroupSummaryContainer>
      <SmallGroupSummaryTitle>현재 모집중인 소모임들</SmallGroupSummaryTitle>
      {TitleList.map(
        (groupTitle) => (
          <SmallGroupSummaryItem
            key={groupTitle}
          >
            {`#${groupTitle}`}
          </SmallGroupSummaryItem>
        ),
      )}
    </SmallGroupSummaryContainer>
  );
}

export { SlideMenu, MainPageSearchBox, SmallGroupSummary };
