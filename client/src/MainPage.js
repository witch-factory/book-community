import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderLogo from './common/HeaderLogo';
import HorizontalContainer from './common/HorizontalContainer';
import VerticalContainer from './common/VerticalContainer';

const DropDownMenuContainer = styled.div`
  display: none;
  color:#000000;
  width:10rem;
  margin: 0 auto;
  &:hover {
    display: block;
  }
`;

const DropDownMenuHeader = styled.div`
  margin: 0;
  padding: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  height:1.8rem;
  width:9rem;
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
  const [menuSelectedOption, setMenuSelectedOption] = useState(null);

  const onOptionSelected = (value) => () => {
    setMenuSelectedOption(value);
    // eslint-disable-next-line no-console
    console.log(menuSelectedOption);
  };

  return (
    <VerticalContainer>
      <DropDownMenuHeader>{menuName}</DropDownMenuHeader>
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
    </VerticalContainer>
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
