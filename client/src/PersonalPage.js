import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './common/HeaderLogo';
import background from './image/background.jpg';

const LogoContainer = styled.div`
  width: 300px;
`;

const BgImageContainer = styled.img`
  width: 100%;
  height: 500px;
  object-fit: fill;
`;

const ProfileContainer = styled.div`
  display: flex;
  position: relative

`;

const ProfileImage = styled.div`
  margin-top: 10%;
  margin-left: 44%;
  width: 200px;
  height: 200px;
  background-color: white;
  position: absolute;
  border-radius: 500px;
`;

function PersonalPage() {
  return (
    <>
      <LogoContainer>
        <HeaderLogo />
      </LogoContainer>

      <ProfileContainer>
        <BgImageContainer src={background} alt="background" />
        <ProfileImage>개인프로필</ProfileImage>
        {/* <p>한 줄 소개</p> */}
      </ProfileContainer>

      <button type="button">이웃</button>

      <div>목표달성 바</div>
      <div>
        <div>
          <div>글</div>
          <div>시리즈</div>
          <div>소개</div>
        </div>
        <div>
          <div>책</div>
          <div>
            <div>제목 평점</div>
            <div>요약</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalPage;
