import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

const SearchTextBox = styled.input`
  width: 15rem;
  border-radius: 15rem 0 0 15rem;
  padding-left:1rem;
  height: 2rem;
  font-size: 1.5rem;
`;

const SearchButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1.5px solid black;
  border-radius: 0 15rem 15rem 0;
  padding: 3px;
`;

function SearchBoxSearchButton() {
  return (
    <SearchButtonContainer>
      <MdSearch size="25" />
    </SearchButtonContainer>
  );
}

function SearchBox() {
  return (
    <SearchBoxContainer>
      <SearchTextBox />
      <SearchBoxSearchButton />
    </SearchBoxContainer>
  );
}

export default SearchBox;
