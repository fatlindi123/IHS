'use client'

const localPosts = [
  {
    id: 'local-1',
    caption: 'Featured diabetes care device image added locally to the website assets.',
    mediaType: 'IMAGE',
    mediaUrl: '/assets/posts/glucose-meter.svg',
    permalink: '#',
    timestamp: '2026-04-05T12:00:00.000Z',
  },
  {
    id: 'local-2',
    caption: 'Featured insulin care kit image added locally to the website assets.',
    mediaType: 'IMAGE',
    mediaUrl: '/assets/posts/insulin-kit.svg',
    permalink: '#',
    timestamp: '2026-04-05T12:00:00.000Z',
  },
]

export default function InstagramFeed() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured Images</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Selected visuals on your website</h2>
        </div>
        <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-300 backdrop-blur">
          Two local asset images are currently displayed here exactly as provided, and this section can later be connected back to Instagram sync.
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {localPosts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.94))] shadow-xl shadow-black/20"
          >
            <div className="relative overflow-hidden bg-slate-800">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <img src={post.mediaUrl} alt={post.caption} className="h-[32rem] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                {post.mediaType}
              </div>
            </div>
            <div className="p-7">
              <p className="text-base leading-8 text-slate-200">{post.caption}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {new Date(post.timestamp).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  Local Asset
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
