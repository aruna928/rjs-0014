import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("Welcome! The page has loaded successfully.");
    }, []);

    return (
        <div>
            <h1>React useEffect Practical</h1>

            <p id="message">
                {message}
            </p>
        </div>
    );
}

export default App;