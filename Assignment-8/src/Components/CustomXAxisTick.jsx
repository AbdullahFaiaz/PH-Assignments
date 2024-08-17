import React from 'react';

const CustomXAxisTick = ({ x, y, payload }) => {
    const maxCharsPerLine = 15; // Maximum characters per line
    let bookName = payload.value;

    // Split the bookName into two lines if it exceeds the character limit
    if (bookName.length > maxCharsPerLine) {
        const splitIndex = bookName.lastIndexOf(' ', maxCharsPerLine); // Find the last space within the character limit
        const firstLine = bookName.substring(0, splitIndex); // First line
        const secondLine = bookName.substring(splitIndex + 1); // Second line
        return (
            <>
                <text
                    x={x}
                    y={y}
                    dy={16} // Vertical displacement for the first line
                    textAnchor="middle"
                    fill="#666"
                    style={{
                        fontSize: '1vw', // Adjust font size
                        lineHeight: '2vw', // Adjust line height
                    }}
                >
                    {firstLine}
                </text>
                <text
                    x={x}
                    y={y + 20} // Vertical displacement for the second line
                    dy={16} // Vertical displacement for the second line
                    textAnchor="middle"
                    fill="#666"
                    style={{
                        fontSize: '1vw', // Adjust font size
                        lineHeight: '2vw', // Adjust line height
                    }}
                >
                    {secondLine}
                </text>
            </>
        );
    } else {
        return (
            <text
                x={x}
                y={y}
                dy={16} // Vertical displacement for single line text
                textAnchor="middle"
                fill="#666"
                style={{
                    fontSize: '1vw', // Adjust font size
                    lineHeight: '2vw', // Adjust line height
                }}
            >
                {bookName}
            </text>
        );
    }
};

export default CustomXAxisTick;
