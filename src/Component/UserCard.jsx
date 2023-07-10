import React, {Component } from "react";
import Address from "./Address";
import Bank from "./Bank";

class UserCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { firstName,lastName,image,email } = this.props

        return(
            <div className="col-md-4">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <img src={image ? image : '#'} alt="no image" className="rounded-circle img-fluid" />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <button className="btn btn-sm btn-outline-success float-end">Details</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-lg-12 mt-2">
                                    <h4 className="text-dark"> { firstName } { lastName } </h4>
                                    <p className="text-secondary">
                                        <i className="bi bi-envelope-open-fill"></i> 
                                        <span className="text-primary"> { email } </span>
                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <Address addr= { this.props.address } />
                            </div>
                            <div className="row">
                                <Bank info = { this.props.bank } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard