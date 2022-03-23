import styled from 'styled-components';

export const PageTitle = styled.div`
  width: 1100px;
  margin: 1rem;

  & h1 {
    margin-top: 50px;
    text-align: center;
  }

  & p {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 1100px;
  margin: 1rem;
  height: 50vh;
  background-color: skyblue;
`;

export const Table = styled.div`
  width: 1100px;
  margin: 0;
  background-color: pink;
`;

export const TableHead = styled.div`
  display: flex;

  & div {
    margin-right: 150px;
    margin-left: 10px;
    font-size: 20px;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  list-style: none;
  width: 500px;
  margin-left: 500px;

  & li {
    margin: 5px;
    font-size: 20px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  width: 1100px;
  align-items: center;

  & button {
    width: 100px;
    background-color: white;
    border: 3px solid gray;
    border-radius: 20px;
    padding: 6px;
    font-size: 20px;
    color: gray;
  }

  & button:hover {
    background-color: slateblue;
    color: white;
  }
`;
