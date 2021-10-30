import React from 'react';
import Member from './Member';
import NewMemberForm from './NewMemberForm';
import {Link} from 'react-router-dom';



class Members extends React.Component {
    state = {
        members: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/members")
            .then(res => res.json())
            .then(data => this.setState({ members: data }),
            console.log(this.state)
            );
    };

    componentDidUpdate = () => {
          fetch(`http://localhost:3000/members`)
            .then((response) => response.json())
            .then(data => {
                if(data.length === this.state.members.length){
                    console.log(data.length)
                } else {
                    this.setState({members: data})
                }
            })
        }
      

    deleteMember = (e) => {
        fetch(`http://localhost:3000/members/${e.target.id}`, {
            method: "DELETE",
          })
        .then((response) => response.json())
        .then((data) => {
        this.setState({ members:[...this.state.members], data})
            });
        }

    
    gym = () => {
        this.state.members.gym.map()
     }

    renderMembers = () => {
        return (
         <div>
                {this.state.members.map(({id, name, number, address, gym_id}) => 
                    <Member 
                        key={id}
                        deleteMember={this.deleteMember}
                        id={id}
                        name={name}
                        number={number}
                        address={address}
                        gym_id={gym_id}
                    />
                )}
            </div>
            
        )
    };

    render() {
        return (
            
            <>
                
                    <Link class="button is-info"to="/members/new">New Member</Link>
                    <ul>{this.renderMembers()}</ul>
            </>
        )}
    };


export default Members;