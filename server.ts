import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { join } from 'path';
import moviesData from './movies_metadata.json';

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

const typedMoviesData: Movie[] = moviesData;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.get('/api/movies', (req, res) => {
  res.json(typedMoviesData);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = typedMoviesData.find(m => m.id === parseInt(req.params.id));
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});