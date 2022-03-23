import React from 'react';
import book1 from '../../image/book1.jpg';
import book2 from '../../image/book2.jpg';
import book3 from '../../image/book3.jpg';
import book4 from '../../image/book4.jpg';
import book5 from '../../image/book5.jpg';
import {
  SlideMenu,
  MainPageSearchBox,
  SmallGroupSummary }
  from './styles';
import CommonPageLayout from '../../layout/CommonPageLayout';

const slideMenuImageList = [book1, book2, book3, book4, book5];

const smallGroupTitleList = [
  '소모임 모집글 1',
  '소모임 모집글 2',
  '소모임 모집글 3',
  '소모임 모집글 4',
];

function MainPage() {
  return (
    <CommonPageLayout>
      <MainPageSearchBox
        mainPhrase="원하는 것을 검색해 보세요
        책, 서평, 소모임, 책에 관련된 모든 것이 있답니다"
        subPhrase="원하는 게 딱히 없다면 추천해 드릴 수도 있어요!"
      />
      <SlideMenu slideMenuImages={slideMenuImageList} />
      <SmallGroupSummary TitleList={smallGroupTitleList} />
    </CommonPageLayout>

  );
}

export default MainPage;
