import React from 'react';
import VerticalContainer from './common/VerticalContainer';
import PageHeader from './common/PageHeader';
import SearchBox from './common/SearchBox';
import PageFooter from './common/PageFooter';
import book5 from './image/book5.jpg';
import HorizontalContainer from './common/HorizontalContainer';

function BookCoverImage({ coverImg }) {
  return <img width="300" src={coverImg} alt="Book cover" />;
}

function BookInfoBox({ coverImg }) {
  return (
    <HorizontalContainer>
      <BookCoverImage coverImg={coverImg} />
      <h1>책 제목</h1>
    </HorizontalContainer>
  );
}

function BookInfoPage() {
  return (
    <VerticalContainer>
      <PageHeader />
      <SearchBox />
      <BookInfoBox coverImg={book5} />
      <PageFooter />
    </VerticalContainer>
  );
}

export default BookInfoPage;
