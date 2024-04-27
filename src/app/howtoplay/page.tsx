'use client';

import { useRouter } from 'next/navigation';

import UtilButton from '@/components/UtilButton';
import Card from '@/components/Card';

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <main>
      <section className='flex justify-between items-center mb-20 md:mb-14'>
        <UtilButton action={() => router.replace('/')} type='sm-back' />
        <h2 className='stroke-home bg-gradient-to-b from-gradient-text to-white text-gradient-text text-transparent bg-clip-text text-[48px] md:text-[104px] 2xl:text-f-heading-xl'>
          How to Play
        </h2>

        <div className='hidden sm:block'></div>
      </section>
      <section className='w-full h-full flex flex-col gap-6 2xl:flex-row md:items-center 2xl:justify-center'>
        <Card
          title='CHOOSE A CATEGORY'
          description='First, choose a word category, like animals or movies. 
          The computer then randomly selects a secret word from that 
          topic and shows you blanks for each letter of the word.'
          num='01'
        />
        <Card
          title='Guess letters'
          description="Take turns guessing letters. The computer fills in the 
          relevant blank spaces if your guess is correct. If it's 
          wrong, you lose some health, which empties after eight 
          incorrect guesses."
          num='02'
        />
        <Card
          title='Win or lose'
          description='You win by guessing all the letters in the word before your 
          health runs out. If the health bar empties before you guess 
          the word, you lose.'
          num='03'
        />
      </section>
    </main>
  );
};

export default Page;
