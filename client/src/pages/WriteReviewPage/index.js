import React from 'react';
import { useNavigate } from 'react-router-dom';
import VerticalContainer from '../../common/VerticalContainer';
import StarRate from '../../common/StarRate';
import {
  Title,
  Wrap,
  Button,
  ButtonWrap,
} from './styles';

function WriteReviewPage() {
  const navigate = useNavigate();
  return (
    <VerticalContainer horizontal="center">
      <Title>Book Review</Title>

      <Wrap>
        <input className="title" type="text" placeholder="책 제목" />
        <StarRate />
        <textarea className="content" type="text" placeholder="/*자유롭게 입력하세요~*/" />

        <ButtonWrap>
          <Button type="button" className="backButton" onClick={() => { navigate('/openBoard'); }}>뒤로가기</Button>
          <Button type="button" className="inputButton">입력</Button>
        </ButtonWrap>
      </Wrap>
    </VerticalContainer>
  );
}

export default WriteReviewPage;
