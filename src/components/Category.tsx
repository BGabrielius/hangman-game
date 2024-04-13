import React from 'react';
import styled from 'styled-components';
interface Props {
  category: string;
  action: () => void;
}
const StyledCategory = styled.li`
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

const Category: React.FC<Props> = ({ category, action }) => {
  return (
    <StyledCategory
      className='bg-c-blue text-white shadow-s-primary w-[324px] py-5 text-center text-[24px] md:text-f-heading-m md:py-[55px] 2xl:w-[384px] 2xl:py-[59px]'
      onClick={() => action}
    >
      {category}
    </StyledCategory>
  );
};

export default Category;
