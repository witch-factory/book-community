import React from 'react';
import Head from './Head';
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

      <Head />

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
