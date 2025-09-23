import { NextResponse } from "next/server";
import { tracks } from "../../../data/tracks";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const track = tracks.find(t => t.id === Number(params.id));
  if (!track) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(track);
}
