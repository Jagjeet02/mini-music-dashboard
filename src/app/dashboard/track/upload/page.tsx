"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadTrack() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    artist: "",
    releaseDate: "",
    genre: "",
  });

  // Track which input is focused
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/dashboard");
  }

  return (
    <div className="upload-main">
      <h1>Upload New Track</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-inputs">
          {/* Title */}
          <div
            className={`input-field ${
              focusedField === "title" || form.title ? "focused" : ""
            }`}
          >
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              onFocus={() => setFocusedField("title")}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {/* Artist */}
          <div
            className={`input-field ${
              focusedField === "artist" || form.artist ? "focused" : ""
            }`}
          >
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              name="artist"
              value={form.artist}
              onChange={handleChange}
              onFocus={() => setFocusedField("artist")}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {/* Release Date */}
          <div
            className={`input-field focused`}
          >
            <label htmlFor="releaseDate">Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={form.releaseDate}
              onChange={handleChange}
            />
          </div>

          {/* Genre */}
          <div
            className={`input-field ${
              focusedField === "genre" || form.genre ? "focused" : ""
            }`}
          >
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              name="genre"
              value={form.genre}
              onChange={handleChange}
              onFocus={() => setFocusedField("genre")}
              onBlur={() => setFocusedField(null)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button className="primary-btn">
          Upload
        </button>
      </form>
    </div>
  );
}
