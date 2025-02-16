import { useState } from "react";

const DeterminantGame = () => {
    // State variables
    const [level, setLevel] = useState(1);
    const [tries, setTries] = useState(1);
    const [matrix, setMatrix] = useState(generateMatrix(level));
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(
        calculateDeterminant(matrix),
    );
    const [darkMode, setDarkMode] = useState(true);

    // Generate a random matrix based on the level
    function generateMatrix(level) {
        const size = level === 1 ? 2 : level === 2 ? 3 : 4;
        return Array.from(
            { length: size },
            () => setCorrectAnswer(0),
            Array.from(
                { length: size },
                () => Math.floor(Math.random() * 199) - 99,
            ),
        );
    }

    // Calculate the determinant of a matrix
    function calculateDeterminant(matrix) {
        if (matrix.length === 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        }
        // Add logic for 3x3 and 4x4 matrices if needed
        return 0;
    }

    // Handle user answer submission
    const handleSubmit = () => {
        const userValue = parseFloat(userAnswer);
        if (userValue === correctAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            if (tries < 3) {
                setTries(tries + 1);
            }
        }
    };

    // Reset the game for the next level
    const nextLevel = () => {
        setLevel(level + 1);
        setTries(1);
        setMatrix(generateMatrix(level + 1));
        setUserAnswer("");
        setIsCorrect(null);
    };

    // Reset the game for retry
    const retryLevel = () => {
        setTries(1);
        setMatrix(generateMatrix(level));
        setUserAnswer("");
        setIsCorrect(null);
    };

    return (
        <div
            className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            <div className="container mx-auto p-4">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-purple-500">
                        Determinantlarni hisoblashni o`rganamiz
                    </h1>
                    <h2 className="text-xl text-teal-400">
                        INTERFAOL O`YINGA XUSH KELIBSIZ!!!
                    </h2>
                    <p className="text-lg text-gray-300">{level} - bosqich</p>
                </div>

                {/* Game Condition */}
                <p className="text-lg text-gray-300 mt-4">
                    {level === 1 &&
                        "Ikkinchi tartibli determinantni hisoblang:"}
                    {level === 2 &&
                        "Uchinchi tartibli determinantni hisoblang:"}
                    {level === 3 &&
                        "To'rtinchi tartibli determinantni hisoblang:"}
                </p>

                {/* Number of Tries */}
                <p className="text-lg text-gray-300 mt-2">{tries} - urinish</p>

                {/* Rendered Determinant */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {matrix.map((row, i) =>
                        row.map((num, j) => (
                            <div
                                key={`${i}-${j}`}
                                className="p-2 border border-gray-500 text-center"
                            >
                                {num}
                            </div>
                        )),
                    )}
                </div>

                {/* Answer Input and Feedback */}
                <div className="flex items-center gap-2 mt-4">
                    <p className="text-lg text-gray-300">Javob:</p>
                    <input
                        type="number"
                        className="p-2 border border-gray-500 rounded bg-transparent text-white"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-purple-500 text-white rounded"
                    >
                        Tekshirish
                    </button>
                </div>

                {/* Feedback Section */}
                {isCorrect !== null && (
                    <div className="mt-4">
                        {isCorrect ? (
                            <div>
                                <p className="text-lg text-green-400">
                                    Javobingiz to`g`ri:
                                </p>
                                <p className="text-gray-300">
                                    Tabriklayman, keyingi bosqichga o`tdingiz.
                                </p>
                                <button
                                    onClick={nextLevel}
                                    className="mt-2 px-4 py-2 bg-teal-400 text-white rounded"
                                >
                                    Davom etish
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-lg text-red-400">
                                    Javobingiz noto`g`ri:
                                </p>
                                <p className="text-gray-300">
                                    To`g`ri Javob: {correctAnswer}
                                </p>
                                {tries < 3 ? (
                                    <button
                                        onClick={retryLevel}
                                        className="mt-2 px-4 py-2 bg-purple-500 text-white rounded"
                                    >
                                        Qayta urinish
                                    </button>
                                ) : (
                                    <p className="text-gray-300">
                                        Sizga ushbu mavzuni qayta o`rganishni
                                        tavsiya qilaman!
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Dark/Light Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="fixed bottom-4 right-4 p-2 bg-purple-500 text-white rounded"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    );
};

export default DeterminantGame;
