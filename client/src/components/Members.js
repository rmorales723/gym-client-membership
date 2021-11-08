import React from 'react';
import Member from './Member';
import NewMemberForm from './NewMemberForm';
import { Link } from 'react-router-dom';



class Members extends React.Component {
    state = {
        members: []
    }

    componentDidMount() {
        fetch("/me")
            .then(res => res.json())
            .then(data => this.setState({ members: data.members }),
                console.log(this.state)
            );
    };

    componentDidUpdate = () => {
        fetch(`/me`)
            .then((response) => response.json())
            .then(data => {
                if (data.length !== this.state.members.length) {
                    console.log(data.length)
                } else {
                    this.setState({ members: data.members })
                }
            })
    }


    deleteMember = (e) => {
        fetch(`/members/${e.target.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => this.setState({
                members: [...this.state.members] , data
            }));
    }


    gym = () => {
        this.state.members.gym.map()
    }

    renderMembers = () => {
        return (
            <div>
                {this.state.members.map(({ id, member, name, number, address, gym_id, img_url }) =>
                    <Member
                        key={id}
                        member={id}
                        deleteMember={this.deleteMember}
                        id={id}
                        name={name}
                        number={number}
                        address={address}
                        gym_id={gym_id}
                        img_url={img_url}
                    />
                )}
            </div>

        )
    };

    render() {
        return (
            <div>
                <Link class="btn btn-primary" to="/members/new">New Member</Link>
                <ul>{this.renderMembers()}</ul>
        
            </div>
        )
    }
};


export default Members;