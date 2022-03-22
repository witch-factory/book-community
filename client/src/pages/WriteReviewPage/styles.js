import styled from 'styled-components';

export const Title = styled.h1`
    margin: 0px 0px 5px 0px;
    width: 100%;
    height: 7vh;
    text-align: center;
    background-color: slateblue;
    color: white;
    font-size: 50px;

`;

export const Wrap = styled.div`
    width: 1100px;
    margin: 1rem;
    height: 65vh;
    display: flex;
    flex-direction: column;

    & .title {
        width: 40%;
        height: 8%;
        border-radius: 20px;
        postion: absolute;
        margin-left: 30%;
        font-size: 20px;
        background-color: lightyellow;
        border: 3px solid skyblue;
    }

    & .title:hover {
        outline: none;
    }

    & .content {
        width: 80%;
        height: 80%;
        border-radius: 10px;
        postion: absolute;
        margin-left: 10%;
        font-size: 18px;
        border: 4px solid yellowgreen;
        background-color: lightyellow;
    }

    & .content:hover {
      background-color: white;
      outline: none;
    }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  // position: absolute;
  // background-color: green;
  margin-left: 10%;
  margin-top: 30px;
  .backButton:hover {
    background-color: #9787f8;
  }
  .inputButton {
    margin-left: 34%;
    background-color: slateblue;
  }
`;

export const Button = styled.button`
    width: 100px;
    background-color: gray;
    border: 3px solid gray;
    border-radius: 20px;
    padding: 6px;
    font-size: 20px;
    color: white;
    &:hover {
        background-color: slateblue;
    }
`;
