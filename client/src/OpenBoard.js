import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Head from './Head';
import VerticalContainer from './common/VerticalContainer';

function OpenBoard() {
  const navigate = useNavigate();
  return (
    <VerticalContainer horizontal="center">

      <Head />
      <PageTitle>
        <h1>자유게시판</h1>
        <p>자유롭게 글을 쓸 수 있는 공간입니다.</p>
      </PageTitle>

      <Container>
        <Table>
          <TableHead>
            <div>NO.</div>
            <div>글제목</div>
            <div>작성자</div>
            <div>조회수</div>
            <div>작성일</div>
          </TableHead>
        </Table>
      </Container>

      <Bottom>
        <UnorderedList>
          <li><Link to="/openBoard">1</Link></li>
          <li><Link to="/openBoard">2</Link></li>
          <li><Link to="/openBoard">3</Link></li>
        </UnorderedList>

        <button type="button" onClick={() => { navigate('/writeReview'); }}>글쓰기</button>
      </Bottom>

    </VerticalContainer>

  );
}

const PageTitle = styled.div`
    width: 1100px;
    margin: 1rem;

    & h1 {
        margin-top: 50px;
        text-align: center;
    }

    & p {
        text-align: center;
    }
`;

const Container = styled.div`
    width: 1100px;
    margin: 1rem;
    height: 50vh;
    background-color: skyblue;
`;

const Table = styled.div`
    width: 1100px;
    margin: 0px;
    background-color: pink;
`;

const TableHead = styled.div`
    display: flex;

    & div {
        margin-right: 150px;
        margin-left: 10px;
        font-size: 20px;

    }
`;

const UnorderedList = styled.ul`
    display: flex;
    list-style: none;
    width: 500px;
    margin-left: 500px;
    
    & li {
        margin: 5px;
        font-size: 20px;
    }
`;

const Bottom = styled.div`
    display: flex;
    width: 1100px;
    align-items: center;

    & button {
        width: 100px;
        background-color: white;
        border: 3px solid gray;
        border-radius: 20px;
        padding: 6px;
        font-size: 20px;
        color: gray;
    }

    & button:hover {
        background-color: slateblue;
        color: white;
    }
`;
export default OpenBoard;
