import React from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';
import HorizontalContainer from './common/HorizontalContainer';
import book1 from './image/book1.jpg';
import book2 from './image/book2.jpg';
import book3 from './image/book3.jpg';
import book4 from './image/book4.jpg';
import book5 from './image/book5.jpg';
import SlideMenu from './common/SlideMenu';
import SearchBox from './common/SearchBox';
import VerticalContainer from './common/VerticalContainer';
import CurrentBoardSummary from './common/CurrentBoardSummary';
import SmallGroupSummary from './SmallGroupSummary';

const slideMenuImageList = [book1, book2, book3, book4, book5];

const firstBoardTitleList = [
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

const smallGroupTitleList = [
  '소모임 모집글 1',
  '소모임 모집글 2',
  '소모임 모집글 3',
  '소모임 모집글 4',
];

const PageFooterContainer = styled.div`
  width:1100px;
  background: #343a40;
  color:white;
`;

function PageFooter() {
  return (
    <PageFooterContainer>
      <h1>하단 메뉴</h1>
    </PageFooterContainer>
  );
}

function MainPage() {
  return (

    <VerticalContainer horizontal="center">

      <PageHeader />

      <SearchBox />

      <SlideMenu slideMenuImages={slideMenuImageList} />
      <SmallGroupSummary TitleList={smallGroupTitleList} />
      <HorizontalContainer>
        <CurrentBoardSummary BoardTitles={firstBoardTitleList} />
        <CurrentBoardSummary BoardTitles={firstBoardTitleList} />
      </HorizontalContainer>
      <PageFooter />
    </VerticalContainer>

  );
}

export default MainPage;
