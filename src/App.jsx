import { useState, useEffect } from "react";
import Matrix from "./components/Matrix";
import GradientBackground from "./components/GradientBackground";
import Header from "./components/Header";
import UserAnswer from "./components/UserAnswer";
import { generateDeterminantProblem } from "./utils/matrixUtils.js";
import { toast } from "react-toastify";
import Explanation from "./components/Explanation.jsx";
import Continue from "./components/Continue.jsx";

export default function App() {
    const [matrix, setMatrix] = useState([]);
    const [level, setLevel] = useState(1);
    const [tryCount, setTryCount] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [isExplained, setExplained] = useState(false);
    const [isTimedOut, setIsTimedOut] = useState(false);
    const [isContinued, setIsContinued] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timeoutEndTime, setTimeoutEndTime] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState("");
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        const problem = generateDeterminantProblem(level);

        setMatrix(problem.matrix);
        setCorrectAnswer(problem.answer.toString());
        setUserAnswer("");
        setExplained(false);
    }, [level]);

    useEffect(() => {
        let timerInterval = null;

        if (isTimedOut && timeoutEndTime) {
            setTimeRemaining(formatTimeRemaining(timeoutEndTime));

            timerInterval = setInterval(() => {
                const now = new Date();

                if (timeoutEndTime <= now) {
                    const problem = generateDeterminantProblem(level);

                    setMatrix(problem.matrix);
                    setCorrectAnswer(problem.answer.toString());
                    setUserAnswer("");
                    setExplained(false);

                    clearInterval(timerInterval);
                    setIsTimedOut(false);
                    setTimeoutEndTime(null);
                    setTryCount(0);
                    setTimeRemaining("");

                    toast.info(
                        "⏰ Kutish vaqti tugadi! Qaytadan urinib ko'ring",
                    );
                } else {
                    setTimeRemaining(formatTimeRemaining(timeoutEndTime));
                }
            }, 1000);
        }

        return () => {
            if (timerInterval) clearInterval(timerInterval);
        };
    }, [isTimedOut, timeoutEndTime]);

    function handleContinue() {
        setIsContinued(false);
        setLevel((prev) => prev + 1);
        setTryCount(0);
        toast.info(`${level + 1}-bosqichga o'tdingiz`);
    }

    function handleSubmit() {
        if (userAnswer == correctAnswer) {
            if (level < 3) {
                setIsContinued(true);
                toast.success("✅ Javobingiz to`g`ri!");
            } else {
                setIsFinished(true);
                toast.success(
                    "🎉 Tabriklayman! Siz barcha bosqichlarni muvaffaqiyatli yakunladingiz!",
                );
            }

            setExplained(true);
        } else {
            setTryCount((prev) => prev + 1);

            if (tryCount + 1 == 3) {
                setTryCount(0);

                const endTime = new Date();
                endTime.setHours(endTime.getHours() + 1);
                // endTime.setSeconds(endTime.getSeconds() + 7);

                setTimeoutEndTime(endTime);
                setIsTimedOut(true);

                toast.error(
                    <>
                        ❌ Bergan javoblaringiz noto`g`ri! <br />
                        Sizga ushbu mavzuni qayta o`rganishni tavsiya qilaman!
                    </>,
                );

                setExplained(true);
            } else {
                toast.error(
                    <>
                        ❌ Javobingiz noto`g`ri!
                        <br />
                        Sizda yana {2 - tryCount} ta urinish qoldi
                    </>,
                );
            }
        }
    }

    function formatTimeRemaining(endTime) {
        if (!endTime) return "";

        const now = new Date();
        const diffMs = endTime - now;

        if (diffMs <= 0) return "0:00:00";

        const diffSec = Math.floor(diffMs / 1000);
        const hours = Math.floor(diffSec / 3600);
        const minutes = Math.floor((diffSec % 3600) / 60);
        const seconds = diffSec % 60;

        return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black p-8">
            <GradientBackground />

            <div className="relative flex flex-col items-center justify-center p-4 text-white text-center">
                <p className="mb-4 text-yellow-400 text-lg md:text-xl">
                    <i>Tuzuvchi: A. Rahmanov</i>
                </p>

                <Header level={level} tryCount={tryCount} />

                <Matrix matrix={matrix} />

                {isTimedOut ? (
                    <div className="backdrop-blur-md mt-10 p-4 bg-white/20 shadow-xl rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-red-600">
                            ⏰ Kutish vaqti
                        </h2>

                        <p className="mt-2 font-bold">
                            Qayta urinish uchun{" "}
                            <span className="font-semibold text-yellow-500">
                                {timeRemaining}{" "}
                            </span>
                            kutishingiz kerak!
                        </p>
                    </div>
                ) : (
                    <>
                        <UserAnswer
                            userAnswer={userAnswer}
                            setUserAnswer={setUserAnswer}
                            handleSubmit={handleSubmit}
                        />
                    </>
                )}

                {isContinued && <Continue handleContinue={handleContinue} />}

                {isFinished && (
                    <div className="text-center backdrop-blur-md bg-white/20 p-10 rounded-lg shadow-lg my-8 w-full max-w-4xl font-bold text-2xl">
                        🎉 Tabriklayman! Siz barcha bosqichlarni muvaffaqiyatli
                        yakunladingiz! 👏
                    </div>
                )}

                {isExplained && (
                    <Explanation
                        matrix={matrix}
                        correctAnswer={correctAnswer}
                    />
                )}
            </div>
        </div>
    );
}
