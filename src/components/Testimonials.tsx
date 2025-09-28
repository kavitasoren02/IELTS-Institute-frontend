import { useEffect, useState } from "react";
import { API_BASE, type Testimonial } from "../lib/api";
import axios from "axios";

interface Props {
    updateList: number;
}

const Testimonials = ({updateList} : Props) => {
  const [data, setData] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
        setIsLoading(true);
        try{
            const { data } = await axios.get(`${API_BASE}/api/testimonials`)
            setData(data)
        }
        catch (error) {
            // Do nothing
            setError(error)
        }
        finally {
            setIsLoading(false);
        }
    })()
  }, [updateList])

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Student success stories
          </h2>
          <p className="mt-3 text-slate-600">
            Real outcomes from our learners across modules.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {isLoading &&
            [1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-5 bg-white animate-pulse"
              >
                <div className="h-10 w-10 rounded-full bg-slate-200" />
                <div className="mt-4 h-4 bg-slate-200 rounded w-2/3" />
                <div className="mt-2 h-4 bg-slate-200 rounded w-1/2" />
              </div>
            ))}

          {error && (
            <div className="md:col-span-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-amber-900">
              Could not load testimonials. Please ensure the backend is running.
            </div>
          )}

          {!isLoading &&
            !error &&
            (data ?? []).slice(0, 6).map((t) => (
              <div
                key={t._id ?? t.name}
                className="rounded-lg border border-slate-200 p-5 bg-white"
              >
                <div className="flex items-center gap-3">
                  {t.avatarUrl ? (
                    <img
                      src={t.avatarUrl || "/placeholder.svg"}
                      alt={`${t.name} avatar`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700"
                      title={t.name}
                    >
                      {t.name?.trim()?.charAt(0)?.toUpperCase() || "S"}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-slate-600">
                      Overall Band {t.band}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  “{t.message}”
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;