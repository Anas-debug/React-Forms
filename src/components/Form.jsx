import React from 'react'
import { useState } from 'react';

export default function Form(){
    const [firstName, setFirstName] = useState("");

    return(
    <from>
        <input
        type="text"
        placeholder="First name"
        >
        </input>
    </from>);

}