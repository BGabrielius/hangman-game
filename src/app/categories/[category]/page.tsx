'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import data from '../../../data.json';
import UtilButton from '@/components/UtilButton';
import HealthBar from '@/components/HealthBar';
import { Heart } from '@/components/svg';
import styled from 'styled-components';
import Modal from '@/components/Modal';
import Letter from '@/components/Letter';

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
  @media screen and (min-width: 1440px) {
    gap: 3rem;
  }
`;

const page = () => {
  const params = useParams<{ category: string }>();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [category, _setCategory] = useState<string>(
    params.category.replace('%20', ' ')
  );

  const [unknownWord, setUnknownWord] = useState<any>();
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  // modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalHeadline, setModalHeadline] = useState<
    'Paused' | 'You Win' | 'You Lose'
  >('Paused');

  useEffect(() => {
    if (unknownWord) console.log('kek', unknownWord);
    if (!isMounted) {
      setIsMounted(true);
      selectGuessWord();
    }
  }, [isMounted, category]);

  const selectGuessWord = () => {
    if (data.categories.hasOwnProperty(category)) {
      const categoryData =
        data.categories[category as keyof typeof data.categories];
      const selected = categoryData[Math.floor(30 * Math.random())];
      selected.selected = true;
      setUnknownWord(selected.name.toUpperCase().split(''));
    }
    return;
  };
  return (
    <main className='w-full flex flex-col items-center justify-between'>
      <section className='mb-20 w-full flex justify-between items-center'>
        <StyledTopBar>
          <UtilButton type='sm-menu' action={() => setShowModal(true)} />
          <h3 className='text-white text-[40px] md:text-f-heading-m 2xl:text-f-heading-l'>
            {category}
          </h3>
        </StyledTopBar>
        <StyledTopBar>
          <HealthBar reEvaluate={() => undefined} />
          <div className='w-[26px] h-[24px] md:w-[54px] md:h-[49px]'>
            <Heart />
          </div>
        </StyledTopBar>
      </section>

      {showModal && (
        <Modal
          headline={modalHeadline}
          openModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
      <section className='h-full flex flex-col items-center justify-around gap-28'>
        <div className='h-full w-full flex flex-wrap items-center justify-center gap-2 md:gap-5 2xl:gap-6'>
          {unknownWord &&
            unknownWord.map((letter: string, index: number) => (
              <Letter
                action={() => undefined}
                letter={letter}
                type='primary'
                key={letter + index}
              />
            ))}
        </div>
        <div className='h-full w-full grid grid-cols-9 gap-y-6 gap-x-2 md:gap-x-4 2xl:gap-x-6'>
          {alphabet &&
            alphabet
              .toUpperCase()
              .split('')
              .map((letter: string, index: number) => (
                <Letter
                  action={() => undefined}
                  letter={letter}
                  type='secondary'
                  key={letter + index}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default page;
