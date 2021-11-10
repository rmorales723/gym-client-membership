import React from 'react'
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import Gyms from './Gyms';
import Members from "./Members"
import { useState } from "react";
import { browserHistory } from 'react-router';




class NewMemberForm extends React.Component {

    state = {
        gym: [],
        name: "",
        number: "",
        address: "",
        img_url: "",
        gym_id: ""
    };

    componentDidMount() {
        fetch("/members")
            .then(res => res.json())
            .then(gyms => this.setState({ gyms }));
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addMember = () => {
        return {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                number: this.state.number,
                address: this.state.address,
                img_url: this.state.img_url,
                gym_id: this.state.gym_id
            })
        }
    }



    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch("/members", this.addMember())
            .then(res => res.json())
            .then((members => {
                this.props.history.push('/members')
                console.log(Gyms)
            })


            )
    }


    render() {
        console.log(this.state.gyms)
        return (
            <div>
                {/* <NavLink to="/members">Back</NavLink> */}
                <a href="/members">Back</a>
                {/* <button button class="btn danger" onClick={() => this.props.history.push()}>Back</button> <a href="/members">Button</a> */}
                <form className="new-member-form has-text-weight-bold has-text-black-bis" onSubmit={this.handleOnSubmit}>
                    {/* <label htmlFor="gym">GYM</label> */}
                    <select value={this.state.gym_id} onChange={(e) => this.setState({ gym_id: e.target.value })}>
                        {this.state.gym.map(g => {
                            return (
                                <option value={g.id}>{g.address}</option>
                            )
                        })}
                    </select>
                    <p>Add a Member</p>

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="number">Number</label>
                    <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="img_url">Image Url</label>
                    <input
                        type="text"
                        name="img_url"
                        value={this.state.img_url}
                        onChange={this.handleOnChange}
                    />

                    <a href="/members"><button type="submit">Submit</button></a>
                </form>
                <div className="new-member-form-container-container"> </div>


            </div>
        );

    }
};

export default withRouter(NewMemberForm);