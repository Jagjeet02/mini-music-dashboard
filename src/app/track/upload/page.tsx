"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadTrack() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", artist: "", releaseDate: "", genre: "" });

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload New Track</h1>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="artist" placeholder="Artist" value={form.artist} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} className="w-full p-2 border rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
      </form>
    </div>
  );
}
