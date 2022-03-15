import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:1rem;
  margin-bottom:1rem;
`;

const HeaderMainLogo = styled.h1`
  font-size:2.5rem;
  margin: 3px;
  color: slateblue;
`;

// const HeaderSubLogo = styled.h2`
//   font-size:1.2rem;
//   margin:0;
// `;

function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <HeaderLogoContainer>
      <HeaderMainLogo onClick={() => { navigate('/'); }}>Reviewary</HeaderMainLogo>
      {/* <HeaderSubLogo>리뷰어리, 너와 나의 리뷰 도서관</HeaderSubLogo> */}
    </HeaderLogoContainer>
  );
}
export default HeaderLogo;
