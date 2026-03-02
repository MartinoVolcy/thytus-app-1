"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section className="py-24 bg-white dark:bg-dark-base" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">Scale with your <span className="text-gradient-blue">AI needs</span></h2>

                    {/* Monthly / Annual Toggle */}
                    <div className="inline-flex items-center gap-4">
                        <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isAnnual ? "bg-primary" : "bg-gray-300"}`}
                            aria-label="Toggle annual pricing"
                        >
                            <span
                                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-0"}`}
                            />
                        </button>
                        <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>Annual</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {/* Free */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex flex-col shadow-sm hover:border-gray-300 dark:hover:border-sky-700/50 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Free</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 h-10">For quick brainstorming sessions.</p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">Free</span>
                            </div>
                            <div className="h-8" />
                        </div>
                        <Link href="https://showcase.thytus.com/v1/auth/signin" className="w-full py-2.5 bg-gray-100 dark:bg-dark-elevated hover:bg-gray-200 dark:hover:bg-dark-border text-slate-900 dark:text-slate-200 rounded-lg font-bold text-sm transition-colors mb-6 block text-center">Start with Free</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>No agent mode</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Basic models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>1 AI identity (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>3 Image Generations requests per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>6 Hour Session length</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>20K Daily Token Usage Limit</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>600K Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 1 File per Session/Activity</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>5 MB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10 Max Saved Activities</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10 Max Saved Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 5 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 1 Concurrent Session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload Websites</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload files from local device, Google Drive, Dropbox</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Limited chat and file Context</span></li>
                        </ul>
                    </div>

                    {/* Pro */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border-2 border-primary relative flex flex-col shadow-xl shadow-primary/15 dark:shadow-primary/20 transform md:-translate-y-4 z-10">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap border-[3px] border-white dark:border-dark-base shadow-sm text-center">
                            MOST<br />POPULAR
                        </div>
                        <div className="mb-6 mt-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pro</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 h-10">For Professionals & Educators ready to increase productivity</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? "25" : "30"}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/month</span>
                            </div>
                            <div className="h-8">
                                {isAnnual && (
                                    <>
                                        <div className="text-[10px] text-slate-500">Charged $300 Annually</div>
                                        <div className="text-[10px] font-bold text-green-600">17% savings</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <Link href="https://showcase.thytus.com/v1/auth/signin" className="w-full py-2.5 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold text-sm transition-colors mb-6 shadow-lg shadow-primary/25 dark:shadow-primary/40 block text-center">Start with Pro</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>50 agent calls/month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access To Advanced models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to reasoning</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Session canvas</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10 AI Identities (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>50 Image Generation requests per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>5 AI Podcasts per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>7 day Session Length</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Polls in Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Daily Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>3M Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 10 Files per Session/Activity</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 MB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 MB Audio File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>25 MB Video File Upload [Beta]</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10 MB Image File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>500 Max Saved Activities</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 Max Saved Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 25 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 10 Concurrent Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload Websites</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload files from local device, Google Drive, Dropbox</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>50x chat and file Context than Free</span></li>
                        </ul>
                    </div>

                    {/* Ultra */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex flex-col shadow-sm hover:border-gray-300 dark:hover:border-sky-700/50 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ultra</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 h-10">For power users without a team structure</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? "250" : "300"}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/month</span>
                            </div>
                            <div className="h-8">
                                {isAnnual && (
                                    <>
                                        <div className="text-[10px] text-slate-500">Charged $3000 Annually</div>
                                        <div className="text-[10px] font-bold text-green-600">17% savings</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <Link href="https://showcase.thytus.com/v1/auth/signin" className="w-full py-2.5 bg-gray-100 dark:bg-dark-elevated hover:bg-gray-200 dark:hover:bg-dark-border text-slate-900 dark:text-slate-200 rounded-lg font-bold text-sm transition-colors mb-6 block text-center">Start with Ultra</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access To all models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to all features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10M Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>First day Access to new models and features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Improved Model Accuracy and Performance</span></li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex flex-col shadow-sm hover:border-gray-300 dark:hover:border-sky-700/50 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Business</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 h-10">For Teams & Departments ready to scale AI collaboration</p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? "50" : "70"}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/user/month</span>
                            </div>
                            <div className="h-8">
                                {isAnnual && (
                                    <>
                                        <div className="text-[10px] text-slate-500">Charged $600 Annually</div>
                                        <div className="text-[10px] font-bold text-green-600">29% savings</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <Link href="https://showcase.thytus.com/v1/help" className="w-full py-2.5 bg-gray-100 dark:bg-dark-elevated hover:bg-gray-200 dark:hover:bg-dark-border text-slate-900 dark:text-slate-200 rounded-lg font-bold text-sm transition-colors mb-6 block text-center">Contact Us</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>250 agent calls/month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access To Flagship models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Early Access to new models and features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Session canvas</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited AI Identities (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 Image Generation requests per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>20 AI Podcasts per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Session Length</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Polls in Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to Group Management (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Daily Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10M Free Monthly Tokens</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 20 Files per Session/Activity</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>1 GB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>1 GB Audio File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>100 MB Video File Upload [Beta]</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>15 MB Image File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>1000 Max Saved Activities</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>1000 Max Saved Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 100 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Up to 50 Concurrent Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload Websites</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Upload files from local device, Google Drive, Dropbox</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>24/7 Support</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>10x chat and file Context than Pro</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Video and Audio Context</span></li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex flex-col shadow-sm hover:border-gray-300 dark:hover:border-sky-700/50 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 h-10">For Institutions & Companies ready to lead with enterprise-grade AI solutions</p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
                            </div>
                            <div className="h-8" />
                        </div>
                        <Link href="https://showcase.thytus.com/v1/help" className="w-full py-2.5 bg-sky-100 dark:bg-dark-elevated hover:bg-sky-200 dark:hover:bg-dark-border text-slate-900 dark:text-slate-200 rounded-lg font-bold text-sm transition-colors mb-6 block text-center hover:scale-105">Contact Us</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access To all models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Access to all features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>First day Access to new models and features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Improved Model Accuracy and Performance</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Organizational wide context for Models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Enterprise Grade Security</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Dedicated Support Personal</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Increased Usages</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-primary shrink-0">check</span> <span>Volume Discounts</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
