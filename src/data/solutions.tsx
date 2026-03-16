export interface Solution {
  slug: string;
  title: string;
  navLabel: string;
  icon: string;
  tagline: string;
  description: string;
  benefits: { title: string; text: string; icon: string }[];
  features: { title: string; text: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "small-business",
    title: "Small Business",
    navLabel: "Small Business",
    icon: "storefront",
    tagline: "Scale output without scaling payroll. AI agents that research, draft, and create.",
    description:
      "Small teams need to cover many roles. Thytus gives you AI agents that handle research, drafting, data, and content in one workspace. Assign tasks in plain language and get results without hiring more people.",
    benefits: [
      { title: "Always-On Workforce", text: "Deploy agents that research competitors, draft proposals, and manage spreadsheets around the clock \u2014 no overtime pay required.", icon: "schedule" },
      { title: "Multi-Role Coverage", text: "One session can have a writing agent, a data analyst, and a researcher all working in parallel on different parts of the same project.", icon: "groups" },
      { title: "Zero Learning Curve", text: "No coding or AI expertise needed. Just describe the task in plain language and your agent gets to work immediately.", icon: "touch_app" },
    ],
    features: [
      { title: "Invoice & Report Generation", text: "Have agents draft invoices, weekly reports, and client summaries from your uploaded data." },
      { title: "Customer Communication", text: "Generate professional email responses, follow-ups, and outreach campaigns tailored to your brand voice." },
      { title: "Market Research on Demand", text: "Agents scour the web and your uploaded files to deliver competitive analysis, pricing research, and trend reports." },
      { title: "Content Creation Pipeline", text: "From social media posts to blog drafts to product descriptions \u2014 agents produce publish-ready content at scale." },
    ],
  },
  {
    slug: "legal",
    title: "Legal Teams",
    navLabel: "Legal",
    icon: "gavel",
    tagline: "Extract and organize data from legal documents so your team can focus on strategy.",
    description:
      "Thytus agents read EOBs, CMS-1500 forms, contracts, and case files to extract key fields, flag discrepancies, and compile summaries. Upload documents and get structured data so your team spends time on strategy instead of data entry.",
    benefits: [
      { title: "Form Data Extraction", text: "Agents parse structured forms like EOBs, CMS-1500s, HCFA forms, and insurance documents \u2014 pulling patient info, procedure codes, amounts, and dates automatically.", icon: "document_scanner" },
      { title: "Contract Review", text: "Upload contracts and let agents highlight key clauses, flag unusual terms, and generate plain-language summaries for faster review.", icon: "policy" },
      { title: "Case File Organization", text: "Agents read through hundreds of pages of case documents, tag relevant sections, and build structured timelines of events.", icon: "folder_managed" },
    ],
    features: [
      { title: "EOB & Claims Processing", text: "Upload Explanation of Benefits and CMS-1500 forms. Agents extract provider info, diagnosis codes, billed amounts, and payment details into clean spreadsheets." },
      { title: "Clause Comparison", text: "Compare multiple contract versions side-by-side with AI highlighting differences, risks, and negotiation points." },
      { title: "Deposition Summarization", text: "Feed in lengthy depositions or transcripts and get concise, structured summaries with key quotes flagged." },
      { title: "Compliance Checking", text: "Agents cross-reference documents against regulatory requirements and flag potential compliance gaps." },
    ],
  },
  {
    slug: "product-teams",
    title: "Product Teams",
    navLabel: "Product",
    icon: "inventory_2",
    tagline: "Turn rough notes into PRDs and stakeholder decks without leaving the workspace.",
    description:
      "Product documentation often lags behind shipping. Thytus agents turn notes into PRDs, generate slide decks, and keep roadmap docs up to date so your team stays aligned and spends less time on formatting.",
    benefits: [
      { title: "Instant Slide Decks", text: "Describe your product update or quarterly review and agents generate a complete, structured presentation with talking points and visuals.", icon: "slideshow" },
      { title: "PRD Generation", text: "Turn a brief product idea into a full Product Requirements Document with user stories, acceptance criteria, and technical considerations.", icon: "description" },
      { title: "Stakeholder Reports", text: "Agents compile sprint data, user feedback, and metrics into executive-ready reports automatically.", icon: "assessment" },
    ],
    features: [
      { title: "Roadmap Documentation", text: "Keep living roadmap documents in sync with your sprint outcomes. Agents update timelines and status automatically." },
      { title: "Competitive Intelligence", text: "Agents research competitor products, features, and pricing \u2014 delivering formatted comparison reports." },
      { title: "User Feedback Synthesis", text: "Upload survey results, support tickets, or interview transcripts and get categorized insights with priority recommendations." },
      { title: "Release Notes & Changelogs", text: "Generate professional release notes from commit histories, Jira tickets, or plain-language descriptions of what shipped." },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing Teams",
    navLabel: "Marketing",
    icon: "campaign",
    tagline: "Produce on-brand content at scale with agents that follow your guidelines.",
    description:
      "Thytus agents generate blog posts, social campaigns, emails, and ad copy aligned to your brand voice. Upload guidelines once; ideate, draft, and refine with AI in real time so volume and quality stay high.",
    benefits: [
      { title: "Brand-Aware Output", text: "Upload your brand guidelines once and every agent produces content that matches your tone, style, and messaging.", icon: "palette" },
      { title: "Campaign Generation", text: "Describe a campaign goal and agents generate the full asset suite \u2014 emails, social posts, landing page copy, and ad variants.", icon: "auto_awesome" },
      { title: "Multi-Channel Speed", text: "Produce content for every channel simultaneously. One session, multiple agents, all creating in parallel.", icon: "share" },
    ],
    features: [
      { title: "Blog & SEO Content", text: "Agents research keywords, outline articles, and draft SEO-optimized blog posts with proper formatting and internal links." },
      { title: "Social Media Calendar", text: "Generate a month of social content with captions, hashtags, and posting schedules tailored to each platform." },
      { title: "Email Sequences", text: "Build drip campaigns, welcome series, and promotional emails with personalized copy and A/B test variants." },
      { title: "Performance Analysis", text: "Upload campaign data and agents generate reports with insights on what worked, what didn't work, and what to try next." },
    ],
  },
  {
    slug: "research-academia",
    title: "Research & Academia",
    navLabel: "Research",
    icon: "science",
    tagline: "Literature review, data analysis, and citation support in one research workspace.",
    description:
      "Thytus agents search academic literature, summarize findings, and format citations. Upload papers and data; agents find connections, run analyses, and help structure drafts so you can focus on the research.",
    benefits: [
      { title: "Literature Review", text: "Agents search millions of academic papers, summarize key findings, and identify gaps in existing research relevant to your topic.", icon: "menu_book" },
      { title: "Data Analysis", text: "Upload datasets and let agents run statistical analyses, generate visualizations, and interpret results in plain language.", icon: "analytics" },
      { title: "Paper Drafting", text: "From abstract to conclusion, agents help structure papers, suggest citations, and ensure consistency across sections.", icon: "edit_note" },
    ],
    features: [
      { title: "Citation Management", text: "Agents find, format, and organize citations in APA, MLA, Chicago, or any style your journal requires." },
      { title: "Grant Proposal Assistance", text: "Structure compelling grant applications with agents that understand funding requirements and research methodology." },
      { title: "Peer Review Preparation", text: "Get AI feedback on your manuscript before submission  checking for logical gaps, unclear writing, and missing references." },
      { title: "Cross-Disciplinary Insights", text: "Agents connect findings across fields, surfacing relevant research you might not have found through traditional searches." },
    ],
  },
  {
    slug: "sales",
    title: "Sales Teams",
    navLabel: "Sales",
    icon: "trending_up",
    tagline: "Research prospects, generate proposals, and analyze pipeline data in one workspace.",
    description:
      "Thytus agents research prospects, draft tailored proposals, build battle cards, and surface deal insights from your data. Reps spend more time selling and less time on prep and admin.",
    benefits: [
      { title: "Proposal Automation", text: "Feed in prospect details and agents generate tailored proposals with pricing, case studies, and competitive differentiators.", icon: "request_quote" },
      { title: "Prospect Research", text: "Agents compile company profiles, recent news, key contacts, and pain points before every call automatically.", icon: "person_search" },
      { title: "Pipeline Analytics", text: "Upload CRM exports and agents surface deal risks, forecast revenue, and recommend next actions for stalled opportunities.", icon: "monitoring" },
    ],
    features: [
      { title: "Competitive Battle Cards", text: "Agents create and maintain battle cards that compare your product against competitors with up-to-date pricing and features." },
      { title: "Follow-Up Sequences", text: "Generate personalized follow-up emails based on meeting notes, objections raised, and prospect's interests." },
      { title: "Demo Preparation", text: "Agents build custom demo scripts and talking points tailored to each prospect industry and use case." },
      { title: "Win/Loss Analysis", text: "Upload deal outcomes and agents identify patterns which messaging wins, where deals stall, and what competitors are saying." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    navLabel: "Education",
    icon: "school",
    tagline: "Lesson plans, assessments, and feedback at scale in a shared, supervised workspace.",
    description:
      "Educators use Thytus to generate lesson plans and assessments and to give feedback at scale. Students work with AI agents that explain concepts and review work, all inside a shared workspace that instructors can oversee.",
    benefits: [
      { title: "Lesson Plan Generation", text: "Describe your learning objectives and agents generate complete lesson plans with activities, assessments, and differentiation strategies.", icon: "auto_stories" },
      { title: "Personalized Feedback", text: "Agents review student submissions and provide detailed, constructive feedback \u2014 saving hours of grading time.", icon: "rate_review" },
      { title: "Interactive Learning", text: "Students ask agents questions, get step-by-step explanations, and explore topics at their own pace within the session.", icon: "psychology_alt" },
    ],
    features: [
      { title: "Assessment Builder", text: "Generate quizzes, rubrics, and exam questions aligned to specific standards and learning objectives." },
      { title: "Curriculum Mapping", text: "Agents help map course content to standards frameworks, ensuring comprehensive coverage across the semester." },
      { title: "Study Guide Creation", text: "Turn lecture notes, textbook chapters, and recorded material into organized study guides with key concepts and practice questions." },
      { title: "Research Project Support", text: "Students use agents to find sources, outline arguments, and draft papers \u2014 with full session visibility for instructors." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    navLabel: "Healthcare",
    icon: "local_hospital",
    tagline: "Process clinical notes, extract form data, and support research with compliance in mind.",
    description:
      "Thytus agents help process clinical notes, summarize patient histories, and extract data from medical and insurance forms. Support research and documentation workflows with enterprise-grade controls and compliance.",
    benefits: [
      { title: "Clinical Note Processing", text: "Agents read discharge summaries, progress notes, and lab results to create structured patient summaries for handoffs and referrals.", icon: "clinical_notes" },
      { title: "Medical Form Extraction", text: "Upload insurance forms, prior authorizations, and intake documents \u2014 agents pull structured data and flag missing fields.", icon: "fact_check" },
      { title: "Research Support", text: "Agents help literature reviews, analyze clinical trial data, and draft sections of research papers for publication.", icon: "biotech" },
    ],
    features: [
      { title: "Patient History Summaries", text: "Compile comprehensive patient timelines from scattered documents, lab results, and provider notes." },
      { title: "Insurance Documentation", text: "Agents pre-fill authorization forms, extract EOB data, and generate appeals letters from uploaded claim documents." },
      { title: "Protocol Compliance", text: "Cross-reference clinical procedures against established protocols and flag deviations or missing documentation." },
      { title: "Training Material Generation", text: "Create training documents, procedure guides, and onboarding materials from existing clinical documentation." },
    ],
  },
];
