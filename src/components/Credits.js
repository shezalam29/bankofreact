import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class Credits extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        credits: [],
        description: null,
        amount: null,
        time: null, 
      }
    }

    componentDidMount() {
        axios.get('https://moj-api.herokuapp.com/credits')
        .then((response)=> {
            this.setState({credits: response.data})
        });
    }

    render(){
        return(
        <div className = "container"  align ='center'>
            <h2><u>Credits</u></h2>
            {this.state.credits.map(data => {
                return (
                    <div className = 'container' class='box' key = {data.id}>
                        <h3>{data.description}</h3>
                        <p class = 'red' > ${data.amount.toFixed(2)}</p>
                        <p>Date: {data.date.slice(0,10)} Time: {data.date.slice(11,22)} </p>
                    </div>

                )
            })}
        </div>
        );
    }
}


export default Credits;
