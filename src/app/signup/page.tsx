
"use client";

import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
    return (
        <div className="min-h-screen bg-[#0a0c16] flex flex-col justify-center items-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0c16] to-[#0a0c16] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-6">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <Image src="/logo.png" alt="Thytus Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <span className="font-display font-bold text-3xl tracking-tight text-white">Thytus</span>
                        </div>
                    </Link>
                    <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
                    <p className="text-slate-400">Join thousands of teams building with Thytus</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="Jane"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                placeholder="Create a password"
                            />
                            <p className="text-xs text-slate-500 mt-2">Must be at least 8 characters</p>
                        </div>

                        <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group">
                            Get Started
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 transition-colors text-sm font-medium text-slate-300 mb-3">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
                            </svg>
                            Sign up with Google
                        </button>
                        <p className="text-xs text-center text-slate-500">By signing up, you agree to our <Link href="#" className="text-slate-400 hover:text-white underline">Terms of Service</Link> and <Link href="#" className="text-slate-400 hover:text-white underline">Privacy Policy</Link>.</p>
                    </div>
                </div>

                <p className="text-center text-slate-500 mt-8">
                    Already have an account? <Link href="/login" className="text-primary font-medium hover:text-blue-400 transition-colors">Log in</Link>
                </p>
            </div>
        </div>
    );
}
