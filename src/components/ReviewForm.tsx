import type React from "react";

import { useState, type SetStateAction } from "react";
import { TESTIMONIALS_URL } from "../lib/api";
import axios from "axios";

interface Props {
    setUpdateList: React.Dispatch<SetStateAction<number>>;
}

const ReviewForm = ({ setUpdateList } : Props) => {
  const [name, setName] = useState("");
  const [band, setBand] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const bandNum = typeof band === "string" ? Number.parseFloat(band) : band;
      if (Number.isNaN(bandNum)) throw new Error("Invalid band");
      const createTestimonial = {
        name,
        band: bandNum,
        message,
        avatarUrl: avatarUrl.trim() || undefined,
      };
      await axios.post(TESTIMONIALS_URL, createTestimonial)
      setUpdateList(prev => prev + 1);
      setSuccess("Thanks for sharing your experience!");
      setName("");
      setBand("");
      setMessage("");
      setAvatarUrl("");
    } catch (err) {
      setError("Could not submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="reviews" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-bold">Share your review</h3>
          <p className="mt-2 text-slate-600">
            Help others by sharing your IELTS preparation experience.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
        >
          {success && (
            <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-emerald-900">
              {success}
            </div>
          )}
          {error && (
            <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-900">
              {error}
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="grid gap-2 md:col-span-2">
              <label htmlFor="r-name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="r-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                placeholder="Simran Kaur"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="r-band" className="text-sm font-medium">
                Overall Band
              </label>
              <input
                id="r-band"
                required
                type="number"
                step="0.5"
                min={0}
                max={9}
                value={band}
                onChange={(e) => setBand(e.target.value as unknown as number)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                placeholder="7.5"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="r-message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="r-message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[110px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="What helped you the most?"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="r-avatar" className="text-sm font-medium">
              Avatar URL (optional)
            </label>
            <input
              id="r-avatar"
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="https://example.com/photo.jpg"
            />
            <p className="text-xs text-slate-500">
              If left empty, we’ll use the first letter of your name.
            </p>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;