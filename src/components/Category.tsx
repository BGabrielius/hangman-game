import React from 'react';
import styled from 'styled-components';
interface Props {
  category: string;
  action: () => void;
}
const StyledCategory = styled.button`
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

const Category: React.FC<Props> = ({ category, action }) => {
  return (
    <StyledCategory
      className='bg-c-blue text-white shadow-s-primary w-[324px] py-5 text-center text-[24px] rounded-[20px] md:rounded-[40px] md:text-f-heading-m md:py-[55px] 2xl:w-[384px] 2xl:py-[59px]'
      onClick={action}
      tabIndex={0}
    >
      {category}
    </StyledCategory>
  );
};

export default Category;
