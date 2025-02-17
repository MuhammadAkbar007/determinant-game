export default function HeroSection() {
    return (
        <div className="relative min-h-[932px] w-full overflow-hidden bg-black">
            {/* Gradient background */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 bg-purple-500/30 blur-[100px]" />
                <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 bg-blue-500/30 blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative flex min-h-[400px] items-center justify-center">
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="rounded bg-sky-400/90 p-2">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="h-8 w-8 text-black"
                            strokeWidth="2"
                        >
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <path d="M4 9h16" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Text */}
                        <h1 className="text-4xl font-semibold text-white">
                            Bismillah
                        </h1>

                        {/* Version badge */}
                        <div className="rounded-full bg-slate-800/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
                            v2.0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
