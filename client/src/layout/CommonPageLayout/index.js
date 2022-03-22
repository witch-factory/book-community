import React from 'react';
import VerticalContainer from '../../common/VerticalContainer';
import PageHeader from '../../common/PageHeader';
import PageFooter from '../../common/PageFooter';

function CommonPageLayout({ children }) {
  return (
    <VerticalContainer>
      <PageHeader />
      {children}
      <PageFooter />
    </VerticalContainer>
  );
}

export default CommonPageLayout;
