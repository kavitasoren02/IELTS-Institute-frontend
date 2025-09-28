export const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"

export type Testimonial = {
    _id?: string
    name: string
    message: string
    band: number
    avatarUrl?: string
}

export type Enrollment = {
    _id?: string
    name: string
    email: string
    phone: string
    message: string
}

export const TESTIMONIALS_URL = `${API_BASE}/api/testimonials`
export const ENROLLMENTS_URL = `${API_BASE}/api/enrollments`