
import React, { useState } from 'react';

function KeyboardTracker() {
    const [isTyping, setIsTyping] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [type, setType] = useState(false);


    const handleKeyPress = (event) => {
        console.log('User pressed: ', event.key);
        setType(event.key);
    };

    const handleFocus = () => {
        setIsFocused(true);
        console.log('User inside input');
    };

    const handleBlur = () => {
        setIsFocused(false);
        console.log('User outside input');
    };

    const handleInput = (event) => {
        if (event.nativeEvent.data != null) {
            setIsTyping(true);
        }
    };

    const handleInputEnd = () => {
        setIsTyping(false);
    };
    return (
        <div className='input-container'>
            <input
                type="text"
                placeholder="Type here..."
                onKeyDown={handleKeyPress}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onInput={(e) => handleInput(e)}
                onKeyUp={handleInputEnd}
            />
            <p>{isTyping ? `typing...` : ''} {isTyping && <b>{type}</b>}</p>
            <p>user focus: {isFocused ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default KeyboardTracker;
