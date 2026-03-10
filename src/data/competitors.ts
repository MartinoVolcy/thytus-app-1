export interface CompareRow {
  feature: string;
  thytus: boolean | string;
  competitor: boolean | string;
}

export interface PainPoint {
  problem: string;
  problemDetail: string;
  solution: string;
  solutionDetail: string;
}

export interface Competitor {
  name: string;
  slug: string;
  icon: string;
  logo: string;
  description: string;
  tagline: string;
  whatTheyDo: string;
  comparison: CompareRow[];
  thytusWins: string[];
  painPoints?: PainPoint[];
}

export const competitors: Competitor[] = [
  {
    name: "Juma",
    slug: "juma",
    icon: "campaign",
    logo: "/logos/juma.png",
    description:
      "Juma is a collaborative AI workspace built for marketing teams. Formerly Team-GPT, it focuses on shared AI chat, content creation workflows, and marketing-specific templates.",
    tagline: "Juma is built for marketing. Thytus is built for everyone.",
    whatTheyDo:
      "Juma (formerly Team-GPT) is an AI workspace designed specifically for marketing teams. It offers collaborative AI chat, content creation workflows, marketing templates, and multi-model support. It does a great job helping marketers create content faster together.",
    comparison: [
      { feature: "Team collaboration", thytus: true, competitor: true },
      { feature: "Multi-model support", thytus: true, competitor: true },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Built for all departments", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Media generation (podcasts, video)", thytus: true, competitor: false },
      { feature: "Knowledge Base", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Thytus works for every team, not just marketing",
      "AI agents that work autonomously and collaborate with each other",
      "Full production workspace with docs, spreadsheets, slides, and code editor",
      "Media generation including podcasts, images, and video",
    ],
    painPoints: [
      {
        problem: "In Juma, only your marketing team benefits",
        problemDetail: "Juma is purpose-built for marketing workflows. Engineering, legal, product, and other teams are left finding their own AI tools.",
        solution: "In Thytus, every department works in one place",
        solutionDetail: "From marketing to engineering to legal, your whole company uses the same AI workspace. Context flows across teams, not just within one.",
      },
      {
        problem: "In Juma, AI only responds when asked",
        problemDetail: "You chat, it replies. There are no autonomous agents that can take on tasks and work independently in the background.",
        solution: "In Thytus, AI agents work on their own",
        solutionDetail: "Deploy agents that plan, execute, and collaborate with each other autonomously. You set the goal, they handle the rest.",
      },
      {
        problem: "In Juma, you're limited to chat and content",
        problemDetail: "There's no code editor, no spreadsheets, no slide builder. If you need those tools, you leave the workspace.",
        solution: "In Thytus, everything is built in",
        solutionDetail: "Docs, spreadsheets, slides, code editor, and media generation are all part of the workspace. No context switching needed.",
      },
    ],
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    icon: "chat_bubble",
    logo: "/logos/openai.png",
    description:
      "ChatGPT is OpenAI's conversational AI chatbot. It helps individuals get answers, write content, and analyze data through a single-model chat interface.",
    tagline: "ChatGPT is a chatbot. Thytus is a workspace.",
    whatTheyDo:
      "ChatGPT by OpenAI is the most widely used AI chatbot in the world. It excels at answering questions, writing content, coding assistance, and data analysis through its Code Interpreter. It supports image generation with DALL-E and custom GPTs through the GPT Store.",
    comparison: [
      { feature: "Real-time team collaboration", thytus: true, competitor: false },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Shared workspace", thytus: true, competitor: false },
      { feature: "Built-in document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Image generation", thytus: true, competitor: true },
      { feature: "Code execution", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Your whole team works together in one workspace instead of separate tabs",
      "Use ChatGPT models alongside Claude, Gemini, and dozens more",
      "Context is shared across the session, never lost between conversations",
      "Full production tools built in, not just a chat window",
    ],
  },
  {
    name: "Claude / Cowork",
    slug: "claude",
    icon: "psychology",
    logo: "/logos/anthropic.png",
    description:
      "Claude is Anthropic's AI assistant known for long-context understanding and careful reasoning. Claude Cowork adds lightweight team sharing for small groups.",
    tagline: "Claude is a brilliant individual. Thytus is a brilliant team.",
    whatTheyDo:
      "Claude by Anthropic is known for its careful reasoning, long context window (up to 200K tokens), and artifact creation. Claude Cowork adds shared conversations and projects for small teams. Claude Code offers developer-focused agent workflows.",
    comparison: [
      { feature: "Real-time team collaboration", thytus: true, competitor: "Limited" },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Autonomous AI agents", thytus: true, competitor: "Claude Code only" },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Long context window", thytus: true, competitor: true },
      { feature: "Document editing", thytus: true, competitor: "Artifacts" },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: "Claude Code" },
      { feature: "Media generation", thytus: true, competitor: false },
    ],
    thytusWins: [
      "Use Claude models alongside GPT, Gemini, and others in the same session",
      "Full team workspace instead of lightweight shared conversations",
      "Multiple agents from different providers collaborating, not just Claude",
      "Complete production tools beyond artifacts",
    ],
    painPoints: [
      {
        problem: "In Claude Cowork, team sharing is lightweight",
        problemDetail: "Cowork lets small teams share conversations and projects, but there's no real-time co-editing, no shared canvas, and no way to bring your whole company together.",
        solution: "In Thytus, your entire team collaborates in real time",
        solutionDetail: "Everyone edits, reviews, and creates together live. @mentions, polls, reply threads, and shared sessions keep everyone aligned.",
      },
      {
        problem: "In Claude, you're locked into one provider",
        problemDetail: "You can only use Anthropic's models. If GPT is better for coding or Gemini is better for research, you're stuck switching tools.",
        solution: "In Thytus, you pick the best model for every task",
        solutionDetail: "Run Claude alongside GPT, Gemini, Mistral, and dozens more. Different agents can use different models in the same session.",
      },
      {
        problem: "In Claude, agents work alone",
        problemDetail: "Claude Code runs developer workflows solo. There's no way for multiple agents to coordinate, share findings, or divide work.",
        solution: "In Thytus, agents collaborate like a real team",
        solutionDetail: "Multiple AI agents from different providers work together, share context, divide tasks, and build on each other's output automatically.",
      },
    ],
  },
  {
    name: "Gemini",
    slug: "gemini",
    icon: "auto_awesome",
    logo: "/logos/gemini-color.png",
    description:
      "Gemini is Google's multimodal AI assistant, deeply integrated into Google Workspace. It handles text, images, video, and audio with search-grounded answers.",
    tagline: "Gemini lives in Google. Thytus lives wherever your team does.",
    whatTheyDo:
      "Gemini by Google is a multimodal AI assistant that handles text, images, video, and audio. It integrates deeply with Google Workspace (Docs, Sheets, Gmail, Drive) and uses Google Search grounding for up-to-date answers. Extensions connect it to Maps, YouTube, Flights, and more.",
    comparison: [
      { feature: "Real-time team collaboration", thytus: true, competitor: "Via Google Workspace" },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Multimodal input", thytus: true, competitor: true },
      { feature: "Standalone workspace", thytus: true, competitor: false },
      { feature: "Built-in slides", thytus: true, competitor: "Google Slides" },
      { feature: "Built-in spreadsheets", thytus: true, competitor: "Google Sheets" },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Search grounding", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Not locked into the Google ecosystem",
      "Use Gemini alongside GPT, Claude, and other models in one session",
      "AI agents that work independently and coordinate with each other",
      "A standalone workspace that works for any team, not tied to Google apps",
    ],
  },
  {
    name: "Magai",
    slug: "magai",
    icon: "palette",
    logo: "/logos/magai.png",
    description:
      "Magai brings multiple generative AI models into one interface. It's designed for individual creators who want to switch between GPT, Claude, and other models.",
    tagline: "Magai switches models. Thytus puts them to work together.",
    whatTheyDo:
      "Magai is a multi-model AI chat platform that lets users switch between GPT, Claude, Gemini, Llama, and other models in a single interface. It offers image generation tools, chat organization with folders, prompt templates, personas, and brand voice settings for individual content creators.",
    comparison: [
      { feature: "Multi-model support", thytus: true, competitor: true },
      { feature: "Real-time team collaboration", thytus: true, competitor: false },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Shared workspace", thytus: true, competitor: false },
      { feature: "Document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Image generation", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Your team collaborates in real time, not just an individual tool",
      "AI agents that work autonomously, not just chat responses",
      "Full workspace with docs, spreadsheets, slides, and code",
      "Models work together on tasks, not just switched between",
    ],
  },
  {
    name: "NotebookLM",
    slug: "notebooklm",
    icon: "menu_book",
    logo: "/logos/Notebooklm.png",
    description:
      "NotebookLM is Google's AI-powered research notebook. Upload your sources and get grounded conversations, citations, and AI-generated podcast summaries.",
    tagline: "NotebookLM reads your sources. Thytus puts them to work.",
    whatTheyDo:
      "NotebookLM by Google is an AI research tool that lets you upload documents and have source-grounded conversations. It provides citation-backed responses and can generate AI podcast summaries of your content. It's free with a Google account and great for individual research and analysis.",
    comparison: [
      { feature: "Source-grounded responses", thytus: true, competitor: true },
      { feature: "Real-time team collaboration", thytus: true, competitor: false },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Content creation tools", thytus: true, competitor: false },
      { feature: "Document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "AI podcasts", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Go beyond research into actually creating and producing content",
      "Collaborate with your team in real time, not just solo research",
      "Use any AI model, not just what Google provides",
      "Full workspace for turning research into deliverables",
    ],
  },
  {
    name: "Manus",
    slug: "manus",
    icon: "smart_toy",
    logo: "/logos/manus.png",
    description:
      "Manus is an AI agent platform that executes complex tasks autonomously using browser actions and code execution. Built for individual power users.",
    tagline: "Manus runs solo agents. Thytus runs agent teams.",
    whatTheyDo:
      "Manus is an AI agent platform designed for individual power users. It executes complex, multi-step tasks autonomously using browser actions and a code execution environment. Agents can plan, reason, browse the web, and process files independently.",
    comparison: [
      { feature: "Autonomous AI agents", thytus: true, competitor: true },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Real-time team collaboration", thytus: true, competitor: false },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Shared workspace", thytus: true, competitor: false },
      { feature: "Document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Browser-based actions", thytus: false, competitor: true },
    ],
    thytusWins: [
      "Agents collaborate with each other and with your team, not just solo execution",
      "Choose any model for your agents, not locked into one pipeline",
      "Full production workspace alongside agent capabilities",
      "Team-first design, not just a power user tool",
    ],
  },
  {
    name: "Genspark",
    slug: "genspark",
    icon: "travel_explore",
    logo: "/logos/genspark.png",
    description:
      "Genspark is an AI-powered research engine that synthesizes multi-source answers. Its agents gather, organize, and present information through Sparkpages.",
    tagline: "Genspark researches. Thytus researches, creates, and ships.",
    whatTheyDo:
      "Genspark is an AI-powered search and research engine. Its agents gather information from multiple sources, synthesize answers, and present organized results through Sparkpages. It focuses on deep, agent-driven research with real-time web data access and visual responses.",
    comparison: [
      { feature: "Deep research capabilities", thytus: true, competitor: true },
      { feature: "Real-time team collaboration", thytus: true, competitor: false },
      { feature: "Multi-model support", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Content creation tools", thytus: true, competitor: false },
      { feature: "Document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Web search grounding", thytus: true, competitor: true },
    ],
    thytusWins: [
      "Research is just the start. Create docs, slides, and presentations from your findings",
      "Your whole team participates in the research process together",
      "Multiple AI agents collaborate across different models",
      "A full workspace, not just a research output page",
    ],
    painPoints: [
      {
        problem: "In Genspark, research is the finish line",
        problemDetail: "You get a well-organized Sparkpage, but turning that research into a presentation, document, or action plan means leaving the tool entirely.",
        solution: "In Thytus, research is just the starting point",
        solutionDetail: "Take your findings and immediately create docs, slides, spreadsheets, or hand them to agents who turn insights into deliverables.",
      },
      {
        problem: "In Genspark, you research alone",
        problemDetail: "There's no way for your team to collaborate on research in real time. Everyone runs their own searches separately.",
        solution: "In Thytus, your team researches together",
        solutionDetail: "Multiple people and AI agents work in the same session. Share findings live, react with @mentions, and align on next steps instantly.",
      },
      {
        problem: "In Genspark, agents can't work with other models",
        problemDetail: "You're limited to Genspark's own research agents. There's no way to bring in GPT for writing or Claude for analysis.",
        solution: "In Thytus, agents from any model collaborate",
        solutionDetail: "Run a Gemini agent for research, a Claude agent for analysis, and a GPT agent for writing, all in the same session, all sharing context.",
      },
    ],
  },
  {
    name: "Sila",
    slug: "sila",
    icon: "bolt",
    logo: "/logos/SilaLogo.webp",
    description:
      "Sila is an AI productivity platform combining chat with workflow automation. It helps individuals and small teams streamline repetitive tasks.",
    tagline: "Sila automates tasks. Thytus transforms how teams work.",
    whatTheyDo:
      "Sila is an AI productivity platform that combines chat with workflow automation. It offers AI chat with multiple models, workflow automation templates, document processing, third-party integrations, and task management features aimed at individuals and small teams.",
    comparison: [
      { feature: "Multi-model support", thytus: true, competitor: true },
      { feature: "Real-time team collaboration", thytus: true, competitor: "Limited" },
      { feature: "Autonomous AI agents", thytus: true, competitor: false },
      { feature: "Agent-to-agent collaboration", thytus: true, competitor: false },
      { feature: "Workflow automation", thytus: true, competitor: true },
      { feature: "Document editing", thytus: true, competitor: false },
      { feature: "Spreadsheets", thytus: true, competitor: false },
      { feature: "Slides / presentations", thytus: true, competitor: false },
      { feature: "Code editor", thytus: true, competitor: false },
      { feature: "Media generation", thytus: true, competitor: false },
    ],
    thytusWins: [
      "Full real-time team collaboration, not limited sharing",
      "AI agents that think, collaborate, and execute autonomously",
      "Complete workspace tools beyond automation templates",
      "Media generation including podcasts, images, and video",
    ],
  },
];
