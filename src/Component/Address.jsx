import React, { Component } from "react";

class Address extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { address, city, state, postalCode } = this.props.addr
        return (
            <div className="col-md-12 mt-2">
                <details>
                    <summary>Address</summary>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Address</strong>
                                    <span className="float-end text-secondary"> { address }</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>City</strong>
                                    <span className="float-end text-secondary"> { city }</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>State</strong>
                                    <span className="float-end text-secondary"> { state }</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>PostalCode</strong>
                                    <span className="float-end text-secondary"> { postalCode }</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>
        )
    }
}

export default Address