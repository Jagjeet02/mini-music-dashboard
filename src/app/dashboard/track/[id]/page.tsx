// src/app/dashboard/track/[id]/page.tsx
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

export default function TrackDetails({ params }: { params: Promise<{ id: string }> }) {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    async function fetchTrack() {
      const resolvedParams = await params;
      fetch(`/api/tracks/${resolvedParams.id}`)
        .then((res) => res.json())
        .then((data) => setTrack(data));
    }
    fetchTrack();
  }, [params]);

  if (!track) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600 loader"></div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "bg-green-200 text-green-800";
      case "draft":
        return "bg-gray-200 text-gray-800";
      case "error":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="main-container">
      <div className="view-main">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="">
            {track.title}
          </h1>
          <p className="mt-2 text-xl font-medium text-gray-500">
            A detailed look at the track&apos;s information.
          </p>
        </div>

        {/* Details Grid */}
        <div className="view-content">
          {/* Artist Card */}
          <div className="  view-card">
            <span className="icon">🎤</span>
            <div>
              <p className="card-title">Artist</p>
              <p className="card-detail">{track.artist}</p>
            </div>
          </div>

          {/* Release Date Card */}
          <div className="  view-card"> 
            <span className="icon">📅</span>
            <div>
              <p className="card-title">Release Date</p>
              <p className="card-detail">{track.releaseDate}</p>
            </div>
          </div>

          {/* Genre Card */}
          <div className="  view-card"> 
            <span className="icon">🎶</span>
            <div>
              <p className="card-title">Genre</p>
              <p className="card-detail">{track.genre}</p>
            </div>
          </div>

          {/* Status Card */}
          <div className="  view-card"> 
            <span className="icon">📌</span>
            <div>
              <p className="card-title">Status</p>
              <span className={`status ${getStatusColor(track.status)}`}>
                {track.status}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="back-btn">
          <Link href="/dashboard">
          <button className="primary-btn">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}