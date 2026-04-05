'use client'

export default function UserDashboard() {
  const placeholderExperiences = [
    {
      id: 'vr-glasses',
      title: 'VR Glasses',
      description: 'Placeholder area for the future 3D model of the VR Glasses experience.',
      category: '3D Model',
      accent: '#60a5fa',
      buttonLabel: '3D Model Placeholder',
    },
    {
      id: 'magic-mirror',
      title: 'Magic Mirror',
      description: 'Placeholder area for the future 3D model of the Magic Mirror experience.',
      category: '3D Model',
      accent: '#a78bfa',
      buttonLabel: '3D Model Placeholder',
    },
  ]

  const htmlContent = `
    <div style="min-height: 100vh; background: #111827; color: white;">
      <nav style="background: #1f2937; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 50;">
        <div style="max-width: 80rem; margin: 0 auto; padding: 0 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="width: 40px; height: 40px; background: linear-gradient(to right, #3b82f6, #7c3aed); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">VR</div>
              <span style="font-size: 18px; font-weight: bold;">NCD Exhibition</span>
            </div>

            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
              <a href="/" style="color: #d1d5db; text-decoration: none;">Home</a>
              <a href="/#instagram-feed" style="color: #d1d5db; text-decoration: none;">Instagram Feed</a>
              <a href="/user" style="color: white; text-decoration: none;">Modules</a>
            </div>

            <div style="display: flex; align-items: center; gap: 16px;">
              <div style="display: none; gap: 8px; align-items: center;">
                <div style="width: 32px; height: 32px; background: linear-gradient(to right, #10b981, #3b82f6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">User</div>
                <span style="font-size: 14px; font-weight: 500;">Visitor</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main style="max-width: 92rem; margin: 0 auto; padding: 40px 24px 56px;">
        <section style="text-align: center; margin-bottom: 56px;">
          <h1 style="margin: 24px 0 18px; font-size: 56px; font-weight: bold; background: linear-gradient(to right, #60a5fa, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            NCD VR Exhibition
          </h1>
          <p style="margin: 0 auto; text-align: center; max-width: 56rem; color: #d1d5db; font-size: 20px; line-height: 1.8;">
            Explore the page structure prepared for upcoming interactive 3D experiences.
            Dedicated spaces for VR Glasses and Magic Mirror are ready for future model integration.
          </p>
        </section>

        <div>
          <h2 style="margin: 0 0 28px 0; font-size: 28px; font-weight: bold; text-align: center;">3D Experience Placeholders</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: stretch;">
              ${placeholderExperiences.map((experience) => `
                <div style="background: linear-gradient(180deg, rgba(31,41,55,0.98), rgba(17,24,39,0.98)); border-radius: 24px; overflow: hidden; border: 1px solid #374151; box-shadow: 0 24px 60px rgba(0,0,0,0.28); min-height: 520px; display: flex; flex-direction: column;">
                  <div style="height: 300px; display: flex; align-items: center; justify-content: center; background:
                    radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 55%),
                    linear-gradient(135deg, ${experience.accent}2f, #0f172a 65%);
                    border-bottom: 1px solid #374151; position: relative;">
                    <div style="position: absolute; inset: 24px; border-radius: 28px; border: 1px solid rgba(255,255,255,0.06);"></div>
                    <div style="width: 190px; height: 190px; border-radius: 36px; border: 1px dashed ${experience.accent}; display: flex; align-items: center; justify-content: center; color: ${experience.accent}; font-size: 32px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: rgba(15,23,42,0.45);">
                      3D
                    </div>
                  </div>
                  <div style="padding: 28px; display: flex; flex-direction: column; flex: 1; justify-content: space-between;">
                    <div>
                      <div style="display: flex; gap: 10px; margin-bottom: 18px;">
                        <span style="background: #374151; color: #d1d5db; padding: 6px 10px; border-radius: 999px; font-size: 13px;">${experience.category}</span>
                        <span style="background: #78350f; color: #fde68a; padding: 6px 10px; border-radius: 999px; font-size: 13px;">Coming Soon</span>
                      </div>
                      <h3 style="margin: 0 0 12px 0; font-size: 30px; font-weight: 700; color: white;">${experience.title}</h3>
                      <p style="margin: 0 0 16px 0; font-size: 17px; color: #d1d5db; line-height: 1.75;">${experience.description}</p>
                      <p style="margin: 0; font-size: 14px; color: #93c5fd;">Reserved slot for future 3D content</p>
                    </div>
                    <div style="margin-top: 28px;">
                      <button style="width: 100%; background: linear-gradient(to right, #334155, #475569); color: white; padding: 14px 18px; border: none; border-radius: 14px; cursor: default; font-weight: 600; font-size: 16px;">${experience.buttonLabel}</button>
                    </div>
                  </div>
                </div>
              `).join('')}
          </div>
        </div>
      </main>

      <footer style="background: #1f2937; border-top: 1px solid #374151; margin-top: 64px;">
        <div style="max-width: 80rem; margin: 0 auto; padding: 32px 16px; text-align: center;">
          <p style="margin: 0; color: #9ca3af;">
            &copy; 2026 NCD VR Exhibition. Promoting health awareness through immersive technology.
          </p>
        </div>
      </footer>
    </div>
  `

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
