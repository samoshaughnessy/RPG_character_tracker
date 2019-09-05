import * as React from 'react';
import {Link} from 'react-router-dom'

export default class NavBar extends React.Component{
    render(){
        return (
            <div>
                <Link to='/user'>User Page</Link>
                <Link to='/characterCreation'>Character Creation</Link>
                <Link to='/character'>Character Page</Link>
                <Link to='/game'>Game Page</Link>
            </div>
        )
    }
}