import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, username} =props.friend;
    const navigate =useNavigate()
    const handleAddData =() =>{
     const path=`/friend/${id}`
     navigate(path)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Link to={"/friend/ " +  id}>Show details </Link>
            <button onClick={handleAddData}> {username} id: {id}</button>
        </div>
    );
};

export default Friend;