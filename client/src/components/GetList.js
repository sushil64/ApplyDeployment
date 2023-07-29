import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function GetList() {

    let uniqueid = 0;
    let [userList, setUserList] = useState([]);

    let getList = async () => {

        let response = await axios.get("/connect");
        console.log(response);
        console.log(response.data);
        setUserList(response.data);
    }

    return (
        <div>
            <Link to="/" >Home</Link>
            <div>
                <button type='button'
                    onClick={() => {
                        getList();
                    }}>GetList</button> </div>
            <div>
                <table>
                    <thead><tr>
                        <th>S.no</th>
                        <th>id</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr></thead>
                    <tbody>
                        {userList.map((list) => {
                            uniqueid++;
                            return <tr key={uniqueid}>
                                <td>{uniqueid}</td>
                                <td>{list.id}</td>
                                <td><img src={list.profilePic}></img></td>
                                <td>{list.firstName}</td>
                                <td>{list.lastName}</td>
                                <td>{list.gender}</td>
                                <td>{list.age}</td>
                                <td>{list.email}</td>
                                <td>{list.country}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default
    GetList