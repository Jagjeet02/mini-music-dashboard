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
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetch("/api/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);


  const filteredTracks = tracks.filter((track) => {
    const matchesSearch =
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : track.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="dashboard-main">
     <div className="main-header">
       <h1>
        Welcome to <span className="label">Tune Suno</span>
      </h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input secondary-btn"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select secondary-btn"
        >
          <option value="All">All</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
     </div>

        <Link href="/dashboard/track/upload" className="primary-btn upload-btn">
          Upload Track
        </Link>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Release Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track) => (
              <tr key={track.id}>
                <td>{track.title}</td>
                <td>{track.artist}</td>
                <td>{track.releaseDate}</td>
                <td>{track.status}</td>
                <td>
                  <Link
                    href={`/dashboard/track/${track.id}`}
                    className="view-track"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {filteredTracks.length === 0 && (
              <tr>
                <td className="filter-logic" colSpan={5}>
                  No tracks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
