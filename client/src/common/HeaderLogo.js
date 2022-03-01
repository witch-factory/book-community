import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import VerticalContainer from './VerticalContainer';

const HeaderMainLogo = styled.h1`
  font-size:2.5rem;
  margin: 3px;
  color: slateblue;
`;

const HeaderSubLogo = styled.h2`
  font-size:1.2rem;
  margin:0;
`;

function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <VerticalContainer horizontal="center">
      <HeaderMainLogo onClick={() => { navigate('/'); }}>Reviewary</HeaderMainLogo>
      <HeaderSubLogo>리뷰어리, 너와 나의 리뷰 도서관</HeaderSubLogo>
    </VerticalContainer>
  );
}
export default HeaderLogo;
