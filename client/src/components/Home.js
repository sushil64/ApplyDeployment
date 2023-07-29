import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Home() {

    // useEffect(() => {
    // axios.defaults.baseURL = "http://localhost:6677";
    // axios.defaults.headers.common['authorisation'] = localStorage.getItem("token");;
    // }, []);

    let [profilePic, setProfilePic] = useState("/images/boy.jpeg");

    let getData = async () => {
        // http://localhost:6677  <- no need of base url
        let response = await axios.get("/connect");
        console.log(response);
    };

    return (
        <div>
            <h3>Welcome Home!</h3>
            <div>
                <Link to="/useeffect">UseEffect</Link>
                <br></br>
                <Link to="/getlist">GetList</Link>
                <br></br>
                <Link to="/score">ScorePage</Link>
            </div>

            <button type='button'
                onClick={() => {
                    getData();
                }}>Get Data in Console</button>

            <div>
                <img id='homeimg' src={profilePic}></img>
            </div>

        </div>
    )
}

export default Home


//  --------------NOTES------------------

    // 1. Axios: await axios.post("url", dataTosend);
    //        await axios.get("url");

    // 2. http://localhost:6677 no need of writing the url many times
    //   axios.defaults.baseURL = "http://localhost:6677" declare it in useEffect once.
    //   let response = await axios.get("/connect");

    // 3. axios.defaults.headers.common['Authorisation'] = AUTH_TOKEN;
    // Token added to request Headers then its send to all requests to the server.

    // In server.js write Code: 1.let authoriseToken = (req, res, next) => {
    // 2.console.log(req.headers["Authorisation"]);
    // 3.next();};
    // 4.app.use(authoriseToken);


        // 1.let reqOptions = {      <- OLD APPROACH
        //     method: "GET"};
        // 2.let JSONData = await fetch("http://localhost:6677/connect", reqOptions);
        // 3.let JSOData = await JSONData.json();  4. console.log(JSOData);

        // ------------------
        // if (response.data.isLoggedIn == false) {
        //     alert(response.data.msg);
        // }
        // else {
        //     // navigate("/home", { state: response.data.details });
        // }
