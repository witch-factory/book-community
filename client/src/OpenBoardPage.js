import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from './common/PageHeader';
import VerticalContainer from './common/VerticalContainer';

const posts = [
  {
    id: 3,
    title: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
    author: 'ㅇㅇ',
    views: 1500,
    date: '2022-03-07',
  },
  {
    id: 2,
    title: '이 책 재밌어요',
    author: '가느다란물방울',
    views: 567,
    date: '2022-03-06',
  },
  {
    id: 1,
    title: 'test',
    author: 'admin',
    views: 123,
    date: '2022-03-05',
  },
];

function OpenBoardPage() {
  const navigate = useNavigate();
  return (
    <VerticalContainer horizontal="center">
      <PageHeader />
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

        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            views={post.views}
            date={post.date}
          />
        ))}
      </Container>

      <Bottom>
        <UnorderedList>
          <li>
            <Link to="/openBoard">1</Link>
          </li>
          <li>
            <Link to="/openBoard">2</Link>
          </li>
          <li>
            <Link to="/openBoard">3</Link>
          </li>
        </UnorderedList>

        <button
          type="button"
          onClick={() => {
            navigate('/writeReview');
          }}
        >
          글쓰기
        </button>
      </Bottom>
    </VerticalContainer>
  );
}

function Post({ id, title, author, views, date }) {
  return (
    <TableHead>
      <div>{id}</div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{views}</div>
      <div>{date}</div>
    </TableHead>
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
export default OpenBoardPage;
