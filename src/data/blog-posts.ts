export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    linkedIn: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "multi-model-agent-collaboration",
    title: "I Made GPT-5.2, Opus 4.6, and Gemini 3.1 Work Together",
    subtitle: "Will three AI agents from competing companies actually collaborate like a real team, or will their personalities get in the way?",
    author: {
      name: "Martino Volcy",
      role: "Writer",
      linkedIn: "https://www.linkedin.com/in/martinovolcy/",
    },
    date: "Feb 22, 2026",
    readTime: "6 min read",
    tags: ["AI Agents", "Multi-Model", "Experiment"],
    content: [
      {
        type: "image",
        src: "/AI-Models.webp",
        alt: "AI Models",
        caption: "Tools Used: Thytus, Chat GPT-5.2, Claude Opus 4.6, Google Gemini 3.1",
      },
      {
        type: "paragraph",
        text: "In 2026, it's all about pushing agents further. Last year, we saw the capabilities of what an agent and even a team of agents can do. We see with tools like Claude Code and Kimi Agent Swarm, where you can use these providers' respective models to create a team of AI agents that work together. However, these models aren't good at everything. Claude models are good at things Kimi models aren't good at, and vice versa.",
      },
      {
        type: "paragraph",
        text: "And what if I want to use other models too, like GPT or Gemini? Will they even work together, or are we stuck with just one provider? I'm going to use a Thytus workspace to see if the latest flagship models from OpenAI, Anthropic, and Google will work as a team.",
      },
      {
        type: "paragraph",
        text: "For anyone who's not familiar with Thytus, the workspace allows you and your teams to send hundreds of parallel AI agents to work and talk to each other like a real team would. It also allows you to turn any model into agents that can also work and collaborate with each other, which is how I'm able to do this.",
      },
      {
        type: "heading",
        text: "Method",
      },
      {
        type: "paragraph",
        text: "I gave them a small project with no time constraints, giving them space to establish a working rhythm. I took the role of Project Manager, setting goals, providing context, and stepping back. The three agents would handle the rest. Here's the super simple prompt I gave the three agents:",
      },
      {
        type: "quote",
        text: "We've got a new client - Fitness Max, a fitness app launching in 6 weeks. They need help positioning against competitors and creating launch content.\n\n3 files are in the session workspace: Market data on their competitors, Fitness Max's product specs, Brand guidelines\n\nDeliverables:\n- Competitive analysis (1-2 pages)\n- Social media launch posts (Instagram, Twitter, LinkedIn)\n- FAQ document (10 questions)\n\nCoordinate with the other agents on who's handling what in order to get this project done.",
      },
      {
        type: "heading",
        text: "Experiment",
      },
      {
        type: "paragraph",
        text: "After sending the agents off, each of them went in three different directions and showed their personalities.",
      },
      {
        type: "heading",
        text: "GPT-5.2: The 10x Employee",
      },
      {
        type: "paragraph",
        text: "GPT-5.2 is the 10x employee who knows they can do the project by themselves and doesn't need you, even if the boss told them they need to be nice. The very first reasoning token went to GPT-5.2 dismissing the other agents and acting like they weren't there.",
      },
      {
        type: "image",
        src: "/RunInitiation.png",
        alt: "GPT-5.2 reasoning tokens showing it dismissing the other agents",
        caption: "GPT-5.2's first move: ignore the team entirely.",
      },
      {
        type: "paragraph",
        text: "The agent then went on to complete the entire project with its sub-agents without contacting Gemini or Opus.",
      },
      {
        type: "heading",
        text: "Opus 4.6: The Newly Promoted Lead",
      },
      {
        type: "paragraph",
        text: "Opus 4.6 is the newly promoted lead. They have the traits of leadership skills needed to be great, but are new and lack the heart and voice to bring a team together. After receiving my team's request and seeing GPT-5.2 working in the workspace canvas, Opus 4.6 automatically took the lead.",
      },
      {
        type: "image",
        src: "/Corrdination.png",
        alt: "Opus 4.6 taking the lead and assigning tasks",
        caption: "Opus 4.6 assumed leadership the moment it entered the workspace.",
      },
      {
        type: "paragraph",
        text: "My theory for this is that since Opus is probably trained to guide agents in Claude Code, it assumed it was the leader. In addition, since it's used to sub-agents in Claude Code, it may have assumed the other agents would automatically follow its words. Opus went on to send GPT-5.2 and Gemini 3.1 a message on their task, did its part, and then sent my team a message about what it did and what the other agents were working on.",
      },
      {
        type: "image",
        src: "/Agent-Respone.png",
        alt: "Opus 4.6 messaging the team about task delegation",
        caption: "Opus reported back to the team after delegating work.",
      },
      {
        type: "heading",
        text: "Gemini 3.1: The Eager New Hire",
      },
      {
        type: "paragraph",
        text: "Gemini 3.1 is the new hire who's great at following instructions, curious enough to push a project forward, but makes silly mistakes. Unlike the other agents who get info when needed, Gemini frontloads all the context. It goes through every file and message history.",
      },
      {
        type: "image",
        src: "/RunTime-Log.png",
        alt: "Gemini 3.1 reading through all files and context",
        caption: "Gemini's approach: read everything before doing anything.",
      },
      {
        type: "paragraph",
        text: "After that, it starts messaging the other agents. It does this for quite a while, but there is no response since Opus already finished its part, and GPT-5.2 is set on doing it by itself. After countless messages with no response, it finally goes to do its own work.",
      },
      {
        type: "heading",
        text: "Results",
      },
      {
        type: "paragraph",
        text: "At the end, Opus wrote its parts first, GPT rewrote Opus's work and completed the rest of the project, and Gemini just added its touches to GPT's work. The final result was exactly as requested and took a short amount of time due to its simplicity. However, in a more complex example, each model's knowledge and personality working together would've provided the same, if not better, output and speed.",
      },
      {
        type: "heading",
        text: "So, can multi-model teams actually work?",
      },
      {
        type: "paragraph",
        text: "Yes! Multi-model agent teams aren't just possible, they're powerful. But like any human team or single agent, they need structure.",
      },
      {
        type: "paragraph",
        text: "I'm sure that with proper prompt engineering, I can get these models to work together without any problem. As a matter of fact, I can guarantee it! However, my goal with this experiment was to see how the different models' personalities would mesh naturally. Like real human teams when they're first formed, everyone's personality is meshed together, and only experience and guidance will form a group dynamic.",
      },
      {
        type: "paragraph",
        text: "Try your own experiment and let me know how it goes!",
      },
    ],
  },
];
