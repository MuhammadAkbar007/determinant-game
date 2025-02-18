import { useState, useEffect } from "react";
import Matrix from "./components/Matrix";

export default function DeterminantGame() {
    const [level, setLevel] = useState(1);
    const [tryCount, setTryCount] = useState(0);
    const [matrix, setMatrix] = useState([]);
    const [userAnswer, setUserAnswer] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        generateMatrix();
    }, [level]);

    function generateMatrix() {
        let size = level + 1;
        let newMatrix = Array.from(
            { length: size * size },
            () => Math.floor(Math.random() * 199) - 99,
        );
        setMatrix(newMatrix);
    }

    function handleSubmit() {
        let correctAnswer = "?";
        if (userAnswer == correctAnswer) {
            setMessage("✅ Javobingiz to'g'ri!");
            setLevel((prev) => prev + 1);
            setTryCount(0);
        } else {
            setMessage("❌ Javobingiz noto'g'ri!");
            setTryCount((prev) => prev + 1);
            if (tryCount + 1 >= 3) {
                setMessage(
                    "Sizga ushbu mavzuni qayta o'rganishni tavsiya qilaman!",
                );
            }
        }
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black p-8">
            {/* gradient background */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[700px] w-[700px] bg-purple-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute right-0 top-0 h-[600px] w-[700px] bg-blue-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute left-170 bottom-0 h-[600px] w-[700px] bg-yellow-500/30 blur-[100px] translate-x-1/4 translate-y-1/4"></div>
            </div>

            {/* content */}
            <div className="relative flex flex-col items-center justify-center p-4 text-white text-center">
                {/* welcome message */}
                <h1 className="text-5xl font-bold">
                    Determinantlarni hisoblashni o`rganamiz
                </h1>
                <h1 className="text-3xl font-semibold">
                    INTERFAOL O`YINGA XUSH KELIBSIZ!!!
                </h1>

                <div className="flex justify-between w-full px-100 mt-10">
                    {/* level */}
                    <div className="mt-5 py-5 px-10 text-2xl font-bold rounded-xl shadow-md shadow-purple-50 bg-blue-500/50">
                        {level} - bosqich
                    </div>

                    {/* game command */}
                    <h1 className="mt-10 text-2xl font-semibold">
                        {level + 1} - tartibli determinantni hisoblang 👇
                    </h1>

                    {/* try count */}
                    <div className="mt-5 py-5 px-10 text-2xl font-bold rounded-xl shadow-md shadow-blue-50 bg-purple-500/50">
                        {tryCount + 1} - urinish
                    </div>
                </div>

                <Matrix matrix={matrix} />
            </div>
        </div>
    );
}
