import React, {Component } from "react";
import UserCard from './UserCard'

class User extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
               <div className="row">
                   {
                        this.props.users.map((item,index) => {
                            return (
                                <UserCard key= {index} {...item}/>
                            )
                        })
                    }
               </div>
            </div>
        )
    }
}

export default User