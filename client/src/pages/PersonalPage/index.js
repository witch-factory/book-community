import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import HeaderLogo from '../../common/HeaderLogo';
import background from '../../image/background.jpg';
import cat from '../../image/cat.JPG';
import carrot from '../../image/carrot.jpg';

import {
  TopBar,
  LogoContainer,
  ProfileContainer,
  ProfileOneLine,
  ProfileNickname,
  ProfileImage,
  BgImageContainer,
  ButtonContainer,
  ProgressBar,
  ContentIntro,
  ContentArea,
  ContentContainer,
  Content,
  BookContent,
  BookInfo,
  BookTitleLine,
  SummaryContent,
}
  from './styles';

function PersonalPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar>
        <LogoContainer>
          <HeaderLogo />
        </LogoContainer>
        <AiFillSetting className="setting" size="35" color="slateblue" />
        <button type="button" className="WriteButton" onClick={() => { navigate('/writeReview'); }}>글쓰기</button>
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
            <BookContent src={carrot} alt="bookImage" />
            <BookInfo>

              <BookTitleLine>
                <div>당근 유치원</div>
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

export default PersonalPage;
