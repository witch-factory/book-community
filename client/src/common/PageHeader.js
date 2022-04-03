import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import DropDownMenu from './DropDownMenu';

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin:0;
  height: 10vh;
  // background-color:green;
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

const MyPage = styled.div`
  
  margin-left: auto;
  margin-right: 70px;
  min-width: 110px;
  height: 30px;
  border-radius: 100px;
  background-color: white;
  border: 2px solid slateblue;
  font-weight: bold;
  font-size: 17px;
  color: slateblue;
  margin-top: 15px;
  text-align: center;
  padding-top: 8px;
  
  
  :hover {
    background-color: slateblue;
    color: white;
  }
`;

function PageHeader() {
  const navigate = useNavigate();

  return (
    <PageHeaderContainer>
      <HeaderLogo />
      <DropDownMenu menuName="전체글" dropDownItemList={firstMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={secondMenuDropDown} />
      <DropDownMenu menuName="전체글" dropDownItemList={thirdMenuDropDown} />
      <MyPage onClick={() => { navigate('/personalPage'); }}>마이페이지</MyPage>

    </PageHeaderContainer>
  );
}

export default PageHeader;
