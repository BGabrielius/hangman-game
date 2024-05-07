import HangmanGame from '@/components/HangmanGame';

export async function generateStaticParams() {
  return [
    { category: 'Movies' },
    { category: 'TV%20Shows' },
    { category: 'Countries' },
    { category: 'Capital%20Cities' },
    { category: 'Animals' },
    { category: 'Sports' },
  ];
}

const Page = ({ params }: { params: { category: string } }) => {
  return <HangmanGame params={params} />;
};

export default Page;
