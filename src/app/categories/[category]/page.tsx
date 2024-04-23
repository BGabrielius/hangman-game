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

// type CurrentGuessWork = {
//   letter: string;
//   correct: boolean;
// };

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
  // current guesses
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (guessedLetters) console.log(guessedLetters);
    if (unknownWord) console.log('kek', unknownWord);
    if (!isMounted) {
      setIsMounted(true);
      selectGuessWord();
    }
  }, [isMounted, category, guessedLetters]);

  const selectGuessWord = () => {
    if (data.categories.hasOwnProperty(category)) {
      const categoryData =
        data.categories[category as keyof typeof data.categories];
      let selected = categoryData[Math.floor(30 * Math.random())];

      selected.selected = true;
      setUnknownWord(selected.name.toUpperCase());
    }
    return;
  };
  const guess = (e: any) => {
    let guessed =
      e.target.tagName == 'P'
        ? e.target.innerText
        : e.target.firstChild.innerText;

    setGuessedLetters(
      (prevGuessedLetters) => new Set(prevGuessedLetters.add(guessed))
    );
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
          <HealthBar
            reEvaluate={() => undefined}
            onFalseGuess={() => undefined}
          />
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
        <div className='h-full w-full flex flex-wrap items-center justify-center gap-x-8 md:gap-x-16 lg:gap-x-20 2xl:gap-x-28 gap-y-3'>
          {unknownWord &&
            unknownWord.split(' ').map((word: string, index: number) => (
              <ul
                className='flex gap-2 md:gap-4 lg:gap-5 2xl:gap-6'
                key={word + index}
              >
                {word.split('').map((letter: string, index: number) => (
                  <Letter
                    letter={letter}
                    type='primary'
                    key={letter + index}
                    revealed={guessedLetters.has(letter)}
                  />
                ))}
              </ul>
            ))}
        </div>
        <div className='h-full w-[324px] md:w-[704px] 2xl:w-[1173px] grid grid-cols-9 gap-y-6 gap-x-2 md:gap-x-4 2xl:gap-x-6'>
          {alphabet &&
            alphabet
              .toUpperCase()
              .split('')
              .map((letter: string, index: number) => (
                <Letter
                  action={
                    guessedLetters.has(letter) ? () => {} : (e: any) => guess(e)
                  }
                  letter={letter}
                  type='secondary'
                  key={letter + index}
                  selected={guessedLetters.has(letter)}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default page;
