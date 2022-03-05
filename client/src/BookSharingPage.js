import React from 'react';
import VerticalContainer from './common/VerticalContainer';
import PageHeader from './common/PageHeader';
import SearchBox from './common/SearchBox';
import PageFooter from './common/PageFooter';

function BookSharingPage() {
  return (
    <VerticalContainer>
      <PageHeader />
      <SearchBox
        mainPhrase="당신 주변에 어떤 사람들이 있는지, 그리고 그 사람들이 읽은 이야기는 무엇인지
        궁금하지 않나요?"
        subPhrase="당신도 다른 사람들과, 책을 통해서 이야기를 만들어 나갈 수 있어요.
        주소를 알려주시면 주변의 책을 알려 드릴게요."
      />
      <PageFooter />
    </VerticalContainer>
  );
}

export default BookSharingPage;
