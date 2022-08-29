import GameInfoPage from '@/components/GameInfoPage';

const apiSrc = process.env.NEXT_PUBLIC_API_URL;
const key = process.env.NEXT_PUBLIC_API_KEY;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${apiSrc}/games/${slug}?key=${key}`);
  const data = await res.json();

  return { props: { slug, info: data, }, };
}

export default GameInfoPage;
