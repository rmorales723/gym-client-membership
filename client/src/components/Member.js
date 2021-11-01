import React, { Component } from "react";
import NewMemberForm from './NewMemberForm'



class Member extends Component {

    render() {
        return (
            <div id={this.props.id}className="member has-text-weight-bold ">
                <h2>{this.props.name}</h2>
                <p>Name:{this.props.number}</p>
                <p>AGE: {this.props.address}</p>
                    
                    <div class="container">
                    <div class="center">
                <button id={this.props.id} class="button is-danger" onClick={this.props.deleteMember}>DELETE</button>
                    </div>
                </div>
            
            </div>

        )
    };
}

export default Member;