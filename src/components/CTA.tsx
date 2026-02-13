import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 relative bg-slate-900 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-medium mb-6 text-white font-display">Give your team the ability to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">start succeeding with AI.</span></h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">Right now, everyone on your project is using AI in their own private tab, with separate context. Thytus unifies them. Bring every human and every AI agent into one shared workspace so knowledge is never lost or misunderstood.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <Link href="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-md hover:scale-105 transition-transform shadow-2xl hover:bg-blue-50">Get Started for Free</Link>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-md hover:bg-white/20 transition-colors backdrop-blur-sm">Book a Demo</button>
                </div>
            </div>
            <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute -top-48 -right-24 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        </section>
    );
}
