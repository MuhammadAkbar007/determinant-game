export default function UserAnswer({ userAnswer, setUserAnswer }) {
    return (
        <div className="flex flex-row">
            <h1 className="text-4xl font-bold">Javob: </h1>
            <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.value)}
                className="mx-15 border-amber-500 text-amber-600 outline-amber-500 outline-border-500"
            />
        </div>
    );
}
