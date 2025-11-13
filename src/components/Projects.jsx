import React from 'react'

export default function Projects({ items = [] }) {
  return (
    <section id="projects">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(p => (
          <article key={p.id} className="card">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.summary}</p>
            <a href={p.link} className="mt-2 inline-block text-sm underline underline-accent">Demo / Repo</a>
          </article>
        ))}
      </div>
    </section>
  )
}
