import { NextResponse } from "next/server";
import { tracks, Track } from "../../data/tracks"; // ✅ relative path

export async function GET() {
  return NextResponse.json(tracks);
}

export async function POST(request: Request) {
  const newTrack: Partial<Track> = await request.json();
  const track: Track = {
    id: tracks.length + 1,
    title: newTrack.title || "",
    artist: newTrack.artist || "",
    releaseDate: newTrack.releaseDate || "",
    genre: newTrack.genre || "",
    status: "Draft",
  };
  tracks.push(track);
  return NextResponse.json(track);
}
