import React from 'react';
import VerticalContainer from './common/VerticalContainer';
import PageHeader from './common/PageHeader';
import SearchBox from './common/SearchBox';
import PageFooter from './common/PageFooter';
import book5 from './image/book5.jpg';

function BookCoverImage({ coverImg }) {
  return <img src={coverImg} alt="Book cover" />;
}

function BookInfoPage() {
  return (
    <VerticalContainer>
      <PageHeader />
      <SearchBox />
      <BookCoverImage coverImg={book5} />
      <PageFooter />
    </VerticalContainer>
  );
}

export default BookInfoPage;
