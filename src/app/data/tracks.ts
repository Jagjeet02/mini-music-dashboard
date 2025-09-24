// src/data/tracks.ts
export interface Track {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  status: string;
}

export const tracks: Track[] = [
  { id: 1, title: "Song A", artist: "Artist A", releaseDate: "2025-09-01", genre: "Pop", status: "Published" },
  { id: 2, title: "Song B", artist: "Artist B", releaseDate: "2025-08-15", genre: "Rock", status: "Draft" },
  { id: 3, title: "So High", artist: "Sidhu Moose Wala", releaseDate: "2017-08-14", genre: "Hip-Hop", status: "Published" },
  { id: 4, title: "Laung Laachi", artist: "Mannat Noor", releaseDate: "2018-03-21", genre: "Romantic", status: "Published" },
  { id: 5, title: "295", artist: "Sidhu Moose Wala", releaseDate: "2021-07-23", genre: "Hip-Hop", status: "Published" },
  { id: 6, title: "Bijlee Bijlee", artist: "Harrdy Sandhu", releaseDate: "2021-10-30", genre: "Pop", status: "Published" },
  { id: 7, title: "Excuses", artist: "AP Dhillon", releaseDate: "2020-12-23", genre: "Pop", status: "Published" }
];
