import { NextResponse } from "next/server";
import { tracks } from "../../../data/tracks";

// 'params' is directly typed, not wrapped inside another object
export async function GET(req: Request, context: any) {
  const { id } = context.params;

  const track = tracks.find((t) => t.id === Number(id));

  if (!track) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(track);
}
