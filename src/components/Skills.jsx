import React from 'react'

export default function Skills({ items = [] }) {
  return (
    <section id="skills" className="card">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((s, i) => (
          <span key={i} className="px-3 py-1 bg-gray-50 border rounded text-sm">{s}</span>
        ))}
      </div>
    </section>
  )
}
