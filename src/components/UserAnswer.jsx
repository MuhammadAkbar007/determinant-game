import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function UserAnswer({
    userAnswer,
    setUserAnswer,
    handleSubmit,
}) {
    const inputRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && userAnswer) handleSubmit();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex flex-row my-6">
            <h1 className="text-3xl font-bold">Javob: </h1>
            <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                className="w-30 md:mx-15 mx-6 text-center border-2 border-white/50 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 rounded-md outline-none appearance-none"
                style={{ MozAppearance: "textfield" }}
            />
            <button
                disabled={!userAnswer}
                onClick={handleSubmit}
                className="bg-yellow-500 px-4 py-2 text-black font-extrabold rounded-md border shadow-sm shadow-yellow-500 disabled:bg-white/50 hover:bg-yellow-600"
            >
                Tekshirish
            </button>
        </div>
    );
}

UserAnswer.propTypes = {
    userAnswer: PropTypes.string,
    setUserAnswer: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
