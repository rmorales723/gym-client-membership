import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'

function EditMember() {
    const { id } = useParams()
    const history = useHistory()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`/member/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                number,
                address,
            }),
        })
            .then((res) => {

                history.push('/members')
            })
        }
    //   .then((result) => setMember(result))
    //   .catch((err) => console.log('error: ', err))



    return (
        <form onSubmit={handleOnSubmit} >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Number</label>
            <input
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                
            />

            <label>Address</label>
            <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                
            />

            <button type="submit">Edit</button>
            <button>
                Cancel
            </button>
        </form>
    )
}


export default EditMember;