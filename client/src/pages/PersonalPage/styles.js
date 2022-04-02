import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;

  & .setting {
    position: absolute;
    right: 140px;
    top: 24px;
  }

  & .WriteButton {
    width: 80px;
    height: 40px;
    border-radius: 100px;
    background-color: white;
    border: 2px solid slateblue;
    font-weight: bold;
    font-size: 16px;
    color: slateblue;
    margin-top: 22px;
    position: absolute;
    right: 50px;
    text-align: center;

  }

  & .WriteButton:hover {
    color: white;
    border: 2px solid gray;
    background-color: slateblue;
  }
`;

export const LogoContainer = styled.div`
  width: 300px;
  height: 10vh
  margin-bottom:1rem;
`;

export const BgImageContainer = styled.img`
  width: 100%;
  height: 310px;
  object-fit: fill;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  height: 400px;

`;

export const ProfileImage = styled.img`
  margin-top: 220px;
  margin-left: 45%;
  width: 140px;
  height: 140px;
  background-color: lightyellow;
  position: absolute;
  border-radius: 500px;
`;

export const ProfileNickname = styled.div`
  background-color: white;
  height: 40px;
  margin-top: 55px;
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
`;

export const ProfileOneLine = styled.div`
  background-color: white;
  height: 40px;
  // margin-top: 120px;
  text-align: center;
  font-size: 20px;
  // font-weight: bolder;
  color: gray;
`;

export const ButtonContainer = styled.div`
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

export const ProgressBar = styled.div`
  width: 70%;
  height: 50px;
  background-color: gray;
  margin: auto;
  margin-top: 140px;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const ContentIntro = styled.div`
  width: 30%;
  height: 70px;
  text-align: center;
  display: flex;
  font-weight: bold;
  margin: auto;
  
  margin-top: 20px;
  margin-bottom: 40px;

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

export const ContentArea = styled.div`
  width: 75%;
  margin: auto;
`;

export const ContentContainer = styled.div`
  width: 92%;
  height: 1200px;
  // background-color: green;
  margin: auto;
  margin-bottom: 60px;
`;

export const Content = styled.div`
  height: 220px;
  border: 2px solid lightgray;
  border-radius: 10px;
  background-color: lightyellow;
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const BookContent = styled.img`
  width: 160px;
  height: 90%;
  background-color: white;
  margin: 10px 0 0 10px;
`;

export const BookInfo = styled.div`
  align-items: row;
  margin: 10px 0 10px 18px;
  // background-color: yellow;
  width: 81%;
`;

export const BookTitleLine = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 10px;
`;

export const SummaryContent = styled.div`
  width: 100%;
  height: 70%;
  background-color: white;
  margin-top: 15px;
  border-radius: 10px;
`;
