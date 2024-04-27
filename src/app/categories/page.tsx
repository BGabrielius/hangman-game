'use client';
import { useRouter } from 'next/navigation';

import Category from '@/components/Category';
import UtilButton from '@/components/UtilButton';
import data from '../../data.json';

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <main className='flex flex-col items-center'>
      <section className='w-full flex justify-between items-center mb-20 md:mb-14'>
        <UtilButton action={() => router.replace('/')} type='sm-back' />
        <h2 className='stroke-home bg-gradient-to-b from-gradient-text to-white text-gradient-text text-transparent bg-clip-text text-[48px] md:text-[104px] 2xl:text-f-heading-xl'>
          Pick a Category
        </h2>

        <div className='hidden sm:block'></div>
      </section>
      <section className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-8 md:max-w-[700px] 2xl:grid-cols-3 2xl:gap-x-[420px]'>
        {data &&
          Object.keys(data.categories).map((category: any) => (
            <Category
              key={category}
              action={() => router.push(`/categories/${category}`)}
              category={category}
            />
          ))}
      </section>
    </main>
  );
};

export default Page;
