// export default function Matrix({ matrix }) {
//     const n = Math.sqrt(matrix.length);
//     // Split the flat matrix array into rows.
//     const rows = Array.from({ length: n }, (_, i) =>
//         matrix.slice(i * n, i * n + n),
//     );
//
//     return (
//         <div className="p-4 mt-4 inline-block">
//             <div className="relative inline-block">
//                 {/* Container with only left/right borders to mimic determinant notation */}
//                 <div className="flex flex-col border-l-2 border-r-2 border-white/50 px-4 py-2">
//                     {rows.map((row, rowIndex) => (
//                         <div
//                             key={rowIndex}
//                             className="flex justify-center items-center"
//                             style={{ minHeight: "3rem" }} // ensures each row has a minimum height
//                         >
//                             {row.map((num, colIndex) => (
//                                 <div
//                                     key={colIndex}
//                                     className="mx-2 text-xl flex items-center justify-center"
//                                     style={{ width: "3rem", height: "3rem" }} // fixed dimensions for each cell
//                                 >
//                                     {num}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Matrix({ matrix }) {
    const n = Math.sqrt(matrix.length);
    // Split the flat matrix array into rows.
    const rows = Array.from({ length: n }, (_, i) =>
        matrix.slice(i * n, i * n + n),
    );

    return (
        <div className="p-4 mt-4 flex items-center">
            {/* Matrix container */}
            <div className="relative inline-block">
                <div className="flex flex-col border-l-2 border-r-2 border-white/50 px-4 py-2">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex justify-center items-center"
                            style={{ minHeight: "3rem" }} // Ensures each row has a consistent height
                        >
                            {row.map((num, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="mx-6 my-2 text-4xl flex items-center justify-center"
                                    style={{ width: "3rem", height: "3rem" }} // Fixed dimensions for each cell
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Equal Sign */}
            <div className="ml-4 text-5xl font-bold flex items-center h-full">
                = ❓
            </div>
        </div>
    );
}
