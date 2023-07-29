import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ScoreTest() {
    // onLoad
    // useEffect(() => {
    //     setPic();
    //     console.log("C loads")
    // }, []);

    // on Unload
    // useEffect(() => {
    //     return () => {
    //         console.log("C unloads")
    //         // calls whatever is here when component Unloads
    //     };
    // }, []);

    // useEffect(() => {
    //     setShowC();
    //     console.log("CScore loads")
    // }, [score]);

    let [score, setScore] = useState(0);

    return (
        <div>
            {/* <div><Link to="/">Home</Link></div> */}
            <div>
                <h1>Score:{score}</h1>
                <button type="button"
                    onClick={() => {
                        setScore(score + 1);
                    }}>Increase</button>
                <button type="button"
                    onClick={() => {
                        setScore(score - 1);
                    }}>Decrease</button>
            </div>
        </div>
    )
}

export default ScoreTest