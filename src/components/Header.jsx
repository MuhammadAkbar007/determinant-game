import PropTypes from "prop-types";

export default function Header({ level, tryCount }) {
    return (
        <>
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
        </>
    );
}

Header.propTypes = {
    level: PropTypes.number.isRequired,
    tryCount: PropTypes.number.isRequired,
};
