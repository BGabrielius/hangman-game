'use client';

import { useEffect, useState } from 'react';

import data from '../data.json';

import UtilButton from '@/components/UtilButton';
import HealthBar from '@/components/HealthBar';
import Heart from '@/components/svg/Heart';
import styled from 'styled-components';
import Modal from '@/components/Modal';
import Letter from '@/components/Letter';

interface Props {
  params: {
    category: string;
  };
}

interface Health {
  timesReduced: number;
  current: number;
}
type SubCategory = {
  name: string;
  selected: boolean;
};
type WordToGuess = {
  word: string;
  count: number;
};

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

const HangmanGame: React.FC<Props> = ({ params }) => {
  const [unknownWord, setUnknownWord] = useState<WordToGuess>({
    word: '',
    count: 0,
  });
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalHeadline, setModalHeadline] = useState<
    'Paused' | 'You Win' | 'You Lose'
  >('Paused');

  const [allGuessedLetters, setAllGuessedLetters] = useState<Set<string>>(
    new Set()
  );
  const [correctlyGuessedLetters, setCorrectlyGuessedLetters] = useState<
    Set<string>
  >(new Set());

  const [health, setHealth] = useState<Health>({
    timesReduced: 0,
    current: 100,
  });

  const category: string = params.category.replace('%20', ' ');

  useEffect(() => {
    if (
      unknownWord.count &&
      correctlyGuessedLetters.size === unknownWord.count
    ) {
      setModalHeadline('You Win');
      setShowModal(true);
    }
    if (!unknownWord.word) selectGuessWord();
  }, [correctlyGuessedLetters, allGuessedLetters, unknownWord]);
  const onFalseGuess = () => {
    if (health.timesReduced === 7) {
      setHealth({ current: 0, timesReduced: 8 });
      setModalHeadline('You Lose');
      setShowModal(true);
      return;
    }

    setHealth({
      timesReduced: health.timesReduced + 1,
      current: health.current - 12.5,
    });
  };

  const selectGuessWord = () => {
    if (unknownWord.word) return;
    if (data.categories.hasOwnProperty(category)) {
      const categoryData =
        data.categories[category as keyof typeof data.categories];

      const unselectedCategoryData = categoryData.filter(
        (item: SubCategory) => !item.selected
      );

      if (unselectedCategoryData.length === 0) return;

      let randomIndex: number = Math.floor(
        Math.random() * unselectedCategoryData.length
      );
      let selectedWord: SubCategory = unselectedCategoryData[randomIndex];
      // selectedWord.selected = true;

      setUnknownWord({
        count: new Set(selectedWord.name.replaceAll(' ', '').toUpperCase())
          .size,
        word: selectedWord.name.toUpperCase(),
      });
    }
  };
  const guess = (e: any) => {
    let guessed =
      e.target.tagName == 'P'
        ? e.target.innerText
        : e.target.firstChild.innerText;
    if (unknownWord && unknownWord.word.split('').includes(guessed)) {
      setCorrectlyGuessedLetters((prev) => new Set(prev.add(guessed)));
    } else {
      onFalseGuess();
    }
    setAllGuessedLetters((prev) => new Set(prev.add(guessed)));
  };

  return (
    <main className='w-full h-full flex flex-col items-center justify-between'>
      <section className='mb-24 w-full flex justify-between items-center'>
        <StyledTopBar>
          <UtilButton type='sm-menu' action={() => setShowModal(true)} />
          <h3 className='text-white text-[40px] md:text-f-heading-m 2xl:text-f-heading-l'>
            {category}
          </h3>
        </StyledTopBar>
        <StyledTopBar>
          <HealthBar currentHealth={health.current} />
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
            unknownWord.word.split(' ').map((word: string, index: number) => (
              <ul
                className='flex gap-2 md:gap-4 lg:gap-5 2xl:gap-6'
                key={word + index}
              >
                {word.split('').map((letter: string, index: number) => (
                  <Letter
                    letter={letter}
                    type='primary'
                    key={letter + index}
                    revealed={correctlyGuessedLetters.has(letter)}
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
                    allGuessedLetters.has(letter)
                      ? () => {}
                      : (
                          e: React.MouseEvent<
                            HTMLLIElement | HTMLParagraphElement
                          >
                        ) => guess(e)
                  }
                  letter={letter}
                  type='secondary'
                  key={letter + index}
                  selected={allGuessedLetters.has(letter)}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default HangmanGame;
