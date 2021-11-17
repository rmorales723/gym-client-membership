// import React from 'react'
// import { NavLink, useHistory, withRouter } from 'react-router-dom';
// import Gyms from './Gyms';
// import Members from "./Members"
// import { useState } from "react";
// import { browserHistory } from 'react-router';




// class NewMemberForm extends React.Component {

//     state = {
//         gym: [],
//         name: "",
//         number: "",
//         address: "",
//         img_url: "",
//         gym_id: ""
//     };

//     componentDidMount() {
//         fetch("/members")
//             .then(res => res.json())
//             .then(gyms => this.setState({ gyms }));
//     };

//     handleOnChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     addMember = () => {
//         return {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: this.state.name,
//                 number: this.state.number,
//                 address: this.state.address,
//                 img_url: this.state.img_url,
//                 gym_id: this.state.gym_id
//             })
//         }
//     }



//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         fetch("/members", this.addMember())
//             .then(res => res.json())
//             .then((members => {
//                 this.props.history.push('/members')
//                 console.log(Gyms)
//             })


//             )
//     }


//     render() {
//         console.log(this.state.gyms)
//         return (
//             <div>
//                 {/* <NavLink to="/members">Back</NavLink> */}
//                 <a href="/members">Back</a>
//                 {/* <button button class="btn danger" onClick={() => this.props.history.push()}>Back</button> <a href="/members">Button</a> */}
//                 <form className="new-member-form has-text-weight-bold has-text-black-bis" onSubmit={this.handleOnSubmit}>
//                     {/* <label htmlFor="gym">GYM</label> */}
//                     <select value={this.state.gym_id} onChange={(e) => this.setState({ gym_id: e.target.value })}>
//                         {this.state.gym.map(g => {
//                             return (
//                                 <option value={g.id}>{g.address}</option>
//                             )
//                         })}
//                     </select>
//                     <p>Add a Member</p>

//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.handleOnChange}
//                     />
//                     <label htmlFor="number">Number</label>
//                     <input
//                         type="text"
//                         name="number"
//                         value={this.state.number}
//                         onChange={this.handleOnChange}
//                     />
//                     <label htmlFor="address">Address</label>
//                     <input
//                         type="text"
//                         name="address"
//                         value={this.state.address}
//                         onChange={this.handleOnChange}
//                     />
//                     <label htmlFor="img_url">Image Url</label>
//                     <input
//                         type="text"
//                         name="img_url"
//                         value={this.state.img_url}
//                         onChange={this.handleOnChange}
//                     />

//                     <a href="/members"><button type="submit">Submit</button></a>
//                 </form>
//                 <div className="new-member-form-container-container"> </div>


//             </div>
//         );

//     }
// };

// export default withRouter(NewMemberForm);



import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'



function NewMemberForm() {
    const [gym, setGym] = useState([])
    const { id } = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [img_url, setImg_url] = useState('')
    const [errors, setErrors] = useState("");

    // useEffect(() => {
    //     upDateMember();
    // }, [])
    // function upDateMember() {
    //     fetch(`/members/${id}`)
    //     .then(res => res.json())
    //     .then(member => {
    //         setName(member.name)
    //         setNumber(member.number)
    //         setAddress(member.address)
    //         setImg_url(member.img_url)
    //     })

    // }
    const errorRender = () => {
        return errors.map(err => {
          return <div className="alert alert-danger" role="alert">{err}</div>
        })
      }

    const addMember = () => {
        return {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
                
            },
            body: JSON.stringify({
                name: name,
                number: number,
                address: address,
                img_url: img_url
            })
        }
    }

    useEffect(() => {
        fetch("/members")
            .then(res => res.json())
            .then(data => console.log(data))
    }
    )

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch("/members", addMember() )
            .then(res => {
                if (res.ok) {
                    res.json().then(() => {
                        history.push('/members')
                    })

                }else {
                    res.json().then(errors => {
                      setErrors(errors.errors)
                    })
                  }
            })

    }

    return (
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container"></div>
                <form onSubmit={handleOnSubmit} >
                {errors && errorRender()}
                    {/* {errors ? <alert className="alert alert-danger text-center" role="alert">{errors && displayError()}</alert> : <alert></alert>} */}
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label>Number</label>
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}

                    />

                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}

                    />

                    <label>ImgUrl</label>
                    <input
                        type="text"
                        name="img_url"
                        value={img_url}
                        onChange={(event) => setImg_url(event.target.value)}

                    />

                    <button type="submit">ADD MEMBER</button>
                </form>
            </div>
        </div>
    )
}


export default NewMemberForm;