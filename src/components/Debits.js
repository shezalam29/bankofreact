import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class Debits extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        debits: [],
        description: null,
        amount: null,
        time: null, 
      }
    }

    componentDidMount() {
        axios.get('https://moj-api.herokuapp.com/debits')
        .then((response)=> {
            this.setState({debits: response.data})
        });
    }

    render(){
        return(
        <div className = "container" align ='center'>
            <h2><u>Debits</u></h2>
            {this.state.debits.map(data => {
                return (
                    <div className = 'container' class='box' key = {data.id}>
                        <h3>{data.description}</h3>
                        <p class = 'blue'>${data.amount}</p>
                        <p>Date: {data.date.slice(0,10)} Time: {data.date.slice(12,23)} </p>
                    </div>

                )
            })}
        </div>
        );
    }
}


export default Debits;
