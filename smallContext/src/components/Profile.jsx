import React,{useContext} from 'react'
import UserContext from "../context/UserContext.js";

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return (<h1>Not Logged In</h1>)
    return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Password: {user.password}</h2>
        </div>
    )
}

export default Profile
