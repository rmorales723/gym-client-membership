import React, { Component } from "react";
import NewMemberForm from './NewMemberForm'
import NewMembers from './NewMemberForm'



class Member extends Component {

    render() {
        return (
            <div id={this.props.id} className="member has-text-weight-bold card  ">
                {/* <h2>{this.props.name}</h2> */}
                <p>NAME: {this.props.name}</p>
                <p>Number: {this.props.number}</p>
                <p>ADDRESS: {this.props.address}</p>

                <img className="member-img card-img-top w-25 mx-auto " width="100%" src={this.props.img_url} alt=" " />

                <div class="container">
                    <div class="center">
                        <button id={this.props.id} class="btn btn-danger" onClick={this.props.deleteMember}>DELETE</button>
                        <a class="btn btn-primary" variant="primary" href={`/members/${this.props.id}/edit`}>EDIT</a>

                        {/* <button class="btn btn-danger" href={`/members/${member.id}/edit`}>EDIT</button> */}
                    </div>
                </div>

            </div>

        )
    };
}

export default Member;