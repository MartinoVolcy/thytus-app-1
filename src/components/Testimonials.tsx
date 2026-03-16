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
    <section className="py-24 bg-slate-50 dark:bg-dark-base border-t border-slate-100/80 dark:border-dark-border" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 mb-3 block uppercase tracking-[0.25em]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Teams that already work with Thytus.
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
              className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all dark-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-full bg-slate-900/5 dark:bg-slate-50/10 flex items-center justify-center text-slate-900 dark:text-slate-50 font-bold text-base border border-slate-200/70 dark:border-slate-600">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {index === 0 && "Director of Operations"}
                    {index === 1 && "Head of Research"}
                    {index === 2 && "Senior Product Manager"}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
