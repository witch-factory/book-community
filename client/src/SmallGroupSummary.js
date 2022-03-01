import styled from 'styled-components';
import React from 'react';

const SmallGroupSummaryContainer = styled.div`
  width:1100px;
  background: #e7f5ff;
  margin-top:1rem;
`;

const SmallGroupSummaryTitle = styled.h1`
  font-size: 2rem;
`;

const SmallGroupSummaryItem = styled.h3`
  font-size:1rem;
`;

function SmallGroupSummary({ TitleList }) {
  return (
    <SmallGroupSummaryContainer>
      <SmallGroupSummaryTitle>현재 모집중인 소모임들</SmallGroupSummaryTitle>
      {TitleList.map((groupTitle) => <SmallGroupSummaryItem>{groupTitle}</SmallGroupSummaryItem>)}
    </SmallGroupSummaryContainer>
  );
}

export default SmallGroupSummary;
