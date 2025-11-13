import React from 'react'

export default function Contact({ profile }) {
  return (
    <section id="contact" className="card">
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-sm">Email: <a href={`mailto:${profile.email}`} className="underline underline-accent">{profile.email}</a></p>
      <p className="text-sm">Phone: {profile.phone}</p>
    </section>
  )
}
