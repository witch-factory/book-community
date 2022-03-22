import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const SearchTextBox = styled.input`
  width: 40vw;
  border-radius: 17.5rem 0 0 17.5rem;
  padding-left:1.2rem;
  height: 6vh;
  font-size: 2.5vh;
  border: 3px solid slateblue;

  :focus {
    outline: none;
    border: 3px solid slateblue;
  }
`;

const SearchButtonContainer = styled.button`
  width:4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1.5px solid black;
  border-radius: 0 17.5rem 17.5rem 0;
  padding: 3px;
  background-color: slateblue;
`;

function SearchBoxSearchButton() {
  return (
    <SearchButtonContainer>
      <MdSearch size="35" color="white" />
    </SearchButtonContainer>
  );
}

function SearchBox() {
  return (
    <SearchBoxContainer>
      <SearchTextBox placeholder="검색하기" />
      <SearchBoxSearchButton />
    </SearchBoxContainer>
  );
}

export default SearchBox;
