import React from 'react';
import styled from 'styled-components';
interface Props {
  title: string;
  description: string;
  num: string;
}

const StyledCard = styled.div`
  border-radius: 20px;
  padding: 2rem;
  background-color: white;

  @media screen and (min-width: 1440px) {
    padding: 3rem;
  }
`;

const Card: React.FC<Props> = ({ title, description, num }) => {
  return (
    <StyledCard className='flex min-h-[162px] w-full h-full gap-4 flex-col md:flex-row md:max-w-[750px] 2xl:flex-col 2xl:items-center 2xl:max-w-[384px] 2xl:min-h-[550px] 2xl:max-h-[550px]'>
      <span className='text-c-blue text-[24px] hidden md:block md:text-f-heading-l md:pr-8 2xl:pr-0'>
        {num}
      </span>
      <div className='flex flex-col 2xl:items-center 2xl:gap-6'>
        <div className='flex items-start gap-4'>
          <span className='text-c-blue text-[24px] md:hidden'>{num}</span>
          <h3 className='text-c-darknavy text-[24px] md:text-[40px] 2xl:text-f-heading-m'>
            {title}
          </h3>
        </div>
        <p className='text-[#887DC0] text-[16px] text-left md:text-[20px] 2xl:text-center 2xl:text-f-body'>
          {description}
        </p>
      </div>
    </StyledCard>
  );
};

export default Card;
