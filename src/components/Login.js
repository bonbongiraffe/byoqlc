import React from 'react';

function Login(){
    return (
        <div>
            <form> 
                <label for= "name"> name </label>
                    <input  
                    type="text"
                    name="name"
                    placeholder="Enter name..."
                    className="input-text">
                    </input>
            </form>
        </div>
    )
};

export default Login;