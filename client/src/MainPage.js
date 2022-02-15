import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import HeaderLogo from './common/HeaderLogo';
import HorizontalContainer from './common/HorizontalContainer';
import DropDownMenu from './common/DropDownMenu';
import book1 from './image/book1.jpg';
import book2 from './image/book2.jpg';
import book3 from './image/book3.jpg';
import book4 from './image/book4.jpg';
import book5 from './image/book5.jpg';
import SlideMenu from './common/SlideMenu';
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

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

const SearchTextBox = styled.input`
  width: 15rem;
  border-radius: 15rem;
  padding-left:1rem;
  height: 2rem;
  font-size: 1.5rem;
`;

const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SearchBoxSearchButton() {
  return (
    <SearchButtonContainer>
      <MdSearch size="30" />
    </SearchButtonContainer>
  );
}

function SearchBox() {
  return (
    <SearchBoxContainer>
      <SearchTextBox />
      <SearchBoxSearchButton />
    </SearchBoxContainer>
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
    </VerticalContainer>
  );
}

export default MainPage;
