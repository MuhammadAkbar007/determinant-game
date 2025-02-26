import { useState, useEffect } from "react";
import Matrix from "./components/Matrix";
import GradientBackground from "./components/GradientBackground";
import Header from "./components/Header";
import UserAnswer from "./components/UserAnswer";
import MessageComponent from "./components/MessageComponent.jsx";
import { generateDeterminantProblem } from "./utils/matrixUtils.js";
import { toast } from "react-toastify";

export default function DeterminantGame() {
    const [level, setLevel] = useState(1);
    const [tryCount, setTryCount] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [matrix, setMatrix] = useState([]);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        const problem = generateDeterminantProblem(level);
        setMatrix(problem.matrix);
        setCorrectAnswer(problem.answer.toString());
        setUserAnswer("");
    }, [level]);

    function handleSubmit() {
        if (userAnswer == correctAnswer) {
            setLevel((prev) => prev + 1);
            setTryCount(0);
            toast.success(
                <>
                    ✅ Javobingiz to`g`ri! <br /> Siz {level + 1}-bosqichga
                    o`tdingiz
                </>,
            );
        } else {
            setTryCount((prev) => prev + 1);

            if (tryCount + 1 >= 3) {
                toast.error(
                    <>
                        ❌ Bergan javoblaringiz noto`g`ri! <br />
                        Sizga ushbu mavzuni qayta o`rganishni tavsiya qilaman!
                    </>,
                );
            } else {
                toast.error(
                    <>
                        ❌ Javobingiz noto`g`ri!
                        <br />
                        Sizda yana {3 - tryCount} ta urinish qoldi
                    </>,
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
                    handleSubmit={handleSubmit}
                />
                {/* <MessageComponent message={"Bismillah"} /> */}
            </div>
        </div>
    );
}
