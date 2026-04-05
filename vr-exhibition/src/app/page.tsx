import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import StoryGallery from '../components/StoryGallery'

const modules = [
  {
    title: 'VR Glasses',
    description: 'A clean presentation area prepared for the VR Glasses experience.',
    href: 'https://lab-vr.com/grupi2',
  },
  {
    title: 'Magic Mirror',
    description: 'A refined destination prepared for the Magic Mirror experience.',
    href: 'https://sm-mirrorvr.onrender.com/',
  },
]

const orderedGalleryImages = [
  {
    file: 'book-story.jpg',
    alt: 'Book and glasses',
    title: 'Nadiia',
    meta: 'Patient, Ukraine • 37, Endocrinologist',
    story: `Nadiia was just a child when diabetes entered her life. Constant thirst and exhaustion revealed the diagnosis that would shape her daily routine onwards. "I did not choose this condition, but I have learned to live with it," she says. Over the years, she became an endocrinologist, guiding other patients with diabetes to live well.

Life in Ukraine brought battles beyond diabetes. In 2014, when Russia occupied her hometown of Luhansk, Nadiia was forced to flee and rebuild her life in free Ukraine. Then, in 2022, war arrived again. Air raid sirens, shelling, and displacement pushed her resilience to new limits. "During heavy shelling, my blood sugar spikes, and even insulin does not help. Stress has a huge impact on diabetes," she shares.

Like many with diabetes, she carries the essentials: glucometer, insulin, and sweets. But her bag also holds one unexpected item: a whistle. In moments of shelling, if trapped under rubble, it could be her only lifeline to signal for help.

The war has made living with a chronic condition even harder. Shortages of medicine, power outages blocking e-prescriptions, and humanitarian aid denied to occupied territories. Yet Nadiia continues to fight for herself and for others. After the liberation of the Kyiv region, she shared her own insulin with those left without.

"I fight every day: for my life, and for the lives of others," she says. Her story is one of resilience, where care and courage survive even under fire.`,
  },
  {
    file: 'insulin-pens.jpg',
    alt: 'Insulin pens',
    title: 'Jeton Muriqi',
    meta: 'Patient, Kosovo • 32, DJ and businessperson',
    story: `When Jeton was only thirteen, he began to feel an exhaustion that no amount of sleep could fix, a thirst that no glass of water could quench. Frequent trips to the bathroom became his daily routine, until one day the truth arrived: he had diabetes. At first, he and his family struggled to believe it. He was so young, and nothing in his family’s history had prepared him for this.

That same year, his father brought him a small, sturdy case from the hospital. It was not much to look at, but for Jeton it became more than an object; it meant security. The blue case with a white inscription on it carried his insulin, needles, and supplies, keeping them safe through school, family trips, and later, his adult life. Whenever he travelled, whether to the nearby seaside in Ulqin or the bustling streets of Istanbul, the case was his quiet assurance that he could go anywhere.

Almost twenty years later, Jeton is a thriving DJ and runs his own clothing store. He enjoys traveling, working, meeting friends. Everything he might have done even without diabetes he continues to do with it. The condition has not defined him; it has only taught him balance. He eats more thoughtfully, avoids unnecessary stress, and values physical activity as part of his lifestyle.

"I live a normal life. With a little extra care, diabetes does not stop me from working, traveling, or dreaming," Jeton says. His message to others is one of calm and resilience: "There are good days and bad days. The balance between the two is what pushes me forward."`,
  },
  {
    file: 'glucose-device.jpg',
    alt: 'Glucose device',
    title: 'Idriz Ethemi',
    meta: 'Patient and Advocate, Kosovo • 64, Economist',
    story: `Idriz first heard the question where he had diabetes in 2003, before a heart surgery. At the time, it did not register with him and he left that question aside. A few years later, he discovered he had diabetes indeed. For years, tablets kept things under control, until they did not. By 2012, insulin was no longer a choice, but a necessity. That was when a doctor handed him a glucometer and diary. From then on, every number on the little screen told him the truth about his body and guided his next step.

The device became his anchor. It reminded him that, though diabetes is lifelong, it is manageable. It gave him the gift of control, of knowing where he stood and how to adjust. "Without it," he says, "I would not know how I was doing from day to day."

Idriz speaks of diabetes not with apprehension but with acceptance and clarity. "It does not get cured, but it is managed," he explains. And management, to him, is not just about insulin: it is about food, movement, restful sleep, and staying away from stress.

Beyond his personal journey, Idriz has become a voice for others. As a community activist and founder of the Association of Diabetic Patients in his hometown of Peja, eastern Kosovo, he urges patients to go beyond checking sugar levels. He tells them to also monitor their eyes, nerves, and heart health, and to work closely with doctors. He encourages health workers to show empathy, to explain without creating fear, and to remind patients they are not sick people, but people living fully with a condition.

"Diabetes does not define me," Idriz says firmly. "It only reminds me every day how important it is to take care of myself and to help others do the same."`,
  },
  {
    file: 'watch-pocket.jpg',
    alt: 'Watch in pocket',
    title: 'David Zacharie-Issom',
    meta: 'Patient and Advocate, Switzerland • 38, Assistant Professor',
    story: `Could what he felt inside be proven on the outside? David first bought a smartwatch eight years ago, more out of curiosity than certainty. Living with sickle cell disease meant living with symptoms no one could see: fatigue, shortness of breath, irregular heart rhythms. But what if those feelings could be tracked, shown and understood?

He tested the device, compared the data with medical exams, and discovered what he had long suspected. His feelings had a pattern, and the numbers confirmed it.

When his oxygen dropped at night, the watch recorded it.
When he was more exhausted, the metrics followed.

Eventually, the data helped doctors take action and more tests were ordered, home oxygen was prescribed, and the treatment changed everything.`,
  },
]

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'assets', 'posts')
  if (!fs.existsSync(galleryDir)) {
    return []
  }

  return orderedGalleryImages
    .filter((image) => fs.existsSync(path.join(galleryDir, image.file)))
    .map((image) => ({
      src: `/assets/posts/${image.file}`,
      alt: image.alt,
      title: image.title,
      meta: image.meta,
      story: image.story,
    }))
}

export default function HomePage() {
  const galleryImages = getGalleryImages()

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <header className="mb-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur sm:mb-10 sm:rounded-[1.75rem] sm:px-5">
          <nav aria-label="Primary" className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563eb] text-xs font-semibold tracking-[0.18em] sm:h-11 sm:w-11 sm:text-sm">
                CCO
              </div>
              <div>
                <p className="text-base font-semibold text-white sm:text-lg">Chronic Care Objects</p>
                <p className="text-xs text-slate-400 sm:text-sm">Medical experience showcase</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:text-sm">
              <a href="#home" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white sm:px-4">
                Home
              </a>
              <a href="#gallery" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white sm:px-4">
                Stories
              </a>
              <a href="#modules" className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white sm:px-4">
                Modules
              </a>
            </div>
          </nav>
        </header>

        <section
          id="home"
          className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#0f1d33_0%,#0b1628_55%,#0a1424_100%)] px-5 py-10 shadow-2xl shadow-black/20 sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-12 lg:py-16"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:gap-10">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200 sm:text-xs">
                Professional Homepage
              </p>
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Human stories, medical objects, and digital experiences in one place.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
                This platform brings together personal journeys, health objects, and immersive modules to make chronic care stories more visible, more human, and easier to understand.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3 shadow-[0_30px_80px_rgba(2,8,23,0.55)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.18),transparent_34%)]" />
              <div className="relative z-10 grid gap-3">
                <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10">
                  <Image
                    src="/assets/posts/glucose-device.jpg"
                    alt="Medical device representing chronic disease care and daily monitoring."
                    width={1200}
                    height={900}
                    priority
                    className="h-[300px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,0.1),rgba(3,7,18,0.72))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#0a1628]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-100">
                    Chronic Care Focus
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-2xl font-semibold text-white">Real objects. Real stories. Daily care.</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                      A visual entry point to chronic disease experiences through personal medical objects and health stories.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.03]">
                    <Image
                      src="/assets/posts/book-story.jpg"
                      alt="Personal object connected to chronic care storytelling."
                      width={600}
                      height={600}
                      className="h-28 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.03]">
                    <Image
                      src="/assets/posts/insulin-pens.jpg"
                      alt="Insulin pens representing long-term chronic disease management."
                      width={600}
                      height={600}
                      className="h-28 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.03]">
                    <Image
                      src="/assets/posts/watch-pocket.jpg"
                      alt="Wearable object connected to long-term health monitoring."
                      width={600}
                      height={600}
                      className="h-28 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mt-8 sm:mt-10">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">Featured Gallery</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">Featured visuals and stories</h2>
          </div>

          <StoryGallery images={galleryImages} />
        </section>

        <section id="modules" className="mt-10 pb-10 sm:mt-12 sm:pb-12">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">Main Modules</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-4xl">Simple and clear access</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] sm:rounded-[2rem] sm:p-8"
              >
                <div className="mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{module.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">{module.description}</p>
                <a
                  href={module.href}
                  className="mt-8 inline-flex rounded-full bg-[#2563eb] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d4ed8] sm:px-6 sm:text-base"
                  target={module.href.startsWith('http') ? '_blank' : undefined}
                  rel={module.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  Open Module
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
