import React, { useState, useEffect } from 'react'

const CountDown = ({ seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);

    useEffect(() => {
        if (!timeLeft) return;
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <span>{timeLeft}</span>
    );
};

export default CountDown;