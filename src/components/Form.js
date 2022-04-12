// Form component 
// Sources: reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';
import Debits from './Debits';
import Credits from './Credits';

const Form = () => {
    // Using the state hook, uses Credits state as default 
    const [state, setState] = useState(<Credits/>);

    // Function for form submit button to change HTML of page
    // Can change user name, background color, text color 
    const onSubmit = () => {
        document.getElementById("username").innerHTML = document.getElementById('usr').value;
        document.body.style.backgroundColor = document.getElementById('bg').value;
        document.body.style.color = document.getElementById('txt').value;
        setState(<Credits/>)
    }

    // Functions to set state for each of the 3 buttons
    const viewP = () => {setState('CustomizeProfile')}
    const viewC = () => {setState(<Credits/>)}
    const viewD = () => {setState(<Debits/>);}

    // If the state is this, still show 3 buttons 
    // But also show a form to submit for choosing username, background/text colors
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
                    Choose a background 
                    <br></br>
                    Type in the color or it's hex value (For example: #ABC15A): 
                    <input type="text" id='bg' />
                    <br></br>
                    <br></br>
                    Choose a text color in hex 
                    <br></br>
                    Type in the color or it's hex value (For example: #ABC15A)
                    <input type="text" id='txt' />
                </form>
                <button class = 'center' onClick = { onSubmit }> 
                    Submit 
                </button>
            </div>
        );
    }
    return (
        // {state} is already Credits so show it
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
