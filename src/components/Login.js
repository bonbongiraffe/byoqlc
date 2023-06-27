import React from 'react';
import { useState } from 'react';

function Login(){
    const [formData, setFormData]= useState ({name: "", crisis: 0})

    function handleName (e) { 
        setFormData({...formData, name: e.target.value})
    }

    function handleCrisis (e) {
        setFormData({...formData, crisis: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify (formData)
        })
            .then( r => r.json())
            .then( newUser=>  )

    }
    return (
        <div>
            <form onSubmit= {handleSubmit}> 
                <label for= "name"> name </label>
                    <input 
                    onChange= {handleName}
                    type="text"
                    name= "name"
                    placeholder="Enter name..."
                    className="input-text">
                    </input>
                <label for= "crisis level"> crisis level </label>
                    <input
                    onChange= {handleCrisis}
                    type="range" 
                    id="crisis-level" 
                    name="crisis"
                    min="0" 
                    max="10">
                    </input>
                <button type = "submit"> Get Started!</button>
            </form>
        </div>
    )
};

export default Login;