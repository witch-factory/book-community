import styled from 'styled-components';
import React from 'react';

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

export default PageFooter;
