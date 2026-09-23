import Image from "next/image";
import Link from "next/link";

const CALENDLY_URL = "https://cal.com/martino-volcy-phwgox/thytus-demo";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100/80 bg-slate-50 py-24 dark:border-dark-border dark:bg-dark-base">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 text-center lg:text-left lg:pr-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[2.5rem] xl:text-5xl">
              <span className="block text-balance">Do the work you are good at.</span>
              <span className="mt-2 block text-balance text-slate-700 dark:text-slate-200">Let Thytus handle the rest.</span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-none bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto md:text-[15px]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] min-h-0 w-full max-w-lg shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/30 dark:border-dark-border dark:shadow-black/40 lg:mx-0 lg:max-w-none">
            <Image
              src="/business-group-picture.png"
              alt="Two professional technicians smiling beside their equipped work van"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

