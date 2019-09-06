import * as React from 'react'
import { connect } from "react-redux"
import { logoutNow } from "../redux/auth/actions"

import axios from "axios"


export class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            name: '',
            description: '',
            gameName: '',
            gameDescription: '',
            characterID:''
        }


    }

    logout = () => {
        this.props.logout()
    }

    // call API should be within the redux store - such that when you call the API you get the data and can render it to the screen 
    callAPI = () => {
        let user = localStorage.getItem('token');
        console.log(user)
        axios.get(`${process.env.REACT_APP_API_SERVER}/api/characterBase`, { headers: { "Authorization": `Bearer ${user}` } })
            .then(response => {
                console.log(response.data[0]);

                this.setState({
                    name: response.data[0].name,
                    description: response.data[0].description
                })

                axios.get(`${process.env.REACT_APP_API_SERVER}/api/characterBase/game/${response.data[0].game_id}`, { headers: { "Authorization": `Bearer ${user}` } })
                    .then(response => {
                      
                        this.setState({
                            gameName: response.data[0].name,
                            gameDescription: response.data[0].description
                        })
                    })


            })
    }

    render() {
        return (
            <div>
                <button onClick={this.callAPI}>CallAPI</button>
                <button onClick={this.logout}>LogOut</button>


                <div id="characterInfo">
                
                    Name: {this.state.name}
                    <br/>
                    Description: {this.state.description}

                <br/>
                Game: {this.state.gameName}
                <br />
                Game Description: {this.state.gameDescription}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutNow())
        }
    }
}

export default connect(null, mapDispatchToProps)(UserPage);

