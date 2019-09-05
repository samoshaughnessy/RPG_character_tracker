import * as React from 'react';
import Login from '../components/Login.js'


export default class LoginPage extends React.Component {
    constructor(props){
        super(props)

        
    }



    render(){
        return (
            <div>
                <h1>Only thing to be rendered?</h1>
                <Login />
            </div>
        )
    }

}

