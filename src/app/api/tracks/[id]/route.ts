import { NextResponse } from "next/server";
import { tracks, Track } from "../../../data/tracks";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: "Missing track ID" }, { status: 400 });
    }

    const track = tracks.find(t => t.id === Number(id));
    
    if (!track) {
      return NextResponse.json({ error: "Track not found" }, { status: 404 });
    }

    return NextResponse.json(track);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const updates: Partial<Track> = await request.json();
    
    const trackIndex = tracks.findIndex(t => t.id === Number(id));
    
    if (trackIndex === -1) {
      return NextResponse.json({ error: "Track not found" }, { status: 404 });
    }
    
    tracks[trackIndex] = { ...tracks[trackIndex], ...updates };
    
    return NextResponse.json(tracks[trackIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const trackIndex = tracks.findIndex(t => t.id === Number(id));
    
    if (trackIndex === -1) {
      return NextResponse.json({ error: "Track not found" }, { status: 404 });
    }
    
    const deletedTrack = tracks.splice(trackIndex, 1)[0];
    
    return NextResponse.json({ message: "Track deleted", track: deletedTrack });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}