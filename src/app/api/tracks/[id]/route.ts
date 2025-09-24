import { NextResponse } from "next/server";
import { tracks } from "../../../data/tracks";

interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  const { id } = params;

  const track = tracks.find((t) => t.id === Number(id));
  if (!track) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(track);
}
