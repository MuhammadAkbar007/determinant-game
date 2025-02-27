export default function GradientBackground() {
    return (
        <div className="fixed inset-0 min-h-screen w-full">
            <div
                className="absolute left-0 top-0 
                h-[70vh] w-[70vh] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] 
                bg-purple-500/40 blur-[80px] sm:blur-[100px] 
                -translate-x-1/3 -translate-y-1/3 sm:translate-x-1/4 sm:translate-y-1/4"
            ></div>

            {/* Blue blob in top-right */}
            <div
                className="absolute right-0 top-0 
                h-[70vh] w-[70vh] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[700px] 
                bg-blue-500/40 blur-[80px] sm:blur-[100px] 
                translate-x-1/3 -translate-y-1/3 sm:translate-x-1/4 sm:translate-y-1/4"
            ></div>

            {/* Yellow blob at bottom */}
            <div
                className="absolute left-1/2 bottom-0 
                h-[70vh] w-[70vh] sm:h-[450px] sm:w-[500px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[700px] 
                bg-yellow-500/30 blur-[80px] sm:blur-[100px] 
                -translate-x-1/2 translate-y-1/3 sm:translate-y-1/4"
            ></div>
        </div>
    );
}
