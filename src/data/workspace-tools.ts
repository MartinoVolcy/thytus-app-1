export interface WorkspaceTool {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  tagline: string;
  description: string;
  content: { heading: string; text: string }[];
  features: { title: string; text: string }[];
}

export const workspaceTools: WorkspaceTool[] = [
  {
    slug: "file-window",
    icon: "folder_open",
    title: "File Window",
    subtitle: "File Management",
    image: "/files-window.png",
    color: "bg-sky-100/60 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400",
    tagline: "Centralize files across sessions and keep your Knowledge Base in sync for every participant and agent.",
    description: "The File Window is your single place for documents inside Thytus. Upload any file type into a session and it is immediately available to every participant and AI agent. Files persist in your Knowledge Base so you can reuse them in future sessions without re-uploading.",
    content: [
      { heading: "Drag & drop uploads", text: "Browse or drag files into the window. Supports PDFs, documents, spreadsheets, images, video, audio, and code." },
      { heading: "Instant session sharing", text: "Uploaded files are visible to all participants and AI agents in the session immediately, with no separate sharing step." },
      { heading: "Persistent Knowledge Base", text: "Files are saved to your Knowledge Base so you can reuse them in future sessions without re-uploading." },
    ],
    features: [
      { title: "Multi-Format Support", text: "Upload PDFs, Word docs, Excel spreadsheets, images, video, audio, and code files. They're all processed and indexed instantly." },
      { title: "Cloud Integration", text: "Import files directly from Google Drive and Dropbox without downloading them to your device first." },
      { title: "Versioning & History", text: "Track changes to files over time and revert to previous versions when needed." },
      { title: "Automatic AI Indexing", text: "Every file you upload is automatically parsed and made available as context for your AI agents to reference." },
    ],
  },
  {
    slug: "text-editor",
    icon: "edit_document",
    title: "Text Editor",
    subtitle: "Collaborative Writing",
    image: "/text-editor.png",
    color: "bg-purple-100/50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400",
    tagline: "Co-author documents with your team and AI agents in real time, without version conflicts.",
    description: "The Text Editor is a collaborative writing workspace inside Thytus. Draft reports, meeting notes, or proposals with teammates and AI agents on the same document at the same time. Edits sync instantly so everyone stays aligned.",
    content: [
      { heading: "Real-time co-authoring", text: "Edit with teammates and AI agents at the same time. Changes appear instantly with no version conflicts." },
      { heading: "AI-assisted drafting", text: "Ask agents to draft, expand, summarize, or rewrite sections so you can focus on structure and strategy." },
      { heading: "Rich formatting", text: "Use headings, lists, tables, and embedded media so documents are presentation-ready inside the workspace." },
    ],
    features: [
      { title: "AI-Powered Rewriting", text: "Highlight any section and ask an agent to rewrite, expand, condense, or change the tone in seconds." },
      { title: "Templates & Starters", text: "Start from pre-built templates for reports, proposals, meeting notes, and more to save time." },
      { title: "Export Options", text: "Download your finished document as PDF, DOCX, or Markdown, ready for external distribution." },
      { title: "Session-Wide Visibility", text: "Every edit is visible to all session participants in real time, making collaboration seamless." },
    ],
  },
  {
    slug: "spreadsheets",
    icon: "table_chart",
    title: "Spreadsheets",
    subtitle: "Data & Analysis",
    image: "/spreadsheets.png",
    color: "bg-green-100/50 dark:bg-green-500/15 text-green-600 dark:text-green-400",
    tagline: "Build and analyze data in-session with formulas and AI-driven insights in one place.",
    description: "Spreadsheets in Thytus support full formulas and live editing in the session. Create and edit data, then ask an AI agent to clean datasets, summarize trends, or build pivot views. Results stay in the sheet so your team has a single source of truth.",
    content: [
      { heading: "Live data editing", text: "Create and edit spreadsheets in the session with formulas and sorting. Changes sync in real time for all participants." },
      { heading: "AI-powered analysis", text: "Ask an agent to analyze trends, build pivot summaries, or clean data. Results are written directly into the sheet." },
      { heading: "Import and export", text: "Import CSV or Excel and export finished spreadsheets for use outside the workspace." },
    ],
    features: [
      { title: "Formula Support", text: "Use standard spreadsheet formulas to calculate, aggregate, and transform your data." },
      { title: "AI Data Cleaning", text: "Ask agents to identify and fix inconsistencies, duplicates, and formatting issues across your dataset." },
      { title: "Chart Generation", text: "Turn your data into visual charts and graphs with a single prompt to your AI assistant." },
      { title: "CSV & Excel Compatibility", text: "Import and export in CSV and Excel formats for seamless integration with external tools." },
    ],
  },
  {
    slug: "slides",
    icon: "slideshow",
    title: "Slides",
    subtitle: "Presentations",
    image: "/slides.png",
    color: "bg-orange-100/50 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400",
    tagline: "Create and refine presentations in the workspace with AI-generated drafts and real-time collaboration.",
    description: "The Slides tool lets you build presentation decks inside Thytus. Provide a topic or outline and an AI agent generates a draft with structure, talking points, and visual placeholders. Your team can review, comment, and refine slides together in real time.",
    content: [
      { heading: "Slide creation and editing", text: "Build decks in the workspace with text, images, charts, and layouts. No need to switch to another app." },
      { heading: "AI-generated drafts", text: "Provide a topic or outline and an agent generates a presentation draft with structure, talking points, and visual placeholders." },
      { heading: "Team collaboration", text: "Review, comment, and refine slides together in real time so the team is aligned before the final presentation." },
    ],
    features: [
      { title: "One-Prompt Presentations", text: "Describe your topic and let an AI agent build a complete slide deck with structure, content, and design suggestions." },
      { title: "Rich Media Support", text: "Embed images, charts, and diagrams directly into slides for visually compelling presentations." },
      { title: "Speaker Notes", text: "Add and edit speaker notes per slide so presenters are always prepared." },
      { title: "Export to PowerPoint", text: "Download your finished deck as a .pptx file ready for any presentation setting." },
    ],
  },
  {
    slug: "code-editor",
    icon: "code",
    title: "Code Editor",
    subtitle: "Development Tools",
    image: "/code-editor.png",
    color: "bg-cyan-100/50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    tagline: "Edit code with syntax support and AI assistance, and get feedback from teammates in the same session.",
    description: "The Code Editor is a full coding environment inside Thytus. Write and edit code with syntax highlighting and language support, use AI for suggestions and debugging, and share snippets with teammates for review without leaving the workspace.",
    content: [
      { heading: "Syntax-highlighted editing", text: "Edit code with syntax highlighting, auto-indentation, and language support for many programming languages." },
      { heading: "AI pair programming", text: "Get suggestions, generate boilerplate, debug errors, or refactor with AI, all inside the same session." },
      { heading: "Inline code review", text: "Share code with teammates and agents for feedback. Review and iterate without leaving the workspace." },
    ],
    features: [
      { title: "Multi-Language Support", text: "Syntax highlighting and language detection for Python, JavaScript, TypeScript, Java, Go, Rust, and dozens more." },
      { title: "AI Debugging", text: "Paste an error message and let an agent trace the bug, explain the root cause, and suggest a fix." },
      { title: "Boilerplate Generation", text: "Describe a function or component and let the AI write the scaffolding so you can focus on business logic." },
      { title: "Collaborative Review", text: "Share code snippets with session participants for real-time feedback, comments, and suggested edits." },
    ],
  },
  {
    slug: "media-generation",
    icon: "movie",
    title: "Media Generation",
    subtitle: "Podcasts, Images & Videos",
    image: "/media-generation.png",
    color: "bg-pink-100/50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400",
    tagline: "Produce podcasts, images, and video from prompts inside your workspace, with no external tools.",
    description: "Media Generation runs inside Thytus so you can create podcasts, images, and short-form video from natural language prompts. AI agents generate assets on demand; your team reviews and iterates in the same session, with no context switching.",
    content: [
      { heading: "AI podcasts", text: "Generate podcast episodes from a topic, outline, or script. Control voices and tone; output is ready for distribution." },
      { heading: "Image generation", text: "Create images from text prompts for social, presentations, or branding. Iterate on style and composition in-session." },
      { heading: "Video creation", text: "Produce short-form video from prompts or scripts for social, demos, or explainers without a separate production pipeline." },
    ],
    features: [
      { title: "Text-to-Podcast", text: "Turn any written content, topic, or brief into a multi-voice podcast episode ready for distribution." },
      { title: "Prompt-to-Image", text: "Generate high-quality images from natural language descriptions. Fine-tune style, aspect ratio, and composition." },
      { title: "AI Video Clips", text: "Create short-form videos from prompts or scripts, ideal for social media, marketing, and internal communications." },
      { title: "Brand Consistency", text: "Set brand guidelines so every generated asset stays on-brand across colors, tone, and visual style." },
    ],
  },
];
