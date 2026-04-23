"use client";

import { useState } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://cal.com/martino-volcy-phwgox/thytus-demo";

const calendlyLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

const ZERO_DATA_RETENTION_TOOLTIP =
    "Your data is not stored or used by AI beyond the immediate processing of your requests, ensuring maximum privacy and security for your interactions.";

function ZeroDataRetentionLabel() {
    return (
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <span>Zero Data Retention</span>
            <span
                tabIndex={0}
                aria-label={ZERO_DATA_RETENTION_TOOLTIP}
                className="relative inline-flex shrink-0 rounded-none text-slate-400 dark:text-slate-500 outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 group/tooltip"
            >
                <span className="material-symbols-outlined text-[16px] cursor-help leading-none select-none" aria-hidden>
                    help
                </span>
                <span
                    role="tooltip"
                    className="pointer-events-none invisible opacity-0 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-focus-visible/tooltip:visible group-focus-visible/tooltip:opacity-100 absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)] z-50 w-[min(18rem,calc(100vw-2rem))] px-2.5 py-2 rounded-lg text-[11px] leading-snug font-medium text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-lg border border-slate-700/50 dark:border-slate-300 text-left whitespace-normal transition-opacity duration-150"
                >
                    {ZERO_DATA_RETENTION_TOOLTIP}
                </span>
            </span>
        </span>
    );
}

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section className="py-24 bg-slate-50 dark:bg-dark-base border-t border-slate-100/80 dark:border-dark-border" id="pricing">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-slate-900 dark:text-white tracking-tight">
                        Dont let the desk work slow you down
                    </h2>
                    {/* <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
                        Pick a plan that matches how many customers you run and how much you want Thytus to handle for
                        you. Book a quick call to get started.
                    </p> */}

                    {/* Monthly / Annual Toggle */}
                    <div className="inline-flex items-center gap-4">
                        <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-500"}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-14 h-8 rounded-none transition-colors duration-300 ${
                                isAnnual ? "bg-slate-900 dark:bg-slate-100" : "bg-slate-300 dark:bg-slate-700"
                            }`}
                            aria-label="Toggle annual pricing"
                        >
                            <span
                                className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-none shadow-md transition-transform duration-300 ${
                                    isAnnual ? "translate-x-6" : "translate-x-0"
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-500"}`}>Annual</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {/* Free */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border flex flex-col shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Free</h3>
                            <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                For owners just getting started.
                            </p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">Free</span>
                            </div>
                            <div className="h-8" >
                                <div className="text-[10px] text-slate-500">Forever</div>
                            </div>
                        </div>
                        <Link href={CALENDLY_URL} {...calendlyLinkProps} className="mb-6 block w-full rounded-none bg-slate-900/5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/10 dark:bg-dark-elevated dark:text-slate-200 dark:hover:bg-dark-border">Start with Free</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <ZeroDataRetentionLabel /></li>
                        
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>3 Agent Calls/Month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to Basic & Open Source models</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>1 AI identity (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>3 Image Generations requests per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>6 Hour Session length</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>100K Daily Credit Limit</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>1M Free Monthly Credits</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 10 Customers</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 1 File per Customer</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>10 MB Max File Upload</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>10 Max Saved Activities</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>10 Max Saved Sessions</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 5 Users per session</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Email Support</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Outbound - (Ads, Calling, Messaging, Emailling, Social Media, Calendar)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Scheduled Task</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Custom Agents</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Agent Skills</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Advance Analytics</span></li>
                            
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Upload Websites</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Upload files from local device, Google Drive, Dropbox, and the Internet</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Limited chat and file Context</span></li> */}
                        </ul>
                    </div>

                    {/* Pro */}
                    <div className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 dark:border-dark-border dark:bg-dark-card dark:hover:border-slate-600 dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pro</h3>
                            <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                For owners who are scaling.
                            </p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? "50" : "60"}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/month</span>
                            </div>
                            <div className="h-8">
                                {isAnnual && (
                                    <>
                                        <div className="text-[10px] text-slate-500">Charged $600 Annually</div>
                                        <div className="text-[10px] font-bold text-green-600">17% savings</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <Link href={CALENDLY_URL} {...calendlyLinkProps} className="mb-6 block w-full rounded-none bg-slate-900/5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/10 dark:bg-dark-elevated dark:text-slate-200 dark:hover:bg-dark-border">Start with Pro</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <ZeroDataRetentionLabel /></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>50 agent calls/month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access To Advanced models</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to reasoning</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Session canvas</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>10 AI Identities (coming soon)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>50 Image Generation requests per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>5 AI Podcasts per month</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>7 day Session Length</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to Polls in Sessions</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>No Daily Credit Limit</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>3M Free Monthly Credits</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 100 Customers</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 10 Files per Customer</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>100 MB Max File Upload</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>100 MB Audio File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>25 MB Video File Upload [Beta]</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>10 MB Image File Upload</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>500 Max Saved Activities</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>100 Max Saved Sessions</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 25 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 10 Concurrent Sessions</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Email Support</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Outbound - (Ads, Calling, Messaging, Emailling, Social Media, Calendar)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Scheduled Task</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Custom Agents</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Agent Skills</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Advance Analytics</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Upload Websites</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Upload files from local device, Google Drive, Dropbox Upload files from local device, Google Drive, Dropbox, and the Internet</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>50x chat and file Context than Free</span></li> */}
                        </ul>
                    </div>

                    {/* Ultra */}
                    <div className="relative z-10 flex flex-col rounded-3xl border-2 border-slate-900 bg-white p-6 shadow-xl shadow-slate-900/15 transform dark:border-slate-100 dark:bg-dark-card dark:shadow-slate-200/15 md:-translate-y-4">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-none border-[3px] border-white bg-slate-900 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-white shadow-sm dark:border-dark-base dark:bg-slate-100 dark:text-slate-900">
                            MOST<br />POPULAR
                        </div>
                        <div className="mb-6 mt-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ultra</h3>
                            <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                For owners at full throttle.
                            </p>
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
                        <Link href={CALENDLY_URL} {...calendlyLinkProps} className="mb-6 block w-full rounded-none bg-slate-900 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/25 dark:hover:bg-slate-200">Start with Ultra</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <ZeroDataRetentionLabel /></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access To All models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Improved Model Accuracy and Performance</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>No Daily Credit Limit</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to all features</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>5M Free Monthly Credits</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 1000 Customers</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 20 Files per Customer</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>500 MB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Email Support</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Agent Outbound - (Calling, Messaging, Emailling, Social Media, Calendar)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Scheduled Task</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">Check</span> <span>Custom Agents</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">Check</span> <span>Agent Skills</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400 shrink-0">X</span> <span>Advance Analytics</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>First day Access to new models and features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Improved Model Accuracy and Performance</span></li> */}
                        </ul>
                    </div>

                    {/* Business */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border flex flex-col shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Business</h3>
                            <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                For owners with a team of five or more.
                            </p>
                            <div className="mt-4 mb-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">${isAnnual ? "100" : "120"}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">/user/month</span>
                            </div>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">5 users minimum</p>
                            <div className="min-h-8 mt-1">
                                {isAnnual && (
                                    <>
                                        <div className="text-[10px] text-slate-500">Charged $6000 Annually per user</div>
                                        <div className="text-[10px] font-bold text-green-600">29% savings</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <Link href={CALENDLY_URL} {...calendlyLinkProps} className="mb-6 block w-full rounded-none bg-gray-100 py-2.5 text-center text-sm font-bold text-slate-900 transition-colors hover:bg-gray-200 dark:bg-dark-elevated dark:text-slate-200 dark:hover:bg-dark-border">Contact Us</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <ZeroDataRetentionLabel /></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Unlimited Agent calls</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access To Flagship models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Improved Model Accuracy and Performance</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Unlimited Daily Tokens</span></li> */}
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to all features</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>No Daily Credit Limit</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>20M Free Monthly Credits per User</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Unlimited Customers</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Unlimited Files per Customer</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>1 GB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Dedicated Support Personal</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Agent Outbound - (Calling, Messaging, Emailling, Social Media, Calendar)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Scheduled Task</span></li>


                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>20M Free Monthly Tokens per User</span></li>
                            
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 20 Files per Session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>1 GB Max File Upload</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 100 Users per session</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Up to 50 Concurrent Sessions</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>24/7 Support</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Agent Outbound - (Calling, Messaging, Emailling, Social Media, Calendar)</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Scheduled Task</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">Check</span> <span>Custom Agents</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">Check</span> <span>Agent Skills</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">Check</span> <span>Advance Analytics</span></li>
                        </ul>
                    </div>

                    {/* Enterprise */}
                    <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border flex flex-col shadow-sm hover:border-gray-300 dark:hover:border-sky-700/50 transition-colors dark-glow">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise</h3>
                            <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">
                                For owners who run large-scale operations.
                            </p>
                            <div className="mt-4 mb-2">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
                            </div>
                            <div className="h-8" />
                        </div>
                        <Link href={CALENDLY_URL} {...calendlyLinkProps} className="mb-6 block w-full rounded-none bg-slate-900/5 py-2.5 text-center text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900/10 dark:bg-dark-elevated dark:text-slate-200 dark:hover:bg-dark-border">Contact Us</Link>
                        <ul className="text-[13px] space-y-3 flex-1 text-slate-600 dark:text-slate-400">
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <ZeroDataRetentionLabel /></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Dedicated Cloud Infrastructure</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access To all models</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Access to all features</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>First day Access to new features</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Improved Accuracy and Performance</span></li>
                            {/* <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Company wide context for Models</span></li> */}
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Enterprise Grade Security</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Dedicated Support Personal</span></li>
                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[18px] text-blue-600 dark:text-blue-400 shrink-0">check</span> <span>Volume Discounts</span></li>
                        </ul>
                    </div>
                </div>

                {/* Enterprise / Business CTA - full width */}
                {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border w-full">
                    <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                        Interested in Enterprise or Business?
                    </p>
                    <Link
                        href="/enterprise"
                        className="shrink-0 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-none font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                    >
                        Learn more
                    </Link>
                </div> */}
            </div>
        </section>
    );
}
