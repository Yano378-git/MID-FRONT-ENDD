import React from 'react'

export default function Header({ profile }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 header-blur shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="avatar-circle">
            <img src="\src\assets\WhatsApp Image 2025-11-13 at 16.56.59.jpeg" alt="avatar" className="w-full h-full object-cover"/>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold">{profile.name}</h1>
            <p className="text-xs text-[var(--muted)]">{profile.title} • {profile.location}</p>
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-3 text-sm">
          <a href="#about" className="px-2 py-1 rounded hover:bg-gray-100 transition">About</a>
          <a href="#experience" className="px-2 py-1 rounded hover:bg-gray-100 transition">Experience</a>
          <a href="#projects" className="px-2 py-1 rounded hover:bg-gray-100 transition">Projects</a>
          <a href="#contact" className="px-2 py-1 rounded hover:bg-gray-100 transition">Contact</a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="ml-2 px-3 py-1 rounded bg-[var(--accent)] text-white text-sm hover:opacity-90 transition">GitHub</a>
        </nav>
      </div>
    </header>
  )
}