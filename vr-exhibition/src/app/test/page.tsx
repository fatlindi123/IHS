'use client'

export default function TestPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#2563eb', fontSize: '48px' }}>✅ VR App Punon!</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>Shto /admin ose /user në URL</p>
      
      <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="/admin" style={{ padding: '12px 24px', background: '#3b82f6', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '16px' }}>
          👨‍💼 Admin Panel
        </a>
        <a href="/user" style={{ padding: '12px 24px', background: '#10b981', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '16px' }}>
          👤 User Gallery
        </a>
      </div>
    </div>
  )
}
