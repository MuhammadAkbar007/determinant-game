import PropTypes from "prop-types";

export default function Header({ level, tryCount }) {
    return (
        <>
            <h1 className="md:text-5xl text-4xl font-bold">
                Determinantlarni hisoblashni o`rganamiz
            </h1>

            <h1 className="md:text-3xl text-2xl mb-10 mt-3 font-semibold text-yellow-500">
                INTERFAOL O`YINGA XUSH KELIBSIZ!!!
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                {/* level */}
                <div
                    className="text-2xl font-bold rounded-xl shadow-md shadow-purple-50 bg-blue-500/50
					md:py-5 md:px-10 py-3 px-5
					order-1"
                >
                    {level} - bosqich
                </div>

                {/* game command */}
                <h1
                    className="text-2xl font-semibold 
					my-5 md:my-0 md:mx-40
					order-3 md:order-2"
                >
                    {level + 1} - tartibli determinantni hisoblang 👇
                </h1>

                {/* try count */}
                <div
                    className="text-2xl font-bold rounded-xl shadow-md shadow-blue-50 bg-purple-500/50
					md:py-5 md:px-10 py-3 px-5 mt-7 mb-5 md:mt-0 md:mb-0
					order-2 md:order-3"
                >
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
