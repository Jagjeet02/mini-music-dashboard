"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Track {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  status: string;
}

export default function Dashboard() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/api/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Link
        href="/track/upload"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Upload Track
      </Link>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Artist</th>
            <th className="p-2 border">Release Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td className="p-2 border">{track.title}</td>
              <td className="p-2 border">{track.artist}</td>
              <td className="p-2 border">{track.releaseDate}</td>
              <td className="p-2 border">{track.status}</td>
              <td className="p-2 border">
                <Link href={`/track/${track.id}`} className="text-blue-600">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
