export default function GradientBackground() {
    return (
        <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-[700px] w-[700px] bg-purple-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute right-0 top-0 h-[600px] w-[700px] bg-blue-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute left-170 bottom-0 h-[600px] w-[700px] bg-yellow-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
        </div>
    );
}
