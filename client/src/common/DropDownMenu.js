import React, { useState } from 'react';
import styled from 'styled-components';
import VerticalContainer from './VerticalContainer';

const DropDownMenuBox = styled.div`
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
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  height:1.8rem;
  width:8rem;
  &:hover + ${DropDownMenuBox}{
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
  width: 9rem;
  position: absolute;
  z-index: 5;
  &:first-child{
    padding-top: 0.8rem;
  }
`;

const DropDownListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8rem;
`;

function DropDownMenu({ menuName, dropDownItemList }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const onOptionSelected = (value) => () => {
    setSelectedMenu(value);
    // eslint-disable-next-line no-console
    console.log(selectedMenu);
  };

  return (
    <VerticalContainer>
      <DropDownMenuHeader>{menuName}</DropDownMenuHeader>
      <DropDownMenuBox>
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
      </DropDownMenuBox>
    </VerticalContainer>
  );
}

DropDownMenu.defaultProps = {
  dropDownItemList: [],
};

export default DropDownMenu;
