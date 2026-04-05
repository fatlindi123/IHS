'use client'

import { useEffect, useState } from 'react'

interface StoryImage {
  src: string
  alt: string
  title: string
  meta: string
  story: string
}

interface StoryGalleryProps {
  images: StoryImage[]
}

export default function StoryGallery({ images }: StoryGalleryProps) {
  const [activeStory, setActiveStory] = useState<StoryImage | null>(null)

  useEffect(() => {
    if (!activeStory) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveStory(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeStory])

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <article
            key={image.src}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1727] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:rounded-[2rem]"
          >
            <button
              type="button"
              onClick={() => setActiveStory(image)}
              className="block w-full text-left"
              aria-label={`Open story modal for ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[18rem] w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-[22rem] lg:h-[24rem]"
              />
            </button>
            <div className="border-t border-white/10 px-5 py-5 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{image.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{image.meta}</p>
                </div>
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Open Story
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {image.story.length > 170 ? `${image.story.slice(0, 170)}...` : image.story}
              </p>
              <button
                type="button"
                onClick={() => setActiveStory(image)}
                className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                aria-label={`Read full story for ${image.title}`}
              >
                Read story
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeStory ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1628] shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/10 bg-[#0b1628]/95 px-6 py-5 backdrop-blur">
              <div>
                <h3 id="story-modal-title" className="text-2xl font-semibold text-white">
                  {activeStory.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{activeStory.meta}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                aria-label="Close story modal"
              >
                Close
              </button>
            </div>

            <img src={activeStory.src} alt={activeStory.alt} className="h-[18rem] w-full object-cover sm:h-[24rem]" />

            <div className="px-6 py-6">
              <p className="whitespace-pre-line text-sm leading-8 text-slate-200 sm:text-base">{activeStory.story}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
