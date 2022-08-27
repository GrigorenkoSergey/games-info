import styled from 'styled-components';

import Layout from '../Layout';
import GameCard from './GameCard';
import SortingBar from './SortingBar';

const imageAddressMock = 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg';

const games = [
  { name: 'Game1', poster: imageAddressMock, rating: 50, release: new Date(2021, 1, 1).toDateString() },
  { name: 'Game2', poster: imageAddressMock, rating: 60, release: new Date(2021, 1, 2).toDateString() },
  { name: 'Game3', poster: imageAddressMock, rating: 70, release: new Date(2021, 1, 3).toDateString() },
  { name: 'Game4', poster: imageAddressMock, rating: 80, release: new Date(2021, 1, 4).toDateString() },
  { name: 'Game5', poster: imageAddressMock, rating: 90, release: new Date(2021, 1, 5).toDateString() },
  { name: 'Game6', poster: imageAddressMock, rating: 95, release: new Date(2021, 1, 6).toDateString() },
  { name: 'Game7', poster: imageAddressMock, rating: 100, release: new Date(2021, 1, 7).toDateString() },
];

export default function HomePage() {
  return (
    <Layout title="Select your Game!">
      <SortingBar />
      { games.map(g => <GameCard key={g.name} {...g} />) }
    </Layout>
  );
}
