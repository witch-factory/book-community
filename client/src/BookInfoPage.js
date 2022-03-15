import React from 'react';
import VerticalContainer from './common/VerticalContainer';
import PageHeader from './common/PageHeader';
import SearchBox from './common/SearchBox';
import PageFooter from './common/PageFooter';

function BookInfoPage() {
  return (
    <VerticalContainer>
      <PageHeader />
      <SearchBox
        mainPhrase="당신 주변에 어떤 사람들이 있는지, 그리고 그 사람들이 읽은 이야기는 무엇인지
        궁금하지 않나요?"
      />
      <PageFooter />
    </VerticalContainer>
  );
}

export default BookInfoPage;
