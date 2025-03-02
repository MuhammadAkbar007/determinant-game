import PropTypes from "prop-types";

export default function Matrix({ matrix }) {
    // Check if matrix exists and is a 2D array
    if (!matrix || !matrix.length) {
        return <div>Loading matrix...</div>;
    }

    return (
        <div className="p-4 mt-4 flex flex-row flex-wrap md:flex-nowrap items-center justify-center w-full">
            {/* Matrix container */}
            <div className="relative inline-block max-w-xs md:max-w-none">
                <div className="flex flex-col border-l-2 border-r-2 border-white/50 px-3 py-1">
                    {matrix.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex justify-center items-center min-h-10"
                        >
                            {Array.isArray(row) ? (
                                // Handle 2D array
                                row.map((num, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className="md:mx-4 mx-2 md:my-2 my-1 md:text-4xl text-3xl flex items-center justify-center"
                                        style={{
                                            width: "3rem",
                                            height: "3rem",
                                        }} // Fixed dimensions for each cell
                                    >
                                        {num}
                                    </div>
                                ))
                            ) : (
                                // Handle flat array (fallback)
                                <div
                                    className="mx-4 my-2 text-4xl flex items-center justify-center"
                                    style={{ width: "3rem", height: "3rem" }}
                                >
                                    {row}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Equal Sign */}
            <div className="mx-2 md:mx-4 text-5xl font-bold flex items-center">
                =
            </div>

            {/* Question Mark */}
            <div className="text-4xl md:text-5xl font-bold flex items-center">
                ❓
            </div>
        </div>
    );
}

Matrix.propTypes = {
    matrix: PropTypes.array.isRequired,
};
