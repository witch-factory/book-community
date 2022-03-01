import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchEngineContainer = styled.div`
  margin-bottom:1rem;
  width:100%;
  height:300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dee2e6;
`;

const SearchEngineMainPhrase = styled.h1`
  font-size:4vh;
  margin:0;
  margin-top:2rem;
`;

const SearchEngineSubPhrase = styled.h2`
  font-size:2.5vh;
  margin-bottom:1rem;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const SearchTextBox = styled.input`
  width: 40rem;
  border-radius: 17.5rem 0 0 17.5rem;
  padding-left:1.2rem;
  height: 4rem;
  font-size: 1.8rem;
`;

const SearchButtonContainer = styled.button`
  width:4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1.5px solid black;
  border-radius: 0 17.5rem 17.5rem 0;
  padding: 3px;
`;

function SearchBoxSearchButton() {
  return (
    <SearchButtonContainer>
      <MdSearch size="35" />
    </SearchButtonContainer>
  );
}

function SearchBox() {
  return (
    <SearchEngineContainer>
      <SearchEngineMainPhrase>
        원하는 것을 검색해 보세요.
        책, 서평, 소모임, 책에 관련된 모든 것이 있답니다.
      </SearchEngineMainPhrase>
      <SearchEngineSubPhrase>
        책에 관련된 것을 당신이 만들 수도 있어요.
      </SearchEngineSubPhrase>
      <SearchBoxContainer>
        <SearchTextBox placeholder="검색하기" />
        <SearchBoxSearchButton />
      </SearchBoxContainer>
    </SearchEngineContainer>
  );
}

export default SearchBox;
