import React from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';
import book1 from './image/book1.jpg';
import book2 from './image/book2.jpg';
import book3 from './image/book3.jpg';
import book4 from './image/book4.jpg';
import book5 from './image/book5.jpg';
import SlideMenu from './common/SlideMenu';
import SearchBox from './common/SearchBox';
import VerticalContainer from './common/VerticalContainer';
import SmallGroupSummary from './SmallGroupSummary';

const slideMenuImageList = [book1, book2, book3, book4, book5];

const smallGroupTitleList = [
  '소모임 모집글 1',
  '소모임 모집글 2',
  '소모임 모집글 3',
  '소모임 모집글 4',
];

const siteMenuList = [
  '자유게시판',
  '리뷰게시판',
  '어떤게시판',
  '게시판이름',
];

const PageFooterContainer = styled.div`
  width:100%;
  background: #343a40;
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:1rem;
  padding-bottom: 5rem;
`;

const SiteMapListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:0 0.3rem;
`;

const SiteMapListTitle = styled.h2`
  font-size: 1.5rem;
  text-align: left;
`;

const SiteMapListItem = styled.h3`
  margin:0;
  font-size: 1rem;
  font-weight: normal;
`;

function SiteMapList({ title, menuList }) {
  return (
    <SiteMapListContainer>
      <SiteMapListTitle>{title}</SiteMapListTitle>
      {menuList.map((item) => <SiteMapListItem key={item}>{item}</SiteMapListItem>)}
    </SiteMapListContainer>
  );
}

function PageFooter() {
  return (
    <PageFooterContainer>
      <SiteMapListContainer>
        <SiteMapList title="게시판1" menuList={siteMenuList} />
      </SiteMapListContainer>
      <SiteMapListContainer>
        <SiteMapList title="게시판2" menuList={siteMenuList} />
      </SiteMapListContainer>
      <SiteMapListContainer>
        <SiteMapList title="게시판3" menuList={siteMenuList} />
      </SiteMapListContainer>
    </PageFooterContainer>
  );
}

function MainPage() {
  return (

    <VerticalContainer>

      <PageHeader />

      <SearchBox
        mainPhrase="원하는 것을 검색해 보세요.
        책, 서평, 소모임, 책에 관련된 모든 것이 있답니다."
        subPhrase="원하는 게 딱히 없다면 추천해 드릴 수도 있어요."
      />
      <SlideMenu slideMenuImages={slideMenuImageList} />
      <SmallGroupSummary TitleList={smallGroupTitleList} />

      <PageFooter />
    </VerticalContainer>

  );
}

export default MainPage;
