import React from 'react';
import styled from 'styled-components';
import Play from './svg/Play';
import Menu from './svg/Menu';
import Back from './svg/Back';

interface Props {
  action: () => void;
  type: 'sm-menu' | 'sm-back' | 'lg-play';
}
const StyledButton = styled.button`
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.75;
  }
`;

const UtilButton: React.FC<Props> = ({ action, type }) => {
  return (
    <StyledButton
      className={`bg-gradient-to-b from-gradient-pink to-gradient-blue ${
        type === 'lg-play'
          ? 'shadow-s-util-play w-[160px] h-[160px] md:w-[200px] md:h-[200px] p-[53px] md:p-[67px]'
          : 'shadow-s-util-sm md:shadow-s-util-lg w-[40px] h-[40px] md:w-[64px] md:h-[64px] 2xl:w-[94px] 2xl:h-[94px] p-[11px] md:p-[18px] 2xl:p-[27px]'
      }`}
      onClick={action}
    >
      {type === 'lg-play' && <Play />}
      {type === 'sm-menu' && <Menu />}
      {type === 'sm-back' && <Back />}
    </StyledButton>
  );
};

export default UtilButton;
