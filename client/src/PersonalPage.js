import React from 'react';
import styled from 'styled-components';
import { AiFillSetting } from 'react-icons/ai';
import HeaderLogo from './common/HeaderLogo';
import background from './image/background.jpg';
import cat from './image/cat.JPG';

function PersonalPage() {
  return (
    <>
      <TopBar>
        <LogoContainer>
          <HeaderLogo />
        </LogoContainer>
        <AiFillSetting className="setting" size="35" color="slateblue" />
        <div className="WriteButton">글쓰기</div>
      </TopBar>

      <ProfileContainer>
        <BgImageContainer src={background} alt="background" />
        <ProfileImage src={cat} alt="cat" />
        <ProfileNickname>skyme</ProfileNickname>
        <ProfileOneLine>안녕하세요. 반가워요!</ProfileOneLine>
        <ButtonContainer>
          <button type="button" className="btn1">이웃 목록</button>
          <button type="button" className="btn2">방명록</button>
        </ButtonContainer>
      </ProfileContainer>

      <ProgressBar />

      <ContentArea>
        <hr />
        <ContentIntro>
          <div className="writing">글</div>
          <div className="series">시리즈</div>
        </ContentIntro>

        <ContentContainer>

          <Content>
            <BookContent />
            <BookInfo>

              <BookTitleLine>
                <div>이상한나라의 앨리스</div>
                <div>| ★★★★★ 5.0</div>
              </BookTitleLine>

              <SummaryContent />

            </BookInfo>
          </Content>

          <Content>
            <BookContent />
            <BookInfo>

              <BookTitleLine>
                <div>이상한나라의 앨리스</div>
                <div>| ★★★★★ 5.0</div>
              </BookTitleLine>

              <SummaryContent />

            </BookInfo>
          </Content>

        </ContentContainer>
      </ContentArea>

    </>
  );
}

const TopBar = styled.div`
  display: flex;

  & .setting {
    position: absolute;
    right: 128px;
    top: 17px;
  }

  & .WriteButton {
    width: 70px;
    height: 30px;
    border-radius: 100px;
    background-color: white;
    border: 2px solid slateblue;
    font-weight: bold;
    color: slateblue;
    margin-top: 15px;
    position: absolute;
    right: 40px;
    text-align: center;
    padding-top: 8px;

  }
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 70px;
`;

const BgImageContainer = styled.img`
  width: 100%;
  height: 310px;
  object-fit: fill;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  height: 670px;

`;

const ProfileImage = styled.img`
  margin-top: 220px;
  margin-left: 45%;
  width: 140px;
  height: 140px;
  background-color: pink;
  position: absolute;
  border-radius: 500px;
`;

const ProfileNickname = styled.div`
  background-color: white;
  height: 40px;
  margin-top: 55px;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
`;

const ProfileOneLine = styled.div`
  background-color: white;
  height: 40px;
  // margin-top: 120px;
  text-align: center;
  font-size: 20px;
  // font-weight: bolder;
  color: gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  background-color: white;
  height: 20px;
  margin: auto;
  margin-top: 10px;

  & .btn1 {
  
    border: 3px solid slateblue;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    font-size: 18px;
    color: slateblue;
    background-color: white;
    display: block;
    // margin-left: 35%;
    margin-top: 20px;

  }

  & .btn2 {
  
    border: 3px solid slateblue;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    font-size: 18px;
    color: slateblue;
    background-color: white;
    display: block;
    margin-left: 15px;
    margin-top: 20px;

  }
`;

const ProgressBar = styled.div`
  width: 70%;
  height: 50px;
  background-color: gray;
  margin: auto;
  margin-top: 140px;
  margin-bottom: 50px;
  border-radius: 10px;
`;

const ContentIntro = styled.div`
  width: 30%;
  height: 70px;
  text-align: center;
  display: flex;
  font-weight: bold;
  margin: auto;
  
  margin-top: 20px;

  & .writing {
    width: 200px;
    height: 50px;
    font-size: 23px;
    color: black;
    text-align: center;
    display: block;
    border-bottom: 5px solid slateblue;
  }

  & .series {
    margin-left: 3%;
    width: 200px;
    height: 50px;
    font-size: 23px;
    color: black;
    text-align: center;
  }
`;

const ContentArea = styled.div`
  width: 75%;
  margin: auto;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 1200px;
  // background-color: green;
  margin: auto;
  margin-bottom: 60px;
`;

const Content = styled.div`
  height: 220px;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: pink;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BookContent = styled.div`
  width: 160px;
  height: 90%;
  background-color: white;
  margin: 10px 0 0 10px;
`;

const BookInfo = styled.div`
  align-items: row;
  margin: 10px 0 10px 10px;
  // background-color: yellow;
  width: 81%;
`;

const BookTitleLine = styled.div`
  display: flex;
`;

const SummaryContent = styled.div`
  width: 100%;
  height: 80%;
  background-color: slateblue;
  margin-top: 15px;
`;

export default PersonalPage;
