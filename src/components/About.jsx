import React from 'react'

export default function About({ profile }) {
  return (
    <section id="about" className="card">
      <h2 className="text-xl font-semibold mb-2">About</h2>
      <p className="text-gray-700">{profile.bio}</p>
    </section>
  )
}
