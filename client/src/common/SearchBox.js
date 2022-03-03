import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchEngineContainer = styled.div`
  margin-bottom:1rem;
  width:100%;
  height:40vh;
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
  white-space: pre-wrap;
  text-align: center;
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
  width: 60vw;
  border-radius: 17.5rem 0 0 17.5rem;
  padding-left:1.2rem;
  height: 6vh;
  font-size: 4vh;
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

function SearchBox({ mainPhrase, subPhrase }) {
  return (
    <SearchEngineContainer>
      <SearchEngineMainPhrase>
        {mainPhrase}
      </SearchEngineMainPhrase>
      <SearchEngineSubPhrase>
        {subPhrase}
      </SearchEngineSubPhrase>
      <SearchBoxContainer>
        <SearchTextBox placeholder="검색하기" />
        <SearchBoxSearchButton />
      </SearchBoxContainer>
    </SearchEngineContainer>
  );
}

export default SearchBox;
