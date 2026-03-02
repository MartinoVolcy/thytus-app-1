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
    tagline: "Upload, share, and manage files across every session, automatically synced to your Knowledge Base.",
    description: "The File Window is your central hub for everything document-related inside Thytus. Drag and drop any file type into the session and it's instantly available to every participant and AI agent. No more emailing attachments or re-uploading the same document. Everything persists in your Knowledge Base for future sessions.",
    content: [
      { heading: "Drag & Drop Uploads", text: "Click to browse or drag files directly into the window. Supports PDFs, documents, spreadsheets, images, video, audio, and code files." },
      { heading: "Instant Session Sharing", text: "Every file you upload is immediately visible to all participants and AI agents in the session. No separate sharing step required." },
      { heading: "Persistent Knowledge Base", text: "Uploaded files are automatically saved to your Knowledge Base, so you can reference them across future sessions without re-uploading." },
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
    tagline: "Draft, edit, and polish documents together with your team and AI agents in real time.",
    description: "The Text Editor turns Thytus into a collaborative writing workspace. Whether you're drafting a report, taking meeting notes, or building a proposal, you and your AI agents can work on the same document simultaneously. No version conflicts, no waiting.",
    content: [
      { heading: "Real-Time Co-Authoring", text: "Write alongside teammates and AI agents simultaneously. Every edit appears instantly with no version conflicts and no waiting." },
      { heading: "AI-Assisted Drafting", text: "Let agents draft, expand, summarize, or rewrite sections on demand while you focus on the bigger picture." },
      { heading: "Rich Formatting", text: "Full support for headings, lists, tables, and embedded media so your documents are presentation-ready without leaving the workspace." },
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
    tagline: "Organize data, run analysis, and generate insights, all powered by AI within your session.",
    description: "Spreadsheets in Thytus go beyond rows and columns. Create, edit, and analyze data directly in the session with full formula support. Ask an AI agent to clean messy datasets, generate pivot summaries, or surface trends, and the results appear right in the sheet.",
    content: [
      { heading: "Live Data Editing", text: "Create and manipulate spreadsheets directly in the session. Organize data, apply formulas, and sort columns in real time." },
      { heading: "AI-Powered Analysis", text: "Ask an agent to analyze trends, generate pivot summaries, or clean messy datasets. Results appear right in the sheet." },
      { heading: "Import & Export", text: "Bring in existing CSV or Excel files and export finished spreadsheets to share with stakeholders outside the workspace." },
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
    tagline: "Build, edit, and collaborate on presentations without ever leaving the workspace.",
    description: "The Slides tool lets you create polished slide decks directly inside Thytus. Give an AI agent a topic or outline and it will generate a full presentation draft, complete with structure, talking points, and visuals. Your team can review, comment, and refine slides together in real time.",
    content: [
      { heading: "Slide Creation & Editing", text: "Build polished slide decks directly in the workspace. Add text, images, charts, and layouts without switching to another app." },
      { heading: "AI-Generated Decks", text: "Give an agent a topic or outline and it will generate a full presentation draft, complete with structure, talking points, and visuals." },
      { heading: "Team Collaboration", text: "Multiple people can review, comment on, and refine slides at the same time, keeping everyone aligned before the final presentation." },
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
    tagline: "Write, debug, and review code with AI pair-programming built right into the session.",
    description: "The Code Editor gives developers a full coding environment inside Thytus. Write code with syntax highlighting and auto-indentation, get real-time AI suggestions, and share your work with teammates for instant review, all without leaving the workspace.",
    content: [
      { heading: "Syntax-Highlighted Editing", text: "Write and edit code with full syntax highlighting, auto-indentation, and language detection for dozens of programming languages." },
      { heading: "AI Pair Programming", text: "Get real-time suggestions, have agents write boilerplate, debug errors, or refactor functions, all within the same session." },
      { heading: "Inline Code Review", text: "Share code with teammates and agents for instant feedback. Review diffs, suggest changes, and iterate without leaving the workspace." },
    ],
    features: [
      { title: "Multi-Language Support", text: "Syntax highlighting and language detection for Python, JavaScript, TypeScript, Java, Go, Rust, and dozens more." },
      { title: "AI Debugging", text: "Paste an error message and let an agent trace the bug, explain the root cause, and suggest a fix." },
      { title: "Boilerplate Generation", text: "Describe a function or component and let the AI write the scaffolding so you can focus on business logic." },
      { title: "Collaborative Review", text: "Share code snippets with session participants for real-time feedback, comments, and suggested edits." },
    ],
  },
];
