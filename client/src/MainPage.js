import React, { useState } from 'react';
import styled from 'styled-components';

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
    <>
      <HeaderMainLogo>Reviewary</HeaderMainLogo>
      <HeaderSubLogo>너와 나의 리뷰 도서관</HeaderSubLogo>
    </>
  );
}

const DropDownMenuContainer = styled.div`
  color:#000000;
  width:10rem;
  margin: 0 auto;
`;

const DropDownMenuHeader = styled.div`
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
`;

const DropDownMenuListContainer = styled.div``;

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

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const menuToggle = () => setIsOpen(!isOpen);
  const onOptionSelected = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    // eslint-disable-next-line no-console
    console.log(selectedOption);
  };

  return (
    <>
      <HeaderLogo />
      <DropDownMenuListContainer>
        <DropDownMenuHeader onClick={menuToggle}>전체글</DropDownMenuHeader>
        {isOpen && (
          <DropDownMenuContainer>
            <DropDownMenuList>
              {firstMenuDropDown.map((item) => (
                <DropDownListItem
                  onClick={onOptionSelected(item)}
                  key={item}
                >
                  {item}
                </DropDownListItem>
              ))}
            </DropDownMenuList>
          </DropDownMenuContainer>
        )}
      </DropDownMenuListContainer>
    </>
  );
}

export default MainPage;
