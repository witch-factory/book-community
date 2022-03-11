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
  height:10vh;
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
  background-color: #9787f8;
  color: white;
  border-radius: 50px;
  margin-left: auto;
  margin-right: 70px;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.3rem;
  height:1.8rem;
  min-width:8rem;
  max-width: 100%;
  
  :hover {
    color: lightyellow;
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
