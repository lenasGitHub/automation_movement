import React, { useState } from 'react';

function MouseTracker({ children }) {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX: x, clientY: y } = event;
        setCoordinates({ x, y });
    };

    const handleMouseClick = (event) => {
        const { clientX: x, clientY: y, button } = event;
        setCoordinates({ x, y });

        if (button === 0) {
            console.log('Left click');
        } else if (button === 2) {
            console.log('Right click');
        }
    };

    const handleClick = (e) => {
        if (e.type === 'contextmenu') {
            console.log('Contextmenu click');
        }
    };

    return (
        <div
            style={{ width: '100vw', height: '100vh' }}
            onMouseMove={handleMouseMove}
            onClick={handleMouseClick}
            onContextMenu={handleClick}
        >
            <div className='mouse-move'>
                <p>X: {coordinates.x}</p>
                <p>Y: {coordinates.y}</p>
            </div>
            {children}
        </div>
    );
}

export default MouseTracker;
