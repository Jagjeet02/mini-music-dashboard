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
  { id: 2, title: "Song B", artist: "Artist B", releaseDate: "2025-08-15", genre: "Rock", status: "Draft" }
];
