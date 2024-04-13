import React from 'react';
import styled from 'styled-components';
import { Play } from './svg';
import { Menu } from './svg';
import { Back } from './svg';

interface Props {
  action: () => void;
  type: 'sm-menu' | 'sm-back' | 'lg';
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
      className={`bg-gradient-to-b from-gradient-pink to-gradient-blue shadow-s-secondary ${
        type === 'lg'
          ? 'w-[160px] h-[160px] md:w-[200px] md:h-[200px] p-[53px] md:p-[67px]'
          : 'w-[40px] h-[40px] md:w-[64px] md:h-[64px] 2xl:w-[94px] 2xl:h-[94px] p-[11px] md:p-[18px] 2xl:p-[27px]'
      }`}
      onClick={action}
    >
      {type === 'lg' && <Play />}
      {type === 'sm-menu' && <Menu />}
      {type === 'sm-back' && <Back />}
    </StyledButton>
  );
};

export default UtilButton;
