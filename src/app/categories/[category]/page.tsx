import HangmanGame from '@/components/HangmanGame';

export async function generateStaticParams() {
  return [
    { category: 'Movies' },
    { category: 'TV Shows' },
    { category: 'Countries' },
    { category: 'Capital Cities' },
    { category: 'Animals' },
    { category: 'Sports' },
  ];
}

const Page = ({ params }: { params: { category: string } }) => {
  return <HangmanGame params={params} />;
};

export default Page;
