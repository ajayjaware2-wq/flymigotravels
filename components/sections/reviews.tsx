'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, X, Quote, MapPin, Plane, Loader2 } from 'lucide-react'
import { getReviews, submitReview } from '@/lib/supabase'

interface Review {
  id: string | number
  name: string
  location: string
  trip_name: string
  rating: number
  message: string
  created_at: string
}

interface ReviewFormData {
  name: string
  location: string
  trip_name: string
  rating: number
  message: string
}

const initialFormData: ReviewFormData = {
  name: '',
  location: '',
  trip_name: '',
  rating: 5,
  message: '',
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<ReviewFormData>(initialFormData)
  const [submitting, setSubmitting] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getReviews()
      if (Array.isArray(data)) {
        setReviews(data as Review[])
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReviews()
  }, [fetchReviews])

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (reviews.length === 0 ? 0 : (prev + 1) % reviews.length))
  }, [reviews.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (reviews.length === 0 ? 0 : (prev - 1 + reviews.length) % reviews.length))
  }, [reviews.length])

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (reviews.length <= 1) return

    if (autoPlayRef.current) clearInterval(autoPlayRef.current)

    autoPlayRef.current = setInterval(() => {
      goNext()
    }, 6000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [reviews.length, currentIndex, goNext])

  useEffect(() => {
    if (currentIndex >= reviews.length && reviews.length > 0) {
      setCurrentIndex(0)
    }
  }, [reviews, currentIndex])

  const openModal = () => {
    setFormData(initialFormData)
    setFormError(null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    if (submitting) return
    setIsModalOpen(false)
    setFormData(initialFormData)
    setFormError(null)
    setHoverRating(0)
  }

  const handleInputChange = (
    field: keyof ReviewFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (!formData.name.trim() || !formData.location.trim() || !formData.trip_name.trim() || !formData.message.trim()) {
      setFormError('Please fill in all fields before submitting.')
      return
    }

    if (formData.rating < 1 || formData.rating > 5) {
      setFormError('Please select a rating between 1 and 5 stars.')
      return
    }

    try {
      setSubmitting(true)
      await submitReview({
        name: formData.name.trim(),
        location: formData.location.trim(),
        trip_name: formData.trip_name.trim(),
        rating: formData.rating,
        message: formData.message.trim(),
      })

      setIsModalOpen(false)
      setFormData(initialFormData)
      setHoverRating(0)
      await fetchReviews()
      setCurrentIndex(0)

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3500)
    } catch (error) {
      console.error('Failed to submit review:', error)
      setFormError('Something went wrong while submitting your review. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const currentReview = reviews[currentIndex]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/5 blur-[100px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-medium mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative min-h-[380px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-3 text-neutral-400">
              <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
              <p className="text-sm tracking-wide">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center text-neutral-400">
              <p className="mb-2">No reviews yet.</p>
              <p className="text-sm">Be the first to share your experience.</p>
            </div>
          ) : (
            <div className="relative w-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentReview?.id ?? currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-amber-500/10 rounded-3xl px-8 py-12 md:px-14 md:py-14 shadow-[0_0_60px_-15px_rgba(251,191,36,0.15)]"
                >
                  <Quote className="absolute top-6 left-6 w-10 h-10 text-amber-500/15" />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < (currentReview?.rating ?? 0)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-center text-neutral-200 text-lg md:text-xl font-light leading-relaxed italic mb-10 max-w-2xl mx-auto">
                    &ldquo;{currentReview?.message}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-900 font-serif text-xl font-semibold shadow-lg shadow-amber-500/20">
                      {currentReview?.name?.charAt(0)?.toUpperCase() ?? '?'}
                    </div>
                    <div className="text-center">
                      <p className="text-white font-medium tracking-wide">
                        {currentReview?.name}
                      </p>
                      <div className="flex items-center justify-center gap-3 mt-1 text-neutral-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
                          {currentReview?.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-600" />
                        <span className="flex items-center gap-1">
                          <Plane className="w-3.5 h-3.5 text-amber-500/70" />
                          {currentReview?.trip_name}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next buttons */}
              {reviews.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    aria-label="Previous review"
                    className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-11 h-11 rounded-full bg-neutral-900/80 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-neutral-900 transition-colors duration-300 backdrop-blur-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next review"
                    className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-11 h-11 rounded-full bg-neutral-900/80 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-neutral-900 transition-colors duration-300 backdrop-blur-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Dot indicators */}
        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-amber-400'
                    : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Write a review button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={openModal}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-medium tracking-wide overflow-hidden shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow duration-300"
          >
            <span className="relative z-10">Write a Review</span>
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Success alert */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] bg-neutral-900 border border-amber-400/30 text-amber-300 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">Thank you! Your review has been submitted.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-gradient-to-b from-neutral-900 to-neutral-950 border border-amber-500/15 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_0_80px_-15px_rgba(251,191,36,0.2)] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                disabled={submitting}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <p className="text-amber-400 uppercase tracking-[0.25em] text-xs font-medium mb-2">
                  Share your journey
                </p>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  Write a Review
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-neutral-300 text-sm mb-1.5 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    disabled={submitting}
                    className="w-full bg-neutral-800/60 border border-neutral-700 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-neutral-300 text-sm mb-1.5 tracking-wide">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, Country"
                      disabled={submitting}
                      className="w-full bg-neutral-800/60 border border-neutral-700 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 text-sm mb-1.5 tracking-wide">
                      Trip Name
                    </label>
                    <input
                      type="text"
                      value={formData.trip_name}
                      onChange={(e) => handleInputChange('trip_name', e.target.value)}
                      placeholder="e.g. Maldives Getaway"
                      disabled={submitting}
                      className="w-full bg-neutral-800/60 border border-neutral-700 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm mb-1.5 tracking-wide">
                    Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const value = i + 1
                      const isFilled = value <= (hoverRating || formData.rating)
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={submitting}
                          onMouseEnter={() => setHoverRating(value)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => handleInputChange('rating', value)}
                          className="p-1 disabled:opacity-50"
                          aria-label={`Rate ${value} star${value > 1 ? 's' : ''}`}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              isFilled
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-neutral-700'
                            }`}
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm mb-1.5 tracking-wide">
                    Review Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    disabled={submitting}
                    className="w-full resize-none bg-neutral-800/60 border border-neutral-700 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                {formError && (
                  <p className="text-red-400 text-sm text-center">{formError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-900 font-medium py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
