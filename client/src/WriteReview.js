import React from 'react';
import styled from 'styled-components';
import VerticalContainer from './common/VerticalContainer';

function WriteReview() {
  return (
    <VerticalContainer horizontal="center">
      <Title>Book Review</Title>

      <Wrap>
        <input className="title" type="text" placeholder="책 제목" />
        <div>평가하기 ★★★★★</div>
        <input className="content" type="text" placeholder="내용" />
      </Wrap>
      <Button type="button">입력</Button>
    </VerticalContainer>
  );
}

const Title = styled.h1`
    margin: 0px 0px 5px 0px;
    width: 100%;
    height: 7vh;
    text-align: center;
    background-color: slateblue;
    color: white;
    font-size: 50px;

`;
const Wrap = styled.div`
    width: 1100px;
    margin: 1rem;
    height: 50vh;
    display: flex;
    flex-direction: column;

    & .title {
        width: 40%;
        height: 8%;
        border-radius: 20px;
        postion: absolute;
        margin-left: 30%;
    }

    & .title:hover {
        border: 2px solid blue;
        background-color: aqua;
    }

    & div {
        text-align: center;
        padding: 20px;
    }

    & .content {
        width: 80%;
        height: 80%;
        border-radius: 10px;
        postion: absolute;
        margin-left: 10%;
    }
`;

const Button = styled.button`
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
export default WriteReview;
