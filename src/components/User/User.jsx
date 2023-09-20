/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name,email,phone} = user;
    const useStyle = {
        border: '2px solid green',
        padding : '10px',
        borderRadius: "10px",
        
    }
    return (
        <div style={useStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;