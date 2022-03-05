import styled from 'styled-components';
import React from 'react';

const SmallGroupSummaryContainer = styled.div`
  width:100%;
  height:30vh;
  background: #a2c7ff;
  margin-top:1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallGroupSummaryTitle = styled.h1`
  font-size: 2rem;
`;

const SmallGroupSummaryItem = styled.h3`
  margin:0.5rem;
  font-size:1rem;
`;

function SmallGroupSummary({ TitleList }) {
  return (
    <SmallGroupSummaryContainer>
      <SmallGroupSummaryTitle>현재 모집중인 소모임들</SmallGroupSummaryTitle>
      {TitleList.map(
        (groupTitle) => (
          <SmallGroupSummaryItem
            key={groupTitle}
          >
            {`#${groupTitle}`}
          </SmallGroupSummaryItem>
        ),
      )}
    </SmallGroupSummaryContainer>
  );
}

export default SmallGroupSummary;
