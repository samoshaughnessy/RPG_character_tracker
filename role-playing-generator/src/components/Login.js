import * as React from 'react';

export default class Login extends React.Component {
    constructor(props){
        super(props);
   

    this.state = {
        email:'',
        password:''
    }
} 

onChangeField = (field, e) => {
    const state = {}
    state[field] = e.currentTarget.value;

    this.setState(state)
}

login = () => {

}

render(){
    return (
        <div>
            <label> Email:
            </label>
            <input onChange={this.onChangeField.bind(this, 'email')} type="text" value={this.state.email} />

            <br />

            <label> Password
            </label>
            <input onChange={this.onChangeField.bind(this, 'password')} type="text" value={this.state.email} />

        </div>
    )
}

}