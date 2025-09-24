import { NextResponse } from "next/server";
import { tracks } from "../../../data/tracks";

export async function GET(request: Request, context: any) {
  // Get the id from the URL
  const id = context?.params?.id;

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const track = tracks.find(t => t.id === Number(id));

  if (!track) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(track);
}
