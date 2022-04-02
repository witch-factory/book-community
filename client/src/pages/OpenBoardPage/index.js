import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PageTitle,
  Container,
  Bottom,
  Table,
  TableHead,
  UnorderedList }
  from './styles';
import CommonPageLayout from '../../layout/CommonPageLayout';

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
    <CommonPageLayout>
      <div style={{ margin: 'auto' }}>
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
      </div>
    </CommonPageLayout>
  );
}

function Post({
  id, title, author, views, date,
}) {
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

export default OpenBoardPage;
