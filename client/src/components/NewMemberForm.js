import React from 'react'
import Members from "./Members"


class NewMemberForm extends React.Component {
    state = {
        gym : [],
        name: "",
        number: "",
        address: "",
        gym_id: ""
    };

    componentDidMount() {
        fetch("http://localhost:3000/gym")
            .then(res => res.json())
            .then(gym => this.setState({ gym }));
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    addMember = () => {
        return {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                number: this.state.number,
                address: this.state.address,
                gym_id: this.state.gym_id
            })
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/members", this.addmember())
        .then(res => res.json())
        .then((dogs => this.props.history.push("/members"))
        )
        
    }


    render() {
        console.log(this.state.gym)
    return(
        <>
        <button button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
            <form className="new-member-form has-text-weight-bold has-text-black-bis" onSubmit= {this.handleOnSubmit}>
            <label htmlFor = "gym">GYM</label>
            <select value = {this.state.gym_id} onChange={(e) =>this.setState({gym_id:e.target.value})}>
            {this.state.gym.map(s => {
                return (
                    <option value={s.id}>{s.location}</option>
                )
                })}
            </select>
            <p>Add a Member</p>
            
                <label htmlFor = "name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "number">Number</label>
                <input
                    type="text" 
                    name="number" 
                    value={this.state.number}
                    onChange={this.handleOnChange}
                />
                <label htmlFor = "address">Address</label>
                <input
                    type="text" 
                    name="address" 
                    value={this.state.address}
                    onChange={this.handleOnChange}
                />
                
                <label htmlFor = "gym_id">Gym_id</label>
                <input
                    type="text" 
                    name="gym_id" 
                    value={this.state.gym_id}
                    onChange={this.handleOnChange}
                />

                <button type="submit">Submit</button>
            </form>   
            <div className= "new-member-form-container-container"> </div>
           

        </>
    );

}};

export default NewMemberForm;