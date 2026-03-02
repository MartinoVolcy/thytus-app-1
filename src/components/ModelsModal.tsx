"use client";

import { useState, useEffect, useRef } from "react";

interface Model {
  name: string;
  description: string;
  tags: string[];
}

interface Provider {
  name: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  description: string;
  models: Model[];
}

const providers: Provider[] = [
  {
    name: "OpenAI",
    icon: "🌀",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description:
      "Industry-leading language and multimodal models powering reasoning, code generation, and creative tasks.",
    models: [
      {
        name: "GPT-5.2 Pro",
        description:
          "Most capable reasoning model with advanced multimodal understanding and agentic tool use.",
        tags: ["Research", "Complex Reasoning", "Agentic"],
      },
      {
        name: "GPT-5",
        description:
          "Flagship next-gen model with deep reasoning, multilingual strength, and native tool integration.",
        tags: ["General Purpose", "Reasoning", "Multilingual"],
      },
      {
        name: "o1 Pro",
        description:
          "Extended thinking model optimized for math, science, and complex multi-step problem solving.",
        tags: ["Math", "Science", "Deep Reasoning"],
      },
      {
        name: "o1",
        description:
          "Reasoning-focused model that thinks before answering, ideal for logic-heavy tasks.",
        tags: ["Logic", "Analysis", "Problem Solving"],
      },
      {
        name: "o1 Mini",
        description:
          "Lightweight reasoning model balancing speed and accuracy for everyday analytical tasks.",
        tags: ["Fast Reasoning", "Cost Efficient"],
      },
      {
        name: "GPT-4o",
        description:
          "Multimodal flagship model with vision, audio understanding, and fast response times.",
        tags: ["Multimodal", "Vision", "General Purpose"],
      },
      {
        name: "GPT-4o Mini",
        description:
          "Compact and cost-effective version of GPT-4o for high-volume applications.",
        tags: ["Cost Efficient", "Fast", "High Volume"],
      },
      {
        name: "GPT-4 Turbo",
        description:
          "High-performance model with 128K context window and JSON mode support.",
        tags: ["Long Context", "Code", "Structured Output"],
      },
      {
        name: "GPT-4",
        description:
          "Reliable workhorse model for complex instruction following and nuanced text generation.",
        tags: ["Reliable", "Writing", "Analysis"],
      },
      {
        name: "GPT-3.5 Turbo",
        description:
          "Fast and affordable model for straightforward tasks, summaries, and simple conversations.",
        tags: ["Fast", "Affordable", "Chat"],
      },
      {
        name: "DALL·E 3",
        description:
          "Advanced image generation model creating high-fidelity visuals from detailed text prompts.",
        tags: ["Image Generation", "Creative", "Design"],
      },
    ],
  },
  {
    name: "Anthropic",
    icon: "A",
    iconColor: "text-amber-700",
    bgColor: "bg-amber-50",
    description:
      "Safety-focused AI lab building reliable, interpretable, and steerable language models.",
    models: [
      {
        name: "Claude Opus 4.5",
        description:
          "Most intelligent Claude model with exceptional writing, analysis, and nuanced instruction following.",
        tags: ["Writing", "Analysis", "Research"],
      },
      {
        name: "Claude 3.5 Sonnet",
        description:
          "Best balance of intelligence and speed. Excels at coding, reasoning, and complex workflows.",
        tags: ["Code", "Reasoning", "Balanced"],
      },
      {
        name: "Claude 3.5 Haiku",
        description:
          "Fastest Claude model for near-instant responses with strong coding and extraction capabilities.",
        tags: ["Fast", "Code", "Extraction"],
      },
      {
        name: "Claude 3 Opus",
        description:
          "Previous flagship with deep analysis capabilities and thoughtful, thorough responses.",
        tags: ["Deep Analysis", "Thorough", "Writing"],
      },
      {
        name: "Claude 3 Sonnet",
        description:
          "Versatile mid-tier model for everyday enterprise tasks with reliable performance.",
        tags: ["Enterprise", "Versatile", "Reliable"],
      },
      {
        name: "Claude 3 Haiku",
        description:
          "Ultra-fast, cost-effective model ideal for real-time applications and high-throughput pipelines.",
        tags: ["Ultra Fast", "Cost Efficient", "Pipeline"],
      },
    ],
  },
  {
    name: "Google",
    icon: "G",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    description:
      "Google's Gemini family of natively multimodal models trained on diverse data across text, code, images, and video.",
    models: [
      {
        name: "Gemini 2.0 Ultra",
        description:
          "Google's most capable model with breakthrough reasoning, coding, and multimodal understanding.",
        tags: ["Reasoning", "Multimodal", "Flagship"],
      },
      {
        name: "Gemini 2.0 Flash",
        description:
          "Fast and versatile model with native tool use and strong agentic capabilities.",
        tags: ["Fast", "Agentic", "Tool Use"],
      },
      {
        name: "Gemini 1.5 Pro",
        description:
          "Million-token context window model for processing entire codebases, books, and video.",
        tags: ["Long Context", "Video", "Code"],
      },
      {
        name: "Gemini 1.5 Flash",
        description:
          "Lightweight model optimized for speed with strong multimodal understanding.",
        tags: ["Fast", "Multimodal", "Cost Efficient"],
      },
      {
        name: "Gemini 1.0 Pro",
        description:
          "Reliable general-purpose model for text and code tasks at scale.",
        tags: ["General Purpose", "Scalable"],
      },
      {
        name: "PaLM 2",
        description:
          "Strong multilingual and reasoning model powering a range of Google AI products.",
        tags: ["Multilingual", "Reasoning", "Legacy"],
      },
    ],
  },
  {
    name: "Meta",
    icon: "∞",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    description:
      "Open-source Llama models setting the standard for accessible, high-performance AI that anyone can run and fine-tune.",
    models: [
      {
        name: "Llama 3.3 70B",
        description:
          "Latest Llama with state-of-the-art open-source performance rivaling proprietary models.",
        tags: ["Open Source", "High Performance", "Versatile"],
      },
      {
        name: "Llama 3.1 405B",
        description:
          "Largest open-source model ever released. Exceptional at complex reasoning and multilingual tasks.",
        tags: ["Flagship", "Reasoning", "Multilingual"],
      },
      {
        name: "Llama 3.1 70B",
        description:
          "Strong open-source model with 128K context and competitive benchmark performance.",
        tags: ["Long Context", "Balanced", "Open Source"],
      },
      {
        name: "Llama 3.1 8B",
        description:
          "Compact model ideal for fine-tuning, edge deployment, and resource-constrained environments.",
        tags: ["Lightweight", "Fine-Tunable", "Edge"],
      },
      {
        name: "Llama 3 70B",
        description:
          "Powerful general-purpose model with excellent code, math, and reasoning skills.",
        tags: ["General Purpose", "Code", "Math"],
      },
      {
        name: "Llama 3 8B",
        description:
          "Efficient small model punching above its weight class on instruction-following tasks.",
        tags: ["Efficient", "Instructions", "Fast"],
      },
      {
        name: "Llama 2 70B",
        description:
          "Proven and widely deployed model with extensive community tooling and fine-tune variants.",
        tags: ["Proven", "Community", "Stable"],
      },
      {
        name: "Llama 2 13B",
        description:
          "Mid-size model balancing capability and efficiency for self-hosted deployments.",
        tags: ["Self-Hosted", "Balanced"],
      },
      {
        name: "Llama 2 7B",
        description:
          "Entry-level Llama model for experimentation, prototyping, and learning.",
        tags: ["Lightweight", "Prototyping", "Learning"],
      },
      {
        name: "Code Llama 70B",
        description:
          "Specialized for code generation, completion, and debugging across popular languages.",
        tags: ["Code", "Debugging", "Completion"],
      },
      {
        name: "Code Llama 34B",
        description:
          "Mid-tier code model with strong infilling and instruction-following for developer workflows.",
        tags: ["Code", "Developer", "Infilling"],
      },
    ],
  },
  {
    name: "Mistral",
    icon: "M",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    description:
      "European AI lab building efficient, open-weight models with exceptional performance-to-size ratios.",
    models: [
      {
        name: "Mistral Large 2",
        description:
          "Flagship model with 128K context, native function calling, and multilingual mastery.",
        tags: ["Flagship", "Function Calling", "Multilingual"],
      },
      {
        name: "Mistral Large",
        description:
          "Powerful reasoning model excelling at complex instructions and nuanced generation.",
        tags: ["Reasoning", "Instructions", "Generation"],
      },
      {
        name: "Mistral Medium",
        description:
          "Balanced model for enterprise applications requiring reliability and moderate compute.",
        tags: ["Enterprise", "Balanced", "Reliable"],
      },
      {
        name: "Mistral Small",
        description:
          "Fast, cost-effective model for classification, extraction, and simple generation.",
        tags: ["Fast", "Classification", "Extraction"],
      },
      {
        name: "Mixtral 8x22B",
        description:
          "Sparse mixture-of-experts model delivering flagship quality with efficient inference.",
        tags: ["MoE", "Efficient", "High Quality"],
      },
      {
        name: "Mixtral 8x7B",
        description:
          "Pioneering MoE architecture offering strong performance at a fraction of the compute.",
        tags: ["MoE", "Open Source", "Efficient"],
      },
      {
        name: "Mistral 7B",
        description:
          "Compact open-source model that outperforms much larger models on key benchmarks.",
        tags: ["Compact", "Open Source", "Benchmarks"],
      },
      {
        name: "Codestral",
        description:
          "Dedicated code model with 80+ language support and 32K context for full-file editing.",
        tags: ["Code", "Multi-Language", "Editing"],
      },
    ],
  },
  {
    name: "xAI",
    icon: "𝕏",
    iconColor: "text-slate-800",
    bgColor: "bg-slate-100",
    description:
      "Elon Musk's AI company building Grok, featuring witty, real-time models with access to live information.",
    models: [
      {
        name: "Grok-2",
        description:
          "Latest Grok with real-time knowledge, strong reasoning, and native image understanding.",
        tags: ["Real-Time", "Reasoning", "Vision"],
      },
      {
        name: "Grok-1.5",
        description:
          "Enhanced model with 128K context, improved math, and code generation capabilities.",
        tags: ["Long Context", "Math", "Code"],
      },
      {
        name: "Grok-1",
        description:
          "Original Grok model with real-time X/Twitter data access and conversational personality.",
        tags: ["Real-Time Data", "Conversational"],
      },
    ],
  },
  {
    name: "Cohere",
    icon: "◈",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    description:
      "Enterprise-focused AI building models optimized for search, retrieval-augmented generation, and business workflows.",
    models: [
      {
        name: "Command R+",
        description:
          "Flagship RAG model with 128K context, citation generation, and multilingual enterprise support.",
        tags: ["RAG", "Enterprise", "Citations"],
      },
      {
        name: "Command R",
        description:
          "Efficient retrieval-augmented model for scalable search and question-answering pipelines.",
        tags: ["RAG", "Search", "Scalable"],
      },
      {
        name: "Command",
        description:
          "General-purpose instruction model for summarization, copywriting, and dialogue.",
        tags: ["Summarization", "Writing", "Chat"],
      },
      {
        name: "Embed v3",
        description:
          "State-of-the-art embedding model for semantic search and clustering across 100+ languages.",
        tags: ["Embeddings", "Search", "Multilingual"],
      },
      {
        name: "Rerank 3",
        description:
          "Re-ranking model that dramatically improves search relevance in retrieval pipelines.",
        tags: ["Search", "Reranking", "Relevance"],
      },
    ],
  },
  {
    name: "Perplexity",
    icon: "◉",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
    description:
      "Search-augmented AI models that provide accurate, cited answers grounded in real-time web data.",
    models: [
      {
        name: "Sonar Pro",
        description:
          "Most capable search model with deep research, multi-step reasoning, and comprehensive citations.",
        tags: ["Deep Research", "Citations", "Reasoning"],
      },
      {
        name: "Sonar",
        description:
          "Fast, web-grounded model for real-time factual answers with inline source attribution.",
        tags: ["Real-Time", "Factual", "Fast"],
      },
      {
        name: "Sonar Small",
        description:
          "Lightweight search model for quick factual lookups and cost-efficient query answering.",
        tags: ["Fast", "Cost Efficient", "Factual"],
      },
    ],
  },
  {
    name: "Amazon",
    icon: "a",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    description:
      "Amazon's Titan and Nova model families built for enterprise security, scalability, and AWS-native integration.",
    models: [
      {
        name: "Nova Pro",
        description:
          "High-capability multimodal model for complex analysis, coding, and content generation.",
        tags: ["Multimodal", "Analysis", "Enterprise"],
      },
      {
        name: "Nova Lite",
        description:
          "Fast, cost-effective model optimized for high-throughput edge and serverless workloads.",
        tags: ["Fast", "Serverless", "Cost Efficient"],
      },
      {
        name: "Titan Text Premier",
        description:
          "Enterprise text model with built-in safety, watermarking, and RAG optimization.",
        tags: ["Enterprise", "Safe", "RAG"],
      },
      {
        name: "Titan Text Express",
        description:
          "General-purpose text model for summarization, chat, and open-ended generation.",
        tags: ["General Purpose", "Chat", "Summarization"],
      },
      {
        name: "Titan Embeddings v2",
        description:
          "High-quality embedding model supporting 25+ languages for search and knowledge bases.",
        tags: ["Embeddings", "Multilingual", "Search"],
      },
    ],
  },
  {
    name: "Alibaba",
    icon: "阿",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    description:
      "Alibaba Cloud's Qwen models delivering strong multilingual performance with particular strength in Chinese and English.",
    models: [
      {
        name: "Qwen 2.5 72B",
        description:
          "Flagship open-source model with excellent coding, math, and multilingual capabilities.",
        tags: ["Open Source", "Code", "Math"],
      },
      {
        name: "Qwen 2.5 32B",
        description:
          "Mid-tier model offering strong reasoning at efficient compute for self-hosted deployments.",
        tags: ["Reasoning", "Efficient", "Self-Hosted"],
      },
      {
        name: "Qwen 2.5 7B",
        description:
          "Compact model ideal for fine-tuning and edge deployment with surprising capability.",
        tags: ["Compact", "Fine-Tunable", "Edge"],
      },
      {
        name: "Qwen 2 72B",
        description:
          "Previous-gen flagship with proven multilingual and long-context performance.",
        tags: ["Multilingual", "Long Context", "Proven"],
      },
      {
        name: "Qwen VL",
        description:
          "Vision-language model for image understanding, OCR, and visual question answering.",
        tags: ["Vision", "OCR", "Multimodal"],
      },
    ],
  },
  {
    name: "Podcast",
    icon: "🎙",
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
    description:
      "Audio generation models for creating AI-powered podcasts, voiceovers, and conversational audio content.",
    models: [
      {
        name: "NotebookLM Audio",
        description:
          "Google's podcast-style generation turning documents into engaging two-host audio discussions.",
        tags: ["Podcast", "Documents", "Discussion"],
      },
      {
        name: "Thytus Podcast AI",
        description:
          "Native Thytus audio pipeline for multi-voice podcast creation from any knowledge base.",
        tags: ["Multi-Voice", "Knowledge Base", "Audio"],
      },
    ],
  },
  {
    name: "DeepInfra",
    icon: "⚡",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    description:
      "High-performance inference platform hosting the best open-source models with blazing-fast response times.",
    models: [
      {
        name: "Llama 3.1 405B (Turbo)",
        description:
          "Optimized 405B inference with sub-second latency and quantization-aware serving.",
        tags: ["Fast Inference", "Optimized", "Large Scale"],
      },
      {
        name: "Mixtral 8x22B (Turbo)",
        description:
          "Accelerated Mixtral serving for enterprise-grade MoE model deployment.",
        tags: ["MoE", "Enterprise", "Accelerated"],
      },
      {
        name: "Gemma 2 27B",
        description:
          "Google's open model served with optimized batching for research and production use.",
        tags: ["Open Source", "Research", "Production"],
      },
      {
        name: "SDXL Turbo",
        description:
          "Near-instant image generation with Stability AI's distilled diffusion model.",
        tags: ["Image Generation", "Fast", "Creative"],
      },
    ],
  },
  {
    name: "Parasail",
    icon: "⛵",
    iconColor: "text-sky-600",
    bgColor: "bg-sky-50",
    description:
      "Cloud inference provider specializing in cost-optimized open-source model serving with flexible scaling.",
    models: [
      {
        name: "Llama 3.3 70B (Served)",
        description:
          "Cost-efficient Llama 3.3 serving with autoscaling and pay-per-token pricing.",
        tags: ["Cost Efficient", "Autoscaling", "Open Source"],
      },
      {
        name: "Qwen 2.5 72B (Served)",
        description:
          "Managed Qwen deployment with enterprise SLA guarantees and low-latency routing.",
        tags: ["Managed", "Enterprise", "Low Latency"],
      },
      {
        name: "Mistral Large (Served)",
        description:
          "Parasail-optimized Mistral Large with batched inference and regional endpoints.",
        tags: ["Optimized", "Regional", "Batched"],
      },
    ],
  },
  {
    name: "Infermatic",
    icon: "⚙",
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    description:
      "Affordable inference API offering uncensored and fine-tuned model variants for specialized applications.",
    models: [
      {
        name: "Llama 3.1 70B (Uncensored)",
        description:
          "Unrestricted Llama variant for creative writing, roleplay, and unrestricted research.",
        tags: ["Uncensored", "Creative", "Research"],
      },
      {
        name: "Mixtral 8x7B (Custom)",
        description:
          "Community-tuned Mixtral with specialized instruction following and creative generation.",
        tags: ["Custom", "Creative", "Community"],
      },
      {
        name: "Mistral 7B (Fine-tuned)",
        description:
          "Task-optimized Mistral 7B variants for classification, extraction, and chat.",
        tags: ["Fine-Tuned", "Classification", "Chat"],
      },
    ],
  },
  {
    name: "AtlasCloud",
    icon: "A",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    description:
      "European cloud AI platform providing GDPR-compliant model hosting with data residency guarantees.",
    models: [
      {
        name: "Llama 3.1 70B (EU)",
        description:
          "EU-hosted Llama inference with full GDPR compliance and data sovereignty.",
        tags: ["GDPR", "EU Hosted", "Compliant"],
      },
      {
        name: "Mistral Large (EU)",
        description:
          "European-served Mistral with low-latency access across EU data centers.",
        tags: ["EU", "Low Latency", "Sovereign"],
      },
      {
        name: "Mixtral 8x7B (EU)",
        description:
          "Cost-effective MoE model served from European infrastructure.",
        tags: ["EU", "Cost Efficient", "MoE"],
      },
    ],
  },
  {
    name: "NovitaAI",
    icon: "▲",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    description:
      "GPU cloud platform for AI inference and fine-tuning with on-demand scaling and competitive pricing.",
    models: [
      {
        name: "Llama 3.1 405B (Scaled)",
        description:
          "On-demand 405B serving with GPU auto-provisioning and burst capacity.",
        tags: ["On-Demand", "Scalable", "Large Scale"],
      },
      {
        name: "SDXL (Custom LoRA)",
        description:
          "Stable Diffusion XL with custom LoRA adapter support for branded image generation.",
        tags: ["Image Generation", "Custom", "LoRA"],
      },
      {
        name: "Whisper Large v3",
        description:
          "OpenAI's speech recognition model for accurate transcription in 100+ languages.",
        tags: ["Speech", "Transcription", "Multilingual"],
      },
    ],
  },
  {
    name: "Mancer",
    icon: "⚡",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
    description:
      "Community-driven inference platform offering unrestricted model access for creative and research applications.",
    models: [
      {
        name: "Llama 3.1 70B (Mancer)",
        description:
          "Unrestricted Llama serving with extended context and creative generation defaults.",
        tags: ["Unrestricted", "Creative", "Extended Context"],
      },
      {
        name: "Mixtral 8x7B (Mancer)",
        description:
          "Community-optimized MoE model with custom system prompts and generation presets.",
        tags: ["Community", "Custom", "Creative"],
      },
      {
        name: "Mistral 7B (Mancer)",
        description:
          "Fast, unrestricted Mistral for real-time chat and brainstorming sessions.",
        tags: ["Fast", "Chat", "Brainstorming"],
      },
    ],
  },
];

const totalModels = providers.reduce((sum, p) => sum + p.models.length, 0);

const tagColors: Record<string, string> = {
  Research: "bg-violet-100 text-violet-700",
  "Complex Reasoning": "bg-purple-100 text-purple-700",
  Agentic: "bg-indigo-100 text-indigo-700",
  "General Purpose": "bg-blue-100 text-blue-700",
  Reasoning: "bg-purple-100 text-purple-700",
  Multilingual: "bg-cyan-100 text-cyan-700",
  Math: "bg-amber-100 text-amber-700",
  Science: "bg-emerald-100 text-emerald-700",
  "Deep Reasoning": "bg-purple-100 text-purple-700",
  Logic: "bg-indigo-100 text-indigo-700",
  Analysis: "bg-blue-100 text-blue-700",
  "Problem Solving": "bg-violet-100 text-violet-700",
  "Fast Reasoning": "bg-teal-100 text-teal-700",
  "Cost Efficient": "bg-green-100 text-green-700",
  Multimodal: "bg-pink-100 text-pink-700",
  Vision: "bg-pink-100 text-pink-700",
  Fast: "bg-emerald-100 text-emerald-700",
  "High Volume": "bg-slate-100 text-slate-700",
  "Long Context": "bg-orange-100 text-orange-700",
  Code: "bg-sky-100 text-sky-700",
  "Structured Output": "bg-slate-100 text-slate-600",
  Reliable: "bg-green-100 text-green-700",
  Writing: "bg-rose-100 text-rose-700",
  Affordable: "bg-green-100 text-green-700",
  Chat: "bg-blue-100 text-blue-600",
  "Image Generation": "bg-fuchsia-100 text-fuchsia-700",
  Creative: "bg-rose-100 text-rose-700",
  Design: "bg-pink-100 text-pink-600",
  Balanced: "bg-slate-100 text-slate-700",
  Extraction: "bg-amber-100 text-amber-700",
  "Deep Analysis": "bg-violet-100 text-violet-700",
  Thorough: "bg-indigo-100 text-indigo-600",
  Enterprise: "bg-slate-100 text-slate-700",
  Versatile: "bg-blue-100 text-blue-600",
  "Ultra Fast": "bg-emerald-100 text-emerald-700",
  Pipeline: "bg-slate-100 text-slate-600",
  "Open Source": "bg-green-100 text-green-700",
  "High Performance": "bg-orange-100 text-orange-700",
  Flagship: "bg-amber-100 text-amber-700",
  "Tool Use": "bg-indigo-100 text-indigo-700",
  Scalable: "bg-blue-100 text-blue-600",
  Legacy: "bg-slate-100 text-slate-500",
  "Fine-Tunable": "bg-violet-100 text-violet-700",
  Edge: "bg-teal-100 text-teal-700",
  Efficient: "bg-green-100 text-green-700",
  Instructions: "bg-blue-100 text-blue-600",
  Proven: "bg-slate-100 text-slate-700",
  Community: "bg-amber-100 text-amber-700",
  Stable: "bg-green-100 text-green-600",
  "Self-Hosted": "bg-slate-100 text-slate-600",
  Prototyping: "bg-violet-100 text-violet-600",
  Learning: "bg-cyan-100 text-cyan-700",
  Developer: "bg-sky-100 text-sky-700",
  Debugging: "bg-red-100 text-red-600",
  Completion: "bg-sky-100 text-sky-600",
  Infilling: "bg-indigo-100 text-indigo-600",
  "Function Calling": "bg-indigo-100 text-indigo-700",
  Generation: "bg-rose-100 text-rose-600",
  Classification: "bg-amber-100 text-amber-600",
  MoE: "bg-orange-100 text-orange-700",
  "High Quality": "bg-amber-100 text-amber-700",
  Benchmarks: "bg-violet-100 text-violet-600",
  Compact: "bg-teal-100 text-teal-700",
  "Multi-Language": "bg-cyan-100 text-cyan-700",
  Editing: "bg-sky-100 text-sky-600",
  "Real-Time": "bg-emerald-100 text-emerald-700",
  "Real-Time Data": "bg-emerald-100 text-emerald-700",
  Conversational: "bg-blue-100 text-blue-600",
  RAG: "bg-purple-100 text-purple-700",
  Citations: "bg-teal-100 text-teal-700",
  Search: "bg-cyan-100 text-cyan-700",
  Summarization: "bg-rose-100 text-rose-600",
  Embeddings: "bg-indigo-100 text-indigo-600",
  Reranking: "bg-purple-100 text-purple-600",
  Relevance: "bg-teal-100 text-teal-600",
  "Deep Research": "bg-violet-100 text-violet-700",
  Factual: "bg-green-100 text-green-700",
  Serverless: "bg-sky-100 text-sky-700",
  Safe: "bg-green-100 text-green-600",
  OCR: "bg-amber-100 text-amber-600",
  Podcast: "bg-violet-100 text-violet-700",
  Documents: "bg-slate-100 text-slate-600",
  Discussion: "bg-blue-100 text-blue-600",
  "Multi-Voice": "bg-pink-100 text-pink-700",
  "Knowledge Base": "bg-indigo-100 text-indigo-600",
  Audio: "bg-violet-100 text-violet-600",
  "Fast Inference": "bg-emerald-100 text-emerald-700",
  Optimized: "bg-green-100 text-green-700",
  "Large Scale": "bg-orange-100 text-orange-700",
  Accelerated: "bg-emerald-100 text-emerald-600",
  Production: "bg-slate-100 text-slate-700",
  Autoscaling: "bg-sky-100 text-sky-700",
  Managed: "bg-blue-100 text-blue-600",
  "Low Latency": "bg-emerald-100 text-emerald-700",
  Regional: "bg-cyan-100 text-cyan-600",
  Batched: "bg-slate-100 text-slate-600",
  Uncensored: "bg-red-100 text-red-600",
  Custom: "bg-violet-100 text-violet-600",
  "Fine-Tuned": "bg-violet-100 text-violet-700",
  GDPR: "bg-green-100 text-green-700",
  "EU Hosted": "bg-blue-100 text-blue-600",
  Compliant: "bg-green-100 text-green-600",
  EU: "bg-blue-100 text-blue-600",
  Sovereign: "bg-indigo-100 text-indigo-600",
  "On-Demand": "bg-sky-100 text-sky-700",
  LoRA: "bg-violet-100 text-violet-600",
  Speech: "bg-pink-100 text-pink-600",
  Transcription: "bg-rose-100 text-rose-600",
  Unrestricted: "bg-red-100 text-red-600",
  "Extended Context": "bg-orange-100 text-orange-700",
  Brainstorming: "bg-amber-100 text-amber-600",
  Lightweight: "bg-teal-100 text-teal-700",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-slate-100 text-slate-600";
}

interface ModelsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelsModal({ isOpen, onClose }: ModelsModalProps) {
  const [search, setSearch] = useState("");
  const [expandedProviders, setExpandedProviders] = useState<Set<string>>(
    new Set(),
  );
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = search.toLowerCase().trim();

  const filteredProviders = providers
    .map((p) => {
      if (!query) return p;
      const matchedModels = p.models.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.description.toLowerCase().includes(query) ||
          m.tags.some((t) => t.toLowerCase().includes(query)) ||
          p.name.toLowerCase().includes(query),
      );
      if (matchedModels.length === 0) return null;
      return { ...p, models: matchedModels };
    })
    .filter(Boolean) as Provider[];

  const filteredTotal = filteredProviders.reduce(
    (sum, p) => sum + p.models.length,
    0,
  );

  const toggleProvider = (name: string) => {
    setExpandedProviders((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const isExpanded = (name: string) =>
    expandedProviders.has(name) || query.length > 0;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
    >
      <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl dark:shadow-black/50 w-full max-w-3xl relative animate-in fade-in slide-in-from-bottom-4 duration-300 dark:border dark:border-dark-border">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-dark-card rounded-t-2xl z-10 border-b border-gray-100 dark:border-dark-border">
          <div className="flex items-center justify-between p-6 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Select AI Model
              </h2>
              <p className="text-sm text-primary font-semibold mt-0.5">
                {totalModels} Total Models
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-dark-elevated transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="px-6 pb-4">
            <div className="relative">
              <span className="material-symbols-outlined text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Search models by name, provider, or use case..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50/50 dark:bg-dark-elevated text-sm text-slate-900 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Choose your preferred AI model &middot; {filteredTotal} result
              {filteredTotal !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Provider List */}
        <div className="p-6 pt-2 max-h-[65vh] overflow-y-auto">
          {filteredProviders.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-4xl text-slate-300 mb-3 block">
                search_off
              </span>
              <p className="text-slate-400 font-medium">
                No models found for &ldquo;{search}&rdquo;
              </p>
            </div>
          )}

          <div className="space-y-2">
            {filteredProviders.map((provider) => {
              const open = isExpanded(provider.name);
              return (
                <div
                  key={provider.name}
                  className="rounded-xl border border-gray-100 dark:border-dark-border overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleProvider(provider.name)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50/50 dark:hover:bg-dark-elevated transition-colors text-left"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${provider.bgColor} flex items-center justify-center text-lg font-bold ${provider.iconColor} shrink-0`}
                    >
                      {provider.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">
                          {provider.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {provider.models.length} model
                          {provider.models.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">
                        {provider.description}
                      </p>
                    </div>
                    <span
                      className={`material-symbols-outlined text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    >
                      expand_more
                    </span>
                  </button>

                  {open && (
                    <div className="border-t border-gray-100 dark:border-dark-border bg-gray-50/30 dark:bg-dark-base/50 px-4 pb-4 pt-3 space-y-3">
                      {provider.models.map((model) => (
                        <div
                          key={model.name}
                          className="bg-white dark:bg-dark-card rounded-xl p-4 border border-gray-100 dark:border-dark-border hover:border-gray-200 dark:hover:border-sky-700/40 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                              {model.name}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed mb-3">
                            {model.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {model.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTagColor(tag)}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
