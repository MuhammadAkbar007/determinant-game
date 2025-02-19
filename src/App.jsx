import { useState, useEffect } from "react";
import Matrix from "./components/Matrix";
import GradientBackground from "./components/GradientBackground";
import Header from "./components/Header";
import UserAnswer from "./components/UserAnswer";

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
            <GradientBackground />

            <div className="relative flex flex-col items-center justify-center p-4 text-white text-center">
                <Header level={level} tryCount={tryCount} />
                <Matrix matrix={matrix} />
                <UserAnswer
                    userAnswer={userAnswer}
                    setUserAnswer={setUserAnswer}
                />
            </div>
        </div>
    );
}
