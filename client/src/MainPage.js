import React, { useState } from 'react';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderMainLogo = styled.h1`
  font-size:3rem;
  margin: 3px;
`;

const HeaderSubLogo = styled.h2`
  font-size:1.5rem;
  margin:0;
`;

function HeaderLogo() {
  return (
    <VerticalContainer>
      <HeaderMainLogo>Reviewary</HeaderMainLogo>
      <HeaderSubLogo>너와 나의 리뷰 도서관</HeaderSubLogo>
    </VerticalContainer>
  );
}

const DropDownMenuContainer = styled.div`
  display: none;
  color:#000000;
  width:10rem;
  margin: 0 auto;
`;

const DropDownMenuHeader = styled.div`
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  &:hover + ${DropDownMenuContainer}{
    display:block;
  }
`;

const DropDownMenuList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border:2px solid #000000;
  box-sizing: border-box;
  color:#000000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child{
    padding-top: 0.8rem;
  }
`;

const DropDownListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
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

function DropDownMenu({ menuName, dropDownItemList }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [menuSelectedOption, setMenuSelectedOption] = useState(null);

  const menuToggle = () => setMenuOpen(!menuOpen);
  const onOptionSelected = (value) => () => {
    setMenuSelectedOption(value);
    setMenuOpen(false);
    // eslint-disable-next-line no-console
    console.log(menuSelectedOption);
  };

  return (
    <>
      <DropDownMenuHeader onClick={menuToggle}>{menuName}</DropDownMenuHeader>
      <DropDownMenuContainer>
        <DropDownMenuList>
          {dropDownItemList.map((item) => (
            <DropDownListItem
              onClick={onOptionSelected(item)}
              key={item}
            >
              {item}
            </DropDownListItem>
          ))}
        </DropDownMenuList>
      </DropDownMenuContainer>
    </>
  );
}

DropDownMenu.defaultProps = {
  dropDownItemList: [],
};

function MainPage() {
  return (
    <HorizontalContainer>
      <HeaderLogo />
      <HorizontalContainer>
        <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
        <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
      </HorizontalContainer>
    </HorizontalContainer>
  );
}

export default MainPage;
