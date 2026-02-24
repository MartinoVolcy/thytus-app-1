"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Thytus has completely transformed how our team manages knowledge. The ability to upload any file type and have it instantly searchable is a game-changer.",
    author: "Sarah Jenkins",
    avatar: "S",
  },
  {
    quote:
      "The visual intelligence features are incredible. Being able to analyze video content as easily as text has saved us hours of manual review time.",
    author: "David Chen",
    avatar: "D",
  },
  {
    quote:
      "I love the model flexibility. switching between Claude and GPT-4 based on the task at hand gives us the best of both worlds.",
    author: "Emily Rodriguez",
    avatar: "E",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-dark-surface" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 font-display">
            Loved by teams everywhere.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            See how forward-thinking companies are using Thytus to accelerate
            their workflows and unlock new possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md dark:hover:shadow-sky-500/5 transition-shadow dark-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
