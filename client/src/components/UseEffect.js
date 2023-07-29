import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScoreTest from './ScoreTest';

function UseEffect() {

    // onLoad
    // useEffect(() => {
    //     setPic();
    // }, []);

    let [showC, setShowC] = useState(true);

    let [pic, setPic] = useState("/images/default.jpeg");
    let [pic1, setPic1] = useState("/images/boy.jpeg");
    let [pic2, setPic2] = useState("/images/ferrari.jpeg");
    let [pic3, setPic3] = useState("/images/redbull.jpeg");
    let [pic4, setPic4] = useState("/images/mclaren.jpeg");
    let [pic5, setPic5] = useState("/images/mercedes1.jpeg");
    let [pic6, setPic6] = useState("/images/ferrari.jpeg");
    let [pic7, setPic7] = useState("/images/boy.jpeg");

    return (
        <div>
            <div><Link to="/">Home</Link></div>

            <img id='homeimg' src={pic}></img>

            <div>
                <button type='button'
                    onClick={() => {
                        setShowC(!showC);
                    }}>Show/Hide ScoreComponent</button>
                {/* Component load/unload with useState */}
                {showC == true ? <ScoreTest /> : null}
            </div>

            <table>
                <thead>
                    <tr>
                        <td onClick={() => {
                            setPic(pic1)
                        }}> <img id="tableimg" src={"/images/boy.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic2)
                        }}> <img id="tableimg" src={"/images/ferrari.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic3)
                        }}> <img id="tableimg" src={"/images/redbull.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic4)
                        }}> <img id="tableimg" src={"/images/mclaren.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic5)
                        }}> <img id="tableimg" src={"/images/mercedes1.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic6)
                        }}> <img id="tableimg" src={"/images/ferrari.jpeg"}></img></td>
                        <td onClick={() => {
                            setPic(pic7)
                        }}> <img id="tableimg" src={"/images/boy.jpeg"}></img></td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default UseEffect