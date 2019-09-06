import * as React from 'react';
import { loginUser } from "../redux/auth/actions";
import { connect } from "react-redux"

class PureLogin extends React.Component {
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
    this.props.login(this.state.email, this.state.password)
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
            <input onChange={this.onChangeField.bind(this, 'password')} type="text" value={this.state.password} />
            <button onClick = {this.login}>Login</button>

        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password));
        }
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(PureLogin);