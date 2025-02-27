import PropTypes from "prop-types";

export default function Continue({ handleContinue }) {
    return (
        <div className="text-center backdrop-blur-md bg-white/20 p-10 rounded-lg shadow-lg my-8 w-full max-w-4xl">
            <p className="font-bold text-2xl ">
                🎉 Tabriklayman! Keyingi bosqichga o`tdingiz 👏
            </p>
            <button
                onClick={handleContinue}
                className="bg-green-500 px-4 py-2 mt-4 text-white font-extrabold rounded-md border shadow-sm shadow-green-500 hover:bg-green-600"
            >
                Davom etish
            </button>
        </div>
    );
}

Continue.propTypes = {
    handleContinue: PropTypes.func.isRequired,
};
