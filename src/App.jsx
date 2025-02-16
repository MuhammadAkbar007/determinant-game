import { useState, useEffect } from "react";

export default function DeterminantGame() {
    const [level, setLevel] = useState(1);
    const [tries, setTries] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Load theme from localStorage
        setLevel(1);
        setTries(0);
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", darkMode ? "light" : "dark");
    };

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-700 to-blue-900 dark:from-gray-900 dark:via-purple-700 dark:to-indigo-800 opacity-90 blur-2xl"></div>

            {/* Soft Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 dark:opacity-30 pointer-events-none"></div>

            {/* Centered Large Symbol */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600 text-9xl font-bold opacity-10 dark:opacity-20 pointer-events-none">
                |A|
            </div>

            {/* Blurred Glass Effect Container */}
            <div className="backdrop-blur-2xl bg-white/30 dark:bg-gray-900/40 p-8 rounded-lg shadow-2xl relative z-10 w-full max-w-lg text-center border border-white/20 dark:border-gray-700/20">
                <button
                    onClick={toggleTheme}
                    className="absolute top-4 right-4 p-3 bg-gray-300 rounded-full shadow-lg dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                >
                    {darkMode ? "🌙" : "☀️"}
                </button>

                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Determinantlarni hisoblashni o`rganamiz
                </h1>
                <h2 className="text-xl mt-3 font-semibold italic">
                    INTERFAOL O`YINGA XUSH KELIBSIZ!!!
                </h2>

                <div className="mt-6 text-2xl font-bold border-b-2 border-blue-500 pb-2 px-4">
                    {level} - bosqich
                </div>
                <p className="mt-5 text-lg bg-blue-100 text-blue-900 p-3 rounded-lg dark:bg-blue-800 dark:text-blue-200 shadow-md">
                    {level === 1
                        ? "Ikkinchi tartibli determinantni hisoblang:"
                        : level === 2
                          ? "Uchinchi tartibli determinantni hisoblang:"
                          : "To'rtinchi tartibli determinantni hisoblang:"}
                </p>

                <div className="mt-6 text-lg font-medium px-4 py-2 bg-yellow-200 text-yellow-800 rounded-lg dark:bg-yellow-700 dark:text-yellow-200 shadow-lg">
                    {tries + 1} - urinish
                </div>

                <div className="mt-6 p-6 border rounded-lg bg-white/40 dark:bg-gray-800/40 shadow-lg w-80 text-center backdrop-blur-md">
                    <p className="text-lg font-semibold mb-4">
                        Determinant: (random values here) = ?
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                        <label className="text-lg font-medium">Javob:</label>
                        <input
                            type="text"
                            className="p-3 border rounded-md dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Javobingizni kiriting..."
                        />
                    </div>
                </div>

                <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Tekshirish
                </button>
            </div>
        </div>
    );
}
