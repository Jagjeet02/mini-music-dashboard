"use client";

import { useEffect, useState } from "react";

interface Track {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  status: string;
}

export default function TrackDetails({ params }: { params: Promise<{ id: string }> }) {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function fetchTrack() {
      const resolvedParams = await params; // ✅ unwrap Promise
      fetch(`/api/tracks/${resolvedParams.id}`)
        .then((res) => res.json())
        .then((data) => setTrack(data));
    }
    fetchTrack();
  }, [params]);

  if (!track) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{track.title}</h1>
      <p><strong>Artist:</strong> {track.artist}</p>
      <p><strong>Release Date:</strong> {track.releaseDate}</p>
      <p><strong>Genre:</strong> {track.genre}</p>
      <p><strong>Status:</strong> {track.status}</p>
    </div>
  );
}
