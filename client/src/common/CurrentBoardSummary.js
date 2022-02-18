import styled from 'styled-components';
import HorizontalContainer from './HorizontalContainer';

const CurrentBoardSummaryBox = styled.div`
  width: 23rem;
  height:20rem;
  margin: 2rem;
  border: 1px solid #adb5bd;
  border-radius: 30px;
  box-shadow: 5px 5px #868e96;
`;

const CurrentBoardSummaryHeader = styled.div`
  height:1.2rem;
  padding:0.8rem 1rem;
  font-size: 1.1rem;
  border-bottom: 1px solid #adb5bd;
`;

const CurrentBoardSummaryList = styled.ul``;

const CurrentBoardSummaryItem = styled.li`
  margin:0.7rem 0;
`;

const FirstBoardTitle = [
  '글제목 1',
  '글제목 2',
  '글제목 3',
  '글제목 4',
  '글제목 5',
  '글제목 6',
  '글제목 7',
  '글제목 8',
  '글제목 9',
  '글제목 10',
  '글제목 11',
  '글제목 12',
  '글제목 13',
  '글제목 14',
  '글제목 15',
];

function CurrentBoardSummary({ BoardSummaryName, BoardTitles = FirstBoardTitle }) {
  return (
    <HorizontalContainer>
      <CurrentBoardSummaryBox>
        <CurrentBoardSummaryHeader>
          {BoardSummaryName || '게시판 1 최신글'}
        </CurrentBoardSummaryHeader>
        <CurrentBoardSummaryList>
          {BoardTitles.slice(0, 7).map((title) => (
            <CurrentBoardSummaryItem
              key={title}
              // 글 제목 간 중복이 있을 수 있으므로 추후 이 key 는 수정 예정
            >
              {title}
            </CurrentBoardSummaryItem>
          ))}
        </CurrentBoardSummaryList>
      </CurrentBoardSummaryBox>
    </HorizontalContainer>
  );
}

export default CurrentBoardSummary;
