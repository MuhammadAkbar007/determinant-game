import PropTypes from "prop-types";
import {
    calculateDeterminant,
    calculateDeterminant2x2,
    getSubmatrix,
} from "../utils/matrixUtils";

export default function Explanation({ matrix, correctAnswer }) {
    const formatNumber = (num) => {
        return num < 0 ? `(${num})` : num;
    };

    // If no matrix is provided, show a loading message
    if (!matrix || !matrix.length) {
        return (
            <div className="backdrop-blur-md bg-white/20 p-10 rounded-lg shadow-lg">
                Loading explanation...
            </div>
        );
    }

    const matrixSize = matrix.length;

    // Function to generate explanation for 2x2 matrix
    const explain2x2 = () => {
        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[1][0];
        const d = matrix[1][1];

        return (
            <>
                <h2 className="text-2xl font-bold mb-4">
                    2×2 Determinant Formula
                </h2>
                <div className="mb-6 text-xl">
                    <p>2×2 matritsa uchun determinant formulasi:</p>
                    <div className="my-4 font-mono">det(A) = a×d - b×c</div>
                    <p>Bu yerda:</p>
                    <div className="grid grid-cols-2 gap-4 my-4 text-center">
                        <div>a = {a}</div>
                        <div>b = {b}</div>
                        <div>c = {c}</div>
                        <div>d = {d}</div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Hisoblash</h2>
                <div className="text-xl">
                    <p className="mb-2">
                        det(A) = {a} × {formatNumber(d)} - {formatNumber(b)} ×{" "}
                        {formatNumber(c)}
                    </p>
                    <p className="mb-2">
                        det(A) = {a * d} - {formatNumber(b * c)}
                    </p>
                    <p className="font-bold mb-2">det(A) = {a * d - b * c}</p>
                </div>
            </>
        );
    };

    // Function to generate explanation for 3x3 matrix
    const explain3x3 = () => {
        // Values from the matrix
        const [row1, row2, row3] = matrix;

        // Calculate using cofactor expansion along first row
        const cofactors = row1.map((value, col) => {
            const sign = Math.pow(-1, col);
            const subMatrix = getSubmatrix(matrix, 0, col);
            const minorDet = calculateDeterminant2x2(subMatrix);
            return {
                value,
                sign,
                col,
                subMatrix,
                minorDet,
                result: sign * value * minorDet,
            };
        });

        return (
            <>
                <h2 className="text-2xl font-bold mb-4">
                    3×3 Determinant Formula
                </h2>
                <div className="mb-6 text-xl">
                    <p>
                        3×3 matritsa uchun determinant formulasi (1-qator
                        bo`yicha yoyish):
                    </p>
                    <div className="my-4 font-mono">
                        det(A) = a₁₁×M₁₁ - a₁₂×M₁₂ + a₁₃×M₁₃
                    </div>
                    <p>
                        Bu yerda M₁ᵢ - minor determinantlar (2×2 determinantlar)
                    </p>
                </div>

                <h2 className="text-2xl font-bold mb-4">Hisoblash</h2>
                <div className="space-y-6 text-lg">
                    {cofactors.map((cf, index) => (
                        <div
                            key={index}
                            className="border border-white/30 p-4 rounded-lg"
                        >
                            <p className="mb-2 font-semibold">
                                {cf.sign > 0 ? "" : "-"} {Math.abs(cf.value)} ×
                                Minor{index + 1}:
                            </p>

                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <div>{cf.subMatrix[0][0]}</div>
                                <div>{cf.subMatrix[0][1]}</div>
                                <div>{cf.subMatrix[1][0]}</div>
                                <div>{cf.subMatrix[1][1]}</div>
                            </div>

                            <p className="mb-1">
                                Minor{index + 1} = {cf.subMatrix[0][0]} ×{" "}
                                {formatNumber(cf.subMatrix[1][1])} -{" "}
                                {formatNumber(cf.subMatrix[0][1])} ×{" "}
                                {formatNumber(cf.subMatrix[1][0])}
                            </p>
                            <p className="mb-1">
                                Minor{index + 1} ={" "}
                                {cf.subMatrix[0][0] * cf.subMatrix[1][1]} -{" "}
                                {formatNumber(
                                    cf.subMatrix[0][1] * cf.subMatrix[1][0],
                                )}
                            </p>
                            <p className="mb-1">
                                Minor{index + 1} = {cf.minorDet}
                            </p>
                            <p className="font-bold">
                                Term{index + 1} = {cf.sign > 0 ? "" : "-"}
                                {Math.abs(cf.value)} ×{" "}
                                {formatNumber(cf.minorDet)} = {cf.result}
                            </p>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-white/50">
                        <p className="mb-2">
                            det(A) ={" "}
                            {cofactors
                                .map(
                                    (cf, i) =>
                                        `${cf.result >= 0 && i > 0 ? "+" : ""}${cf.result}`,
                                )
                                .join(" ")}
                        </p>
                        <p className="text-xl font-bold">
                            det(A) = {correctAnswer}
                        </p>
                    </div>
                </div>
            </>
        );
    };

    // Function to generate explanation for 4x4 matrix
    const explain4x4 = () => {
        // For 4x4, we'll show the first level of cofactor expansion
        // and then summarize the results of 3x3 determinants
        const cofactors = matrix[0].map((value, col) => {
            const sign = Math.pow(-1, col);
            const subMatrix = getSubmatrix(matrix, 0, col);
            const minorDet = calculateDeterminant(subMatrix); // This is a 3x3 determinant
            return { value, sign, col, result: sign * value * minorDet };
        });

        return (
            <>
                <h2 className="text-2xl font-bold mb-4">
                    4×4 Determinant Formula
                </h2>
                <div className="mb-6 text-xl">
                    <p>
                        4×4 matritsa uchun determinant formulasi (1-qator
                        bo`yicha yoyish):
                    </p>
                    <div className="my-4 font-mono">
                        det(A) = a₁₁×M₁₁ - a₁₂×M₁₂ + a₁₃×M₁₃ - a₁₄×M₁₄
                    </div>
                    <p>
                        Bu yerda M₁ᵢ - minor determinantlar (3×3 determinantlar)
                    </p>
                </div>

                <h2 className="text-2xl font-bold mb-4">Hisoblash</h2>
                <div className="space-y-6 text-lg">
                    <p>
                        4×4 determinantni hisoblash uchun, birinchi qator
                        bo`yicha koafaktorlar yordamida yoyamiz:
                    </p>

                    {cofactors.map((cf, index) => (
                        <div
                            key={index}
                            className="border border-white/30 p-4 rounded-lg"
                        >
                            <p className="mb-2 font-semibold">
                                {cf.sign > 0 ? "" : "-"} {Math.abs(cf.value)} ×
                                Minor{index + 1}
                            </p>
                            <p className="mb-1">
                                Minor{index + 1} - 3×3 determinant
                            </p>
                            <p className="font-bold">
                                Term{index + 1} = {cf.sign > 0 ? "" : "-"}
                                {Math.abs(cf.value)} × {cf.sign > 0 ? "" : "-"}
                                {Math.abs(
                                    cf.result / cf.value / cf.sign,
                                )} = {cf.result}
                            </p>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-white/50">
                        <p className="mb-2">
                            det(A) ={" "}
                            {cofactors
                                .map(
                                    (cf, i) =>
                                        `${cf.result >= 0 && i > 0 ? "+" : ""}${cf.result}`,
                                )
                                .join(" ")}
                        </p>
                        <p className="text-xl font-bold">
                            det(A) = {correctAnswer}
                        </p>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="backdrop-blur-md bg-white/20 p-10 rounded-lg shadow-lg my-8 max-w-4xl w-full">
            <h1 className="text-3xl font-bold mb-6">Determinant Yechimi</h1>

            {matrixSize === 2 && explain2x2()}
            {matrixSize === 3 && explain3x3()}
            {matrixSize === 4 && explain4x4()}
        </div>
    );
}

Explanation.propTypes = {
    matrix: PropTypes.array.isRequired,
    correctAnswer: PropTypes.number.isRequired,
};
