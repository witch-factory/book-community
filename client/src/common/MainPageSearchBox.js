import styled from 'styled-components';
import SearchBox from './SearchBox';

const SearchEngineContainer = styled.div`
  margin-bottom:1rem;
  width:100%;
  height:40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightyellow;
`;

const SearchEngineMainPhrase = styled.h1`
  font-size:3vh;
  margin:0;
  margin-top:2rem;
  white-space: pre-wrap;
  text-align: center;
`;

const SearchEngineSubPhrase = styled.h2`
  font-size:2vh;
  margin-top:1.5rem;
  margin-bottom:1rem;
`;

function MainPageSearchBox({ mainPhrase, subPhrase }) {
  return (
    <SearchEngineContainer>
      <SearchEngineMainPhrase>
        {mainPhrase}
      </SearchEngineMainPhrase>
      <SearchEngineSubPhrase>
        {subPhrase}
      </SearchEngineSubPhrase>
      <SearchBox />
    </SearchEngineContainer>
  );
}

export default MainPageSearchBox;
