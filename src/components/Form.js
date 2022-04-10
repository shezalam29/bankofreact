import React, { useState } from 'react';
import Debits from './Debits';
import Credits from './Credits';

const Form = () => {
    const [state, setState] = useState(<Credits/>);

    const onSubmit = () => {
        document.getElementById("username").innerHTML = document.getElementById('usr').value;
        document.body.style.backgroundColor = document.getElementById('bg').value;
        document.body.style.color = document.getElementById('txt').value;
        setState(<Credits/>)
    }

    const viewP = () => {setState('CustomizeProfile')}
    const viewC = () => {setState(<Credits/>)}
    const viewD = () => {setState(<Debits/>);}

    if (state === 'CustomizeProfile') {
        return (
            <div>
                <div class = 'flex-parent jc-center'>
                    <button onClick={viewP}>Customize Profile</button>
                    <button onClick={viewC}>Credits</button>
                    <button onClick={viewD}>Debits</button>
                </div>
                <h2 class = 'center'><u>Customize Profile</u></h2>
                <form class = 'center'>
                    Enter a username:
                    <input type="text" id='usr' /> 
                    <br></br>
                    <br></br>
                    Choose a background color: 
                    <input type="text" id='bg' />
                    <br></br>
                    <br></br>
                    Choose a text color: 
                    <input type="text" id='txt' />
                </form>
                <button class = 'center' onClick = { onSubmit }> 
                    Submit 
                </button>
            </div>
        );
    }
    return (
        <div>
            <div class = 'flex-parent jc-center'>
                <button onClick={viewP}>Customize Profile</button>
                <button onClick={viewC}>Credits</button>
                <button onClick={viewD}>Debits</button>
            </div>
            {state}
        </div>
    );
}

export default Form;
