import styled from 'styled-components';

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.horizontal || 'flex-start')};
  justify-content: ${(props) => (props.vertical || 'flex-start')};
  
`;

export default VerticalContainer;
