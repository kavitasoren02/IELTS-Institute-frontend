import axios from "axios";
import type React from "react";

import { useState } from "react";
import { ENROLLMENTS_URL } from "../lib/api";

export default function EnrollForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const createEnrollment = { name, email, phone, message };
      await axios.post(ENROLLMENTS_URL, createEnrollment);

      setSuccess("Thanks! We’ll contact you shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError("Could not submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="enroll" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Enroll for a free counseling
          </h2>
          <p className="mt-3 text-slate-600">
            Share your details and we’ll reach out with the best plan for your
            IELTS goals.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                placeholder="Aarav Sharma"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                placeholder="aarav@example.com"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[110px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              placeholder="Tell us your target band and preferred start date."
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
