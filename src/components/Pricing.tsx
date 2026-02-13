export default function Pricing() {
    return (
        <section className="py-24 bg-slate-50/50" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium mb-8 text-slate-900">Scale with your AI needs</h2>
                    <div className="inline-flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <button className="px-6 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold shadow-md transition-all">Monthly</button>
                        <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Yearly <span className="text-green-600 text-xs ml-1">-17%</span></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {/* Free */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col shadow-sm hover:border-slate-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Free</h3>
                            <p className="text-xs text-slate-500 mt-1 h-10">For quick brainstorming sessions.</p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900">$0</span>
                                <span className="text-sm text-slate-500">/mo</span>
                            </div>
                        </div>
                        <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-bold text-sm transition-colors mb-6">Start with Free</button>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to open source & Basic models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>3 Image Generations / month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>20K Daily Token Usage Limit</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 5 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 1 Concurrent Session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload from Drive & Dropbox</span></li>
                        </ul>
                    </div>

                    {/* Pro */}
                    <div className="p-6 rounded-3xl bg-white border-2 border-primary relative flex flex-col shadow-xl shadow-blue-900/5 transform md:-translate-y-4 z-10">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap border-[3px] border-slate-50 shadow-sm text-center">
                            MOST<br />POPULAR
                        </div>
                        <div className="mb-6 mt-4">
                            <h3 className="text-xl font-bold text-slate-900">Pro</h3>
                            <p className="text-xs text-slate-500 mt-1 h-10">For professionals ready to increase productivity.</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900">$25</span>
                                <span className="text-sm text-slate-500">/mo</span>
                            </div>
                            <div className="text-[10px] font-bold text-green-600">Save 17% billed annually</div>
                            <div className="text-[10px] text-slate-400">Billed $300 yearly</div>
                        </div>
                        <button className="w-full py-2.5 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold text-sm transition-colors mb-6 shadow-lg shadow-primary/25">Start with Pro</button>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>50 Agent calls / month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Advanced models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Daily Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>5 AI Podcasts / month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 MB File Uploads</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 25 Users per session</span></li>
                        </ul>
                    </div>

                    {/* Ultra */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col shadow-sm hover:border-slate-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Ultra</h3>
                            <p className="text-xs text-slate-500 mt-1 h-10">For power users who need raw performance.</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900">$250</span>
                                <span className="text-sm text-slate-500">/mo</span>
                            </div>
                            <div className="text-[10px] font-bold text-green-600">Save 17% billed annually</div>
                            <div className="text-[10px] text-slate-400">Billed $3000 yearly</div>
                        </div>
                        <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-bold text-sm transition-colors mb-6">Start with Ultra</button>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to all models (incl. Beta)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10 Million Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>First day access to new features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Maximum model accuracy</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Priority processing</span></li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col shadow-sm hover:border-slate-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Business</h3>
                            <p className="text-xs text-slate-500 mt-1 h-10">For teams ready to scale AI collaboration.</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900">$50</span>
                                <span className="text-sm text-slate-500">/user/mo</span>
                            </div>
                            <div className="text-[10px] font-bold text-slate-900">5 seats minimum</div>
                            <div className="text-[10px] font-bold text-green-600">Save 29% billed annually</div>
                            <div className="text-[10px] text-slate-400">Billed $3000 yearly</div>
                        </div>
                        <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-bold text-sm transition-colors mb-6">Contact Us</button>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>250 Agent calls / month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Flagship models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10M Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Session Length</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 100 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>24/7 Priority Support</span></li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col shadow-sm hover:border-slate-300 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                            <p className="text-xs text-slate-500 mt-1 h-10">For institutions requiring security & scale.</p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900">Custom</span>
                            </div>
                        </div>
                        <button className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-bold text-sm transition-colors mb-6">Contact Us</button>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Dedicated Infrastructure</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Organizational wide context</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Enterprise Grade Security</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Dedicated Support Personnel</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Volume Discounts</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
