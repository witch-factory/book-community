import React from 'react';
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
import CurrentBoardSummary from './common/CurrentBoardSummary';

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

const FirstBoardTitle = [
  '글제목 1',
  '글제목 2',
  '글제목 3',
  '글제목 4',
  '글제목 5',
  '글제목 6',
  '글제목 7',
  '글제목 8',
  '글제목 9',
  '글제목 10',
  '글제목 11',
  '글제목 12',
  '글제목 13',
  '글제목 14',
  '글제목 15',
];

function MainPage() {
  return (
    <VerticalContainer horizontal="center">
      <HorizontalContainer>
        <HeaderLogo />
        <HorizontalContainer horizontal="center">
          <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
          <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
          <DropDownMenu menuName="전체글" dropDownItemList={thirdMenuDropDown} />
        </HorizontalContainer>
      </HorizontalContainer>
      <SearchBox />
      <SlideMenu slideMenuImages={slideMenuImageList} />
      <HorizontalContainer>
        <CurrentBoardSummary BoardTitles={FirstBoardTitle} />
        <CurrentBoardSummary BoardTitles={FirstBoardTitle} />
      </HorizontalContainer>
    </VerticalContainer>
  );
}

export default MainPage;
