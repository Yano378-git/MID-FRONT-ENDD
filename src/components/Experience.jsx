import React from 'react'

export default function Experience({ items = [] }) {
  return (
    <section id="experience">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="card flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-medium">{item.role} <span className="text-sm text-[var(--muted)]">— {item.company}</span></h3>
              <p className="text-sm text-[var(--muted)]">{item.range}</p>
            </div>
            <p className="mt-3 sm:mt-0 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
