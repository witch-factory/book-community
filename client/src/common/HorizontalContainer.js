import styled from 'styled-components';

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.vertical || 'flex-start')};
  justify-content: ${(props) => (props.horizontal || 'flex-start')};
`;

export default HorizontalContainer;
