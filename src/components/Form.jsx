import React from 'react'
import { useState } from 'react';

export default function Form(){
    const [firstName, setFirstName] = useState("");

    function handleChange(){
        console.log("Changed!");
    }

    return(
    <from>
        <input
        type="text"
        placeholder="First name"
        onChange={ handleChange }
        >
        </input>
    </from>);

}