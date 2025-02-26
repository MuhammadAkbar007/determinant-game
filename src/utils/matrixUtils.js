// matrixUtils.js - Utility functions for matrix operations

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a random square matrix of size n×n
 * @param {number} n - Size of the matrix
 * @param {number} min - Minimum value for random numbers
 * @param {number} max - Maximum value for random numbers
 * @returns {Array<Array<number>>} Random matrix
 */
export const generateRandomMatrix = (n, min = -99, max = 99) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(getRandomInt(min, max));
        }
        matrix.push(row);
    }
    return matrix;
};

/**
 * Calculates the determinant of a 2×2 matrix
 * @param {Array<Array<number>>} matrix - 2×2 matrix
 * @returns {number} Determinant value
 */
export const calculateDeterminant2x2 = (matrix) => {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
};

/**
 * Creates a submatrix by removing a specified row and column
 * @param {Array<Array<number>>} matrix - Original matrix
 * @param {number} rowToRemove - Index of row to remove
 * @param {number} colToRemove - Index of column to remove
 * @returns {Array<Array<number>>} Submatrix
 */
export const getSubmatrix = (matrix, rowToRemove, colToRemove) => {
    const submatrix = [];
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        if (i === rowToRemove) continue;

        const newRow = [];
        for (let j = 0; j < n; j++) {
            if (j === colToRemove) continue;
            newRow.push(matrix[i][j]);
        }

        submatrix.push(newRow);
    }

    return submatrix;
};

/**
 * Calculates the determinant of a matrix of any size
 * @param {Array<Array<number>>} matrix - Square matrix
 * @returns {number} Determinant value
 */
export const calculateDeterminant = (matrix) => {
    const n = matrix.length;

    // Base case: 1×1 matrix
    if (n === 1) {
        return matrix[0][0];
    }

    // Base case: 2×2 matrix
    if (n === 2) {
        return calculateDeterminant2x2(matrix);
    }

    // For larger matrices, use cofactor expansion along the first row
    let det = 0;
    for (let j = 0; j < n; j++) {
        const submatrix = getSubmatrix(matrix, 0, j);
        const cofactor =
            matrix[0][j] * Math.pow(-1, j) * calculateDeterminant(submatrix);
        det += cofactor;
    }

    return det;
};

/**
 * Generates a determinant problem based on the specified level
 * @param {number} level - Difficulty level (1, 2, or 3)
 * @returns {Object} Object containing the matrix, answer, and level
 */
export const generateDeterminantProblem = (level = 1) => {
    // Ensure level is valid (1, 2, or 3)
    const validLevel = Math.min(Math.max(1, level), 3);

    // Determine matrix size based on level
    const size = validLevel + 1; // Level 1: 2×2, Level 2: 3×3, Level 3: 4×4

    // Generate random matrix
    const matrix = generateRandomMatrix(size);

    // Calculate determinant
    const answer = calculateDeterminant(matrix);

    return {
        matrix,
        answer,
        level: validLevel,
    };
};
