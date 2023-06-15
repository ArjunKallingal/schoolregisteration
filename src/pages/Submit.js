import React from 'react'
import { useLocation } from 'react-router-dom';

function Submit() {
    const random = () => {
        return Math.floor(Math.random() * (10 - 1)) + 1;
    }
    const location = useLocation()
    console.log(location);
    // const {input} = useParams();
    return (
        <div className='w-100 parent-main' >
            <div className='register-div'>Registraction sucessfully complected <b className='fw-bold'>{location.state}</b></div>
            <div className='register-div'>You'r admission number is <span>#{Math.floor(Math.random() * (10 - 1)) + 1}</span></div>
            <a href={'/'}><b>back to login</b></a>
        </div>
    )
}

export default Submit