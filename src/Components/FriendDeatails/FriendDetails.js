import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {details} =useParams()
    const [friend, setFriend]= useState([])
    useEffect( () =>{
        const url=`https://jsonplaceholder.typicode.com/users/${details}`       
        fetch(url)
        .then(res => res.json())
        .then(data  => setFriend(data))
    } , [])
    return (
        <div>
            <h1>Friends detials know:   {details}</h1>
            <h1>Name : {friend.name}</h1>
            <h2>Email :  {friend.email}</h2>
            <h3>Website: {friend.website}</h3>
        </div>
    );
};

export default FriendDetails;