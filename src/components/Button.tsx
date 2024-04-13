'use client';

import React from 'react';
import styled from 'styled-components';
interface Props {
  text: string;
  action: () => void;
  type: 'primary' | 'secondary';
}

const StyledButton = styled.button`
  border-radius: 40px;
  padding: 0.45rem 4rem;
  color: white;
  font-size: 32px;
  border: none;
  max-width: 260px;

  &:hover {
    opacity: 0.75;
  }
`;

const Button: React.FC<Props> = ({ text, action, type }) => {
  return (
    <StyledButton
      className={
        type === 'primary'
          ? 'bg-c-blue shadow-s-primary'
          : 'bg-gradient-to-b from-gradient-pink to-gradient-blue shadow-s-secondary'
      }
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};
export default Button;
