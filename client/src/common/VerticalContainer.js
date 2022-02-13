import styled from 'styled-components';

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.direction || 'flex-start')};
`;

export default VerticalContainer;
