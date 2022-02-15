import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './common/HeaderLogo';
import HorizontalContainer from './common/HorizontalContainer';
import DropDownMenu from './common/DropDownMenu';
import book1 from './image/book1.jpg';
import book2 from './image/book2.jpg';
import book3 from './image/book3.jpg';
import book4 from './image/book4.jpg';
import book5 from './image/book5.jpg';
import SlideMenu from './common/SlideMenu';
import SearchBox from './common/SearchBox';
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

const slideMenuImageList = [book1, book2, book3, book4, book5];

const CurrentBoardSummaryBox = styled.div`
  width: 50rem;
  height:20rem;
  margin: 2rem;
  border: 1px solid #adb5bd;
  border-radius: 30px;
  box-shadow: 5px 5px #868e96;
`;

const CurrentBoardSummaryHeader = styled.div`
  height:1.2rem;
  padding:0.8rem 1rem;
  font-size: 1.1rem;
  border-bottom: 1px solid #adb5bd;
`;

function CurrentBoardSummary() {
  return (
    <HorizontalContainer>
      <CurrentBoardSummaryBox>
        <CurrentBoardSummaryHeader>현재 최신글</CurrentBoardSummaryHeader>
      </CurrentBoardSummaryBox>
    </HorizontalContainer>
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
      <SearchBox />
      <SlideMenu slideMenuImages={slideMenuImageList} />
      <CurrentBoardSummary />
    </VerticalContainer>
  );
}

export default MainPage;
