"use client";

import { useState, useEffect, useRef } from "react";
import ModelsModal from "./ModelsModal";

const models = [
  { name: "GPT-4o", provider: "OpenAI", color: "bg-green-100 text-green-700" },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google",
    color: "bg-blue-100 text-blue-700",
  },
  { name: "Llama 3", provider: "Meta", color: "bg-blue-100 text-blue-600" },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    color: "bg-yellow-100 text-yellow-700",
  },
  { name: "Grok-1.5", provider: "xAI", color: "bg-slate-100 text-slate-700" },
  {
    name: "Perplexity Sonar",
    provider: "Perplexity",
    color: "bg-teal-100 text-teal-700",
  },
  { name: "Command R+", provider: "Cohere", color: "bg-red-100 text-red-700" },
];

const VISIBLE_SLOTS = 7;
const CENTER_SLOT = Math.floor(VISIBLE_SLOTS / 2);
const ITEM_HEIGHT = 75;
const SCROLL_SPEED = 0.5;

export default function Features() {
  const [offset, setOffset] = useState(0);
  const [modelsOpen, setModelsOpen] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    let animId: number;
    let lastTime: number | null = null;

    const animate = (time: number) => {
      if (lastTime !== null) {
        const dt = (time - lastTime) / 1000;
        setOffset((prev) => (prev + dt * SCROLL_SPEED) % models.length);
      }
      lastTime = time;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const baseIndex = Math.floor(offset);
  const frac = offset - baseIndex;

  const wheelItems = Array.from({ length: VISIBLE_SLOTS }, (_, i) => {
    const slot = i - CENTER_SLOT;
    const modelIdx =
      (((baseIndex + slot) % models.length) + models.length) % models.length;
    const distFromCenter = Math.abs(slot - frac);

    return {
      model: models[modelIdx],
      y: (slot - frac) * ITEM_HEIGHT,
      dist: distFromCenter,
      scale: Math.max(0.82, 1 - distFromCenter * 0.065),
      opacity: Math.max(0.15, 1 - distFromCenter * 0.3),
    };
  });

  return (
    <>
      <section className="py-24 bg-white" id="capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 font-display">
              Everything you need to build complex outputs.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Thytus isn't just a chatbot. It's a full-stack workspace equipped
              with the tools AI needs to do real work. From reading entire
              knowledge bases to generating visual reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Feature 1: Grounded Knowledge */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100/50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  database
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Grounded Knowledge
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Upload once, use everywhere. Your files persist across sessions
                without re-uploading. Support for PDFs, Docs, Spreadsheets,
                Images, Videos, Audio, Websites, and Code.
              </p>
            </div>

            {/* Feature 2: Visual Intelligence */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-purple-100/50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  visibility
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Visual Intelligence
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thytus provides the vision layer. Even if a model (like Llama or
                GPT-5) doesn't natively support video input, our workspace
                enables them to "watch" and analyze your video files instantly.
              </p>
            </div>

            {/* Feature 3: No Delay */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-green-100/50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                No Delay
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Everything is real-time. Whether you, a teammate, or an AI agent
                sends a message or edits a document, everyone sees it
                immediately. Zero lag, zero refreshing. Just seamless
                synchronization.
              </p>
            </div>

            {/* Feature 4: Media Generation */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-orange-100/50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  image
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Media Generation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate visuals using models like Nano Banana Pro and Wan 2.5.
                Have agents automatically create images, videos, and even full
                podcasts and audio clips.
              </p>
            </div>

            {/* Feature 5: Model Agnostic */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-pink-100/50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Model Agnostic
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy unlimited messages and use powerful Open Source models or
                tap into the bleeding edge. Supported premium models include o1
                Pro, Claude Opus 4.5, GPT 5.2 Pro, and Perplexity Sonar Pro.
              </p>
            </div>

            {/* Feature 6: Deep Research */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-100/50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">
                  science
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Deep Research
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Thytus agents have instant access to millions of academic papers
                and can scour the entire internet to find exactly what you need.
              </p>
            </div>
          </div>

          {/* Model Carousel Section */}
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-widest">
                  Model Agnostic Intelligence
                </span>
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 font-display">
                  Make any model your agent.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Why limit yourself to one provider? Thytus gives you instant
                  access to the world's most powerful AI models. Switch between
                  them instantly or deploy them simultaneously in the same
                  workflow.
                </p>
                <button
                  onClick={() => setModelsOpen(true)}
                  className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors"
                >
                  Explore All Models
                </button>
              </div>

              <div className="relative" style={{ height: ITEM_HEIGHT * 5 }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {wheelItems.map((item, i) => {
                    const isCenter = item.dist < 0.5;
                    return (
                      <div
                        key={`${item.model.name}-${i}`}
                        className="absolute left-0 right-0 px-1"
                        style={{
                          transform: `translateY(${item.y}px) scale(${item.scale})`,
                          opacity: item.opacity,
                          zIndex: isCenter ? 20 : 10 - Math.round(item.dist),
                          willChange: "transform, opacity",
                        }}
                      >
                        <div
                          className={`rounded-xl p-4 flex items-center justify-between backdrop-blur-sm transition-shadow duration-300 ${
                            isCenter
                              ? "bg-white/[0.12] border border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.35),0_8px_24px_rgba(0,0,0,0.4)]"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-transform duration-300 ${
                                item.model.color
                              } ${isCenter ? "scale-110" : ""}`}
                            >
                              {item.model.name.substring(0, 2)}
                            </div>
                            <div>
                              <div
                                className={`font-bold transition-colors duration-300 ${
                                  isCenter ? "text-white" : "text-white/70"
                                }`}
                              >
                                {item.model.name}
                              </div>
                              <div
                                className={`text-xs transition-colors duration-300 ${
                                  isCenter ? "text-slate-300" : "text-slate-500"
                                }`}
                              >
                                {item.model.provider}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              isCenter
                                ? "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                : "bg-green-500/50 shadow-none"
                            }`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-30"></div>
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModelsModal isOpen={modelsOpen} onClose={() => setModelsOpen(false)} />
    </>
  );
}
