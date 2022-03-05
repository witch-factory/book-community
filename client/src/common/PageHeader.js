import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import DropDownMenu from './DropDownMenu';

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin:0;
  height:10vh;
`;

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

function PageHeader() {
  return (
    <PageHeaderContainer>
      <HeaderLogo />
      <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={thirdMenuDropDown} />

    </PageHeaderContainer>
  );
}

export default PageHeader;
