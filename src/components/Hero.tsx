import React from 'react';
import Link from 'next/link';

const Hero = () => {
    const activeAgents = React.useMemo(() => {
        const min = 10000;
        const max = 1000000;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum.toLocaleString();
    }, []);

    return (
        <div className="bg-[#0a0c16] text-slate-100 font-display selection:bg-primary selection:text-white overflow-x-hidden">
            {/* Navigation - Embedded in Hero for now as per design, but usually lives in Navbar component. 
          Since we have a separate Navbar component, we might want to consolidate, but for this task 
          I will render the Hero's specific nav here as requested by the design match, 
          or better yet, I should probably strip the nav if the main layout has one. 
          However, the design "IS" the hero with a specific glass nav. 
          Let's include it to match the preview exactly. */}
            {/* <nav className="fixed top-0 left-0 right-0 z-50 glass-nav"> ... </nav> */}
            {/* user has a Navbar component already. I will NOT include the nav from the design to avoid duplication, 
      UNLESS the user specifically asked for the "Page" which might include nav. 
      The task is "Apply Stitch Hero Design". The design HTML includes a Nav. 
      Let's look at the user's current Page.tsx. It has <Navbar />. 
      If I include Nav in Hero, it will be double. 
      I will COMMENT OUT the nav part in the code below or just omit it, 
      BUT the visual design might depend on the hero spacing (pt-40). 
      Let's keep the spacing but omit the internal Nav tag if we trust the global Navbar.
      Actually, let's include the "Main" part of the HTML.
      */}

            <main className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-gradient pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span suppressHydrationWarning>
                                {activeAgents} Agents Currently Running
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8">
                            Where Human Ingenuity Meets <br />
                            <span className="text-gradient">
                                Autonomous Precision
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            THYTUSN Showcase: The first collaborative workspace where AI agents and teams work side-by-side in real-time. Boost your output by 10x with autonomous workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link href="/signup" className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/40 flex items-center justify-center gap-2">
                                Get Started for Free <span className="material-icons text-lg">arrow_forward</span>
                            </Link>
                            <button className="w-full sm:w-auto px-10 py-4 bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/50 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-3">
                                <span className="material-icons text-primary">play_circle</span> Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="dashboard-container max-w-6xl mx-auto mb-32">
                        <div className="dashboard-tilt relative rounded-2xl border border-white/5 bg-[#0f111d]/90 p-1 shadow-2xl overflow-hidden backdrop-blur-xl">
                            <div className="bg-[#0a0c16] rounded-[14px] p-4">
                                <div className="flex items-center justify-between mb-6 px-4 py-2 border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                                        </div>
                                        <div className="h-4 w-px bg-slate-800 mx-2"></div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                            <span className="material-icons text-sm">folder</span>
                                            Product Launch / Sprint 04
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-2.5">
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#0a0c16]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV3HOmX_CPPbwdM4Yp9MjiBE3U5pJd9JoRianeOsOrybeSIKlh_iV2Wig1hjxqbsTiKHtBYuLvYmV3-JfuTya2rhGu4zsk9-t5xXo9WGxweh1mowTjqMiZf_HIXnCEL0rig_pLfpstHk37n1BMje7_JFsd-hE6t-JfuOz5N5Y2LyUoND-xZhMhgyklSSQXTeWzcl2BVR1eLfRBuY_anJq4TNMV_H5wCDzY2Ir9sDSZQt9Tr8UPemVjgAAvcBuXYb-l-m8GrgK-baw" />
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#0a0c16]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIydP2pPD91kyFAeq9tNGfASpN9Wr8hSGdUEBnu_lUET0Lm-hmEbW5Rhwd_OUzIh5tQP2POYqOwQ0Tr_WeOdw1sJV8mcWlNrNYnk7s22CZHmTU0JGV36HZqhUB-z0wt7LJUmNG013skuEUJ_y8cMkFpUGXwHt117Bl1hj2By6bAS3q6nin5dHqAIMu9q-0y397T-IPewJja9KClmGcSe3LXL4H5hYKS5G1-8WlSAH3EHMdobL84RnIHcjwfdZQob7V8aaKAWFTFp4" />
                                            <div className="w-8 h-8 rounded-full border-2 border-[#0a0c16] bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary ai-pulse">
                                                AI-01
                                            </div>
                                            <div className="w-8 h-8 rounded-full border-2 border-[#0a0c16] bg-purple-500/20 flex items-center justify-center text-[9px] font-bold text-purple-400 ai-pulse">
                                                AI-02
                                            </div>
                                        </div>
                                        <button className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors">
                                            + Add Agent
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-12 gap-6 h-[480px]">
                                    <div className="col-span-3 space-y-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-5">Active Agents</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                                        <span className="material-icons text-primary text-sm">smart_toy</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold">Analyst Alpha</div>
                                                        <div className="text-[9px] text-emerald-400 font-medium">Processing Data...</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                        <span className="material-icons text-purple-400 text-sm">auto_awesome</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-bold">Creative Echo</div>
                                                        <div className="text-[9px] text-slate-500">Waiting for input</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-5">Team Feed</h4>
                                            <div className="space-y-4">
                                                <div className="flex gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                                                    <p className="text-[10px] text-slate-400 leading-normal"><strong>Agent Alpha</strong> generated 14 test cases for <u>checkout.js</u></p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5"></div>
                                                    <p className="text-[10px] text-slate-400 leading-normal"><strong>Sarah</strong> reviewed pull request #402</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-9 grid grid-cols-3 gap-5">
                                        <div className="space-y-4">
                                            <h3 className="text-[10px] font-bold text-slate-500 flex items-center gap-2 px-1">
                                                BACKLOG <span className="bg-white/5 px-2 py-0.5 rounded-full text-slate-400">4</span>
                                            </h3>
                                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-[10px] font-bold text-slate-600">#401</span>
                                                    <span className="material-icons text-sm text-slate-700">more_horiz</span>
                                                </div>
                                                <div className="text-xs font-bold leading-relaxed">Define API Endpoints for Auth</div>
                                                <div className="flex items-center gap-2 pt-2">
                                                    <img alt="Avatar" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqD0cxex0YGTQWW3WqcscIhK8B0HRZWH9qv5f5ZFUNa2e2jBWCDCI4MHBSmMDDdBOJgFUIgsuaUd5BXkcoFxJHotJ2PShkWZE7T3_EAM8PUCD7J8-zI4YeMXWmT_NSrQyBQ5_xHZYjlB9XeJKFj9YuWkdGvM22iZuZsZAaACMgjxTEmsyO3s8_tppzCqIXUV4eXxoPCtaz4M14HUEhm2VrNTRvKQU3MjengZHRVn475WRRUxJJga-7TrCA-VyzokEBgdnSI2c_zGY" />
                                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold text-primary">A</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-[10px] font-bold text-slate-500 flex items-center gap-2 px-1">
                                                IN PROGRESS <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full">2</span>
                                            </h3>
                                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl space-y-3 relative">
                                                <div className="absolute top-4 right-4">
                                                    <span className="material-icons text-primary animate-pulse text-xs">bolt</span>
                                                </div>
                                                <div className="text-[9px] font-bold text-primary uppercase tracking-tight">AI Working</div>
                                                <div className="text-xs font-bold leading-relaxed">Researching Competitor Pricing Models</div>
                                                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-4">
                                                    <div className="bg-primary h-full w-2/3"></div>
                                                </div>
                                                <div className="text-[9px] text-slate-500 italic">Agent Analyst is crawling 12 sites...</div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-[10px] font-bold text-slate-500 flex items-center gap-2 px-1">
                                                REVIEW <span className="bg-white/5 px-2 py-0.5 rounded-full text-slate-400">1</span>
                                            </h3>
                                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-3">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-[10px] font-bold text-slate-600">#388</span>
                                                    <span className="material-icons text-sm text-emerald-500">check_circle</span>
                                                </div>
                                                <div className="text-xs font-bold leading-relaxed">Landing Page Hero Copy</div>
                                                <div className="p-3 bg-[#0a0c16] rounded-lg text-[10px] text-slate-400 border border-white/5 leading-relaxed">
                                                    "Where Human Ingenuity Meets..."
                                                </div>
                                                <div className="flex items-center gap-2 pt-2">
                                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[9px] font-bold text-purple-400">E</div>
                                                    <span className="text-[10px] text-slate-500 font-medium">Pending review by Sarah</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" viewBox="0 0 1000 600">
                                <path d="M 320 200 Q 500 350 720 220" fill="none" stroke="url(#lineGradient)" strokeDasharray="8,8" strokeWidth="2.5"></path>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#2b4bee', stopOpacity: 1 }}></stop>
                                        <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }}></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">TRUSTED BY TEAMS AT</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">Rutgers</span>
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">UMD</span>
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">JPMC</span>
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">Rider</span>
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">Arcadia</span>
                            <span className="text-xl font-bold font-display tracking-tight text-slate-300">Miami U</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Feature/Benefits Section from the design usually follows, but the prompt only asked for "Hero".
          However, the provided HTML also included a features section at the bottom (bg-[#0a0c16] py-32).
          Let's include that too as it's part of the 'Hero design' file I downloaded.
          Or maybe I should save it as a separate component?
          The user asked "Should I update your local Hero component... to match... Stitch".
          I'll include it here for completeness as it was in the HTML file, 
          but technically "Hero" implies top section. 
          Given it's a "Showcase Landing Page Hero" project, it might just be the top.
          But the file `hero_design.html` has a <section> after <main>. 
          I will keep just the <main> part as the "Hero" component to keep it modular.
          The user can ask for the features section separately if they want, 
          or better yet, I can add it if they strictly want the "Showcase" design.
          Actually, I'll add the section too, as it looks like key value props.
       */}
            <section className="bg-[#0a0c16] py-32 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="group">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                <span className="material-icons text-xl">sync_alt</span>
                            </div>
                            <h3 className="text-xl font-bold mb-5 tracking-tight">Autonomous Sync</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Agents automatically update your project state based on real-time conversations and code changes.</p>
                        </div>
                        <div className="group">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
                                <span className="material-icons text-xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold mb-5 tracking-tight">Contextual Intelligence</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Your agents learn from your team’s past decisions, ensuring every output aligns with your unique style.</p>
                        </div>
                        <div className="group">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300">
                                <span className="material-icons text-xl">security</span>
                            </div>
                            <h3 className="text-xl font-bold mb-5 tracking-tight">Enterprise Privacy</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Military-grade encryption and SOC2 compliance. Your proprietary data never leaves your workspace.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
