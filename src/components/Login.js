import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setUser }){
    const history = useHistory();
    const [formData, setFormData]= useState ({name: "", crisis: 10})

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
            body: JSON.stringify ({...formData, wallet: formData.crisis*1000, location:"NYC", submitted: false, activities: []})
        })
            .then( r => r.json())
            .then( newUser=> setUser(newUser))
        history.push("/activities")
    }

    let sirens = [];
    for (let i = 0; i < formData.crisis ; i++)
        sirens.push(i)
    //console.log(sirens)
    const sirenUrl = "https://media1.giphy.com/media/YO7P8VC7nlQlO/giphy.gif?cid=ecf05e47qt2rz4rsckpanxze8hq8g3ylc4celewlsdoqy262&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    const sirenImages = sirens.map((i) => <img key={i} src={sirenUrl}/>)

    return (
        <div className="login">
            <div className="siren-container">
                {sirenImages}
            </div>
            <form onSubmit= {handleSubmit}> 
                <label htmlFor= "name"> name </label>
                    <input 
                        onChange= {handleName}
                        type="text"
                        name= "name"
                        placeholder="Enter name..."
                        className="input-text"
                        value={formData.name}
                    ></input>
                <label htmlFor= "crisis level"> crisis level: {formData.crisis}</label>
                    <input
                        onChange= {handleCrisis}
                        type="range" 
                        id="crisis-level" 
                        name="crisis"
                        min="1" 
                        max="10"
                        value={formData.crisis}
                        step="1"
                    ></input>
                    {/* <datalist id="values">
                        <option value="1" label="1"></option>
                        <option value="2" label="2"></option>
                        <option value="3" label="3"></option>
                        <option value="4" label="4"></option>
                        <option value="5" label="5"></option>
                        <option value="6" label="6"></option>
                        <option value="7" label="7"></option>
                        <option value="8" label="8"></option>
                        <option value="9" label="9"></option>
                        <option value="10" label="10"></option>
                    </datalist> */}
                <button type = "submit"> Get Started!</button>
            </form>
        </div>
    )
};

export default Login;