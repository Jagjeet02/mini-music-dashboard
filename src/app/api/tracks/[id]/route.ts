import { NextResponse } from "next/server";
import { tracks } from "../../../data/tracks";

// No extra interface — use the inline type exactly as Next.js expects
export async function GET(
  request: Request,
  context: { params: { id: string } } // this exact type works
) {
  const { id } = context.params;

  const track = tracks.find((t) => t.id === Number(id));

  if (!track) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(track);
}
