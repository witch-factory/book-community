import React from 'react';
import HeaderLogo from './common/HeaderLogo';
import HorizontalContainer from './common/HorizontalContainer';
import DropDownMenu from './common/DropDownMenu';

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

function Head() {
  return (
    <HorizontalContainer>
      <HeaderLogo />
      <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={thirdMenuDropDown} />

    </HorizontalContainer>
  );
}

export default Head;
