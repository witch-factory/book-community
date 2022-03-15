import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './common/HeaderLogo';
import background from './image/background.jpg';
import cat from './image/cat.JPG';

const LogoContainer = styled.div`
  width: 300px;
  height: 70px;
`;

const BgImageContainer = styled.img`
  width: 100%;
  height: 450px;
  object-fit: fill;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: whtie;
  height: 670px;

`;

const ProfileImage = styled.img`
  margin-top: 345px;
  margin-left: 46%;
  width: 180px;
  height: 180px;
  background-color: pink;
  position: absolute;
  border-radius: 500px;
`;

const ProfileNickname = styled.div`
  background-color: white;
  height: 40px;
  margin-top: 85px;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
`;

const ProfileOneLine = styled.div`
  background-color: white;
  height: 40px;
  // margin-top: 120px;
  text-align: center;
  font-size: 25px;
  // font-weight: bolder;
  color: gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  background-color: white;
  height: 50px;

  & .btn1 {
  
    border: 3px solid slateblue;
    border-radius: 10px;
    width: 300px;
    height: 50px;
    font-size: 23px;
    color: slateblue;
    background-color: white;
    display: block;
    margin-left: 35%;
    margin-top: 20px;

  }

  & .btn2 {
  
    border: 3px solid slateblue;
    border-radius: 10px;
    width: 300px;
    height: 50px;
    font-size: 23px;
    color: slateblue;
    background-color: white;
    display: block;
    margin-left: 10px;
    margin-top: 20px;

  }
`;

function PersonalPage() {
  return (
    <>
      <LogoContainer>
        <HeaderLogo />
      </LogoContainer>

      <ProfileContainer>
        <BgImageContainer src={background} alt="background" />
        <ProfileImage src={cat} alt="cat" />
        <ProfileNickname>skyme</ProfileNickname>
        <ProfileOneLine>안녕하세요. 반가워요!</ProfileOneLine>
        <ButtonContainer>
          <button type="button" className="btn1">+ 이웃추가</button>
          <button type="button" className="btn2">메세지 보내기</button>
        </ButtonContainer>
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
