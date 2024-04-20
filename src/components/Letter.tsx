import React from 'react';
import styled from 'styled-components';

interface Props {
  letter: string;
  action: () => void;
  type: 'primary' | 'secondary';
}
const StyledLetter = styled.li``;

const Letter: React.FC<Props> = ({ letter, action, type }) => {
  return (
    <StyledLetter
      className={` 
        ${
          letter === ' '
            ? 'bg-transparent shadow-none text-[40px] px-3 py-1 rounded-[40px] md:text-[64px] md:px-8 md:py-2 2xl:text-f-heading-l 2xl:px-10 2xl:py-0'
            : type === 'primary'
            ? 'font-bold text-[40px] px-2 py-1 bg-c-blue text-white shadow-s-primary rounded-[12px] md:rounded-[32px] 2xl:rounded-[40px] md:text-[64px] md:px-8 md:py-2 2xl:text-f-heading-l 2xl:px-10 2xl:py-0'
            : 'm-[auto] text-[24px] p-[10px] bg-white text-c-darknavy rounded-[8px] md:rounded-[24px] md:text-f-heading-m md:px-6 md:py-[6px] 2xl:px-[46px] hover:bg-c-blue hover:text-white hover:cursor-pointer'
        }`}
      onClick={() => action}
    >
      {letter}
    </StyledLetter>
  );
};

export default Letter;
