import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];

function StarRate({ givenRate = 0, readOnly = false }) {
  const [clicked, setClicked] = useState([0, 0, 0, 0, 0]);
  const [rate, setRate] = useState(givenRate);

  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    setRate(index + 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      clickStates[i] = (i <= index) ? 1 : 0;
    }
    setClicked(clickStates);
  };

  return (
    <Wrap>
      <Stars>
        {ARRAY.map((el) => (
          <FaStar
            key={el}
            size="40"
            color={rate <= el ? 'gray' : 'red'}
            onClick={readOnly ? null : () => handleStarClick(el)}
            className={clicked[el] && 'yellowStar'}
          />
        ))}
        <Rate>
          {rate}
          점
        </Rate>
      </Stars>
    </Wrap>
  );
}

export default StarRate;

const Rate = styled.div`
  margin: 3px 10px;
  font-size: 27px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  margin-left: 39%;
  margin-bottom: 20px;

`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
